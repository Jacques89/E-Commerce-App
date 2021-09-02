import styled from 'styled-components'

export const ContactFormContainer = styled.div`
    width: 50%;

    @media screen and (max-width: 800px) {
        width: 75%;
    }
`
ContactFormContainer.displayName = 'ContactFormStyles'

export const Title = styled.h1`
    text-align: center;
`
Title.displayName = 'TitleStyles'

export const MessageBox = styled.textarea`
    margin-bottom: 1.563rem;
    width: 100%;
`
MessageBox.displayName = 'MessageBoxStyles'
