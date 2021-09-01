import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = 'black'

const shrinkLabelStyles = css`
    top: -0.875rem;
    font-size: 0.75rem;
    color: ${mainColor};
`

export const GroupContainer = styled.div`
    position: relative;
    margin: 2.813rem 0;

    input[type='password'] {
        letter-spacing: 0.3em;
    }
`

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 1.125rem;
    padding: 0.625rem 0.625rem 0.625rem 0.313rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 0.063rem solid ${subColor};
    margin: 1.563rem 0;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`

FormInputContainer.displayName = 'FormInputContainer'

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.313rem;
    top: 0.625rem;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`

FormInputLabel.displayName = 'FormInputLabel'
