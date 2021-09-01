import React from 'react'
import PropTypes from 'prop-types'

import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} x {price}€
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default React.memo(CartItem)

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}
