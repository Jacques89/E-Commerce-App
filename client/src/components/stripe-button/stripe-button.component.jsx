import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import PropTypes from 'prop-types'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_4LWkhW6YMTeQkuUIVIe96Vhi00ntsc6jUc'

    const onToken = (token) => {
        axios({
            url: '/charges',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then((response) => {
                swal('Payment Successful!', 'Your Order is complete!', 'success', {
                    button: 'Continue'
                })
            })
            .catch((error) => {
                console.log('Payment Error:', error.message)
                swal(
                    'There was an issue with your payment',
                    'Please use the provided card details',
                    'error',
                    {
                        button: 'Continue'
                    }
                )
            })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Thats Vinyl GmbH'
            currency='EUR'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton

StripeCheckoutButton.propTypes = {
    price: PropTypes.number.isRequired
}