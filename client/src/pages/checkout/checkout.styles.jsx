import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.125rem auto 0;
    @media screen and (max-width: 1200px) {
        width: 90%;
    }
`

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.063rem solid darkgrey;
`

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    &:last-child {
        width: 8%;
    }
    @media screen and (max-width: 800px) {
        width: 22%;
        &:last-child {
            width: 12%;
        }
    }
`

export const TotalContainer = styled.div`
    margin-top: 1.875rem;
    margin-left: auto;
    font-size: 2.25rem;
`

export const WarningContainer = styled.div`
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 1.55rem;
    color: red;
`
