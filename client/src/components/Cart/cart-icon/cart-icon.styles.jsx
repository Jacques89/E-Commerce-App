import styled from 'styled-components'

import { ReactComponent as ShoppingIconSVG } from '../../../assets/shopping-bag.svg'

export const CartContainer = styled.div`
    width: 2.813rem;
    height: 2.813rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

CartContainer.displayName = 'CartContainer'

export const ShoppingIcon = styled(ShoppingIconSVG)`
    width: 1.5rem;
    height: 1.5rem;
`

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 0.625rem;
    font-weight: bold;
    bottom: 0.75rem;
`

ItemCountContainer.displayName = 'ItemCountContainer'
