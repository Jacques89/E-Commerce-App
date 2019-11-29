import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_4LWkhW6YMTeQkuUIVIe96Vhi00ntsc6jUc';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Payment Successful!')
        })
        .catch(error => {
            console.log('Payment error: ', console.log(error));
            alert(
                'There was an issue with your payment. Please use the provided credit card details'
            )
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Jacques Threads Ltd'
            billingAddress
            shippingAddress
            currency='EUR'
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
