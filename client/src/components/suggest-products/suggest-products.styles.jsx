import styled from 'styled-components'

export const SuggestedSectionDiv = styled.div`
    @media screen and (max-width: 800px) {
        margin: 3.125rem 0.213rem;
        justify-content: center;
    }

    @media screen and (min-width: 1250px) {
        display: block;
        margin: 0;
    }
`

export const SuggestedProductsDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 1.563rem;

    @media screen and (max-width: 800px) {
        display: grid;
        justify-content: center;
    }
`

export const Title = styled.h2`
    display: block;
`
