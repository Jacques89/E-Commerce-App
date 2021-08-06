import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 6.25rem;
    border-bottom: 0.063rem solid darkgrey;
    padding: 0.938rem 0;
    font-size: 1.25rem;
    align-items: center;

    @media screen and (max-width: 800px) {
        font-size: 1.125re,;
    }
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 0.938rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const TextContainer = styled.span`
    width: 23%;
    @media screen and (max-width: 800px) {
        width: 22%;
    }
`

export const QuantityContainer = styled(TextContainer)`
    display: flex;
    span {
        margin: 0 0.625rem;
    }
    div {
        cursor: pointer;
    }
`

QuantityContainer.displayName = 'QuantityContainer'

export const RemoveButtonContainer = styled.div`
    padding-left: 0.75rem;
    cursor: pointer;
`

RemoveButtonContainer.displayName = 'RemoveButtonContainer'
