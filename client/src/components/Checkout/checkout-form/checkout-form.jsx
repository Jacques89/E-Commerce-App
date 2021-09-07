import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './checkout-form.styles.scss'
import axios from 'axios'
import swal from 'sweetalert'
import BillingDetailsFields from 'components/Forms/billing-details/billing-details.component'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontSize: '1rem',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883' },
            '::placeholder': { color: '#87bbfd' }
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}

const CheckoutForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post('http://localhost:5000/payment', {
                    amount: 2000,
                    id
                })

                if (response.data.success) {
                    console.log('Successful payment')
                    setSuccess(true)
                }
                swal('Payment Successful!', 'Your Order is complete!', 'success', {
                    button: 'Continue'
                })
            } catch (error) {
                console.log('error', error)
                swal(
                    'There was an issue with your payment',
                    'Please use the provided card details',
                    'error',
                    {
                        button: 'Continue'
                    }
                )
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className='formRow'>
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    {BillingDetailsFields()}
                    <button className='PayButton'>Pay</button>
                </form>
            ) : (
                <div>
                    <h2>Order has been submitted</h2>
                </div>
            )}
        </>
    )
}

export default CheckoutForm
