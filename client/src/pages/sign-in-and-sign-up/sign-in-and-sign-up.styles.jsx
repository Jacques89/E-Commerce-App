import styled from 'styled-components'

export const SignInAndSignUpContainer = styled.div`
    width: 53.125rem;
    display: flex;
    justify-content: space-between;
    margin: 1.875rem auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
        align-items: center;
        > *:first-child {
            margin-bottom: 3.125rem;
        }
    }
`
