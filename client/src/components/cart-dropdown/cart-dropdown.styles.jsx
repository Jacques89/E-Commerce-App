import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 15rem;
    height: 21.25rem;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    border: 0.063rem solid black;
    background-color: white;
    top: 5.625rem;
    right: 2.5rem;
    z-index: 5;
`

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`

CartDropdownButton.displayName = 'CartDropdownButton'

export const EmptyMessageContainer = styled.span`
    font-size: 1.125rem;
    margin: 3.125rem auto;
`

EmptyMessageContainer.displayName = 'EmptyMessageContainer'

export const CartItemsContainer = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`
