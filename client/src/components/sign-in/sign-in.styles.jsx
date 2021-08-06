import styled from 'styled-components'

export const SignInContainer = styled.div`
    width: 23.75rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const SignInTitle = styled.h2`
    margin: 0.625rem 0;
`

export const ButtonsBarContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        #sign-in-email-button {
            margin-bottom: 1rem;
            width: 12rem;
        }
    }
`
