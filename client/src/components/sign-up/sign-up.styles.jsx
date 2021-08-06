import styled from 'styled-components'

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 23.75rem;

    @media screen and (max-width: 800px) {
        width: 100%;
    }

    @media screen and (max-width: 920px) {
        padding-right: 2.8rem;
    }
`

export const SignUpTitle = styled.h2`
    margin: 0.625rem 0;
`
