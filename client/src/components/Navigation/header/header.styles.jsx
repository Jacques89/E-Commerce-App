import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 4.375rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.563rem;

    @media screen and (max-width: 800px) {
        height: 3.75rem;
        padding: 0.625rem;
        margin-bottom: 1.25rem;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 4.375rem;
    padding: 1.563rem;

    @media screen and (max-width: 800px) {
        width: 3.125rem;
        padding: 0;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`

export const OptionLink = styled(Link)`
    padding: 0.0625rem 0.938rem;
    cursor: pointer;
`

OptionLink.displayName = 'OptionLink'
