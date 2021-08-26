const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const enforce = require('express-sslify')

if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: './env.local'})

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }))
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

app.post('/payment', cors(), async (req, res) => {
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'EUR',
            description: 'That\'s Vinyl',
            payment_method: id,
            confirm: true
        })
        console.log('Payment', payment)
        res.json({
            message: 'Payment successful!',
            success: true
        })
    } catch (error) {
        console.log('Error', error)
        res.json({
            message: 'Payment failed!',
            success: false
        })
    }
})

app.listen(port, (error) => {
    if (error) throw error
    console.log(`Server running on port ${port}` )
})