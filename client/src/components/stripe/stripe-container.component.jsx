import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from '../checkout-form/checkout-form'

const PUBLIC_KEY = 'pk_test_4LWkhW6YMTeQkuUIVIe96Vhi00ntsc6jUc'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    )
}
