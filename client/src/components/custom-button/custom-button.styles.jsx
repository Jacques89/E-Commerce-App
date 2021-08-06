import styled, { css } from 'styled-components'

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 0.063rem solid black;
    }


`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 0.063rem solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 10.313rem;
    width: auto;
    height: 3.125rem;
    letter-spacing: 0.031rem;
    line-height: 3.125rem;
    padding: 0 2.188rem 0 2.188rem;
    font-size: 0.938rem;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`
