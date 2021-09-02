import styled from 'styled-components'

export const FormFieldContainer = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 0.938rem;
    margin-right: 0.938rem;
    border-top: 0.063rem solid #0000;
    &:first-of-type {
        border-top: none;
    }
`

export const Label = styled.label`
    width: 20%;
    min-width: 4.375rem;
    padding: 0.688rem 0;
    color: #00000;
    overflow: hidden;
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-right: 0.063rem solid #819efc;
`

export const Input = styled.input`
    font-size: 1rem;
    width: 100%;
    padding: 0.688rem 0.938rem 0.688rem 0.938rem;
    color: #00000;
    background-color: transparent;
    animation: 1ms void-animation-out;
    &::placeholder {
        color: #c4c4c4;
    }
`