import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const ItemDiv = styled.div`
    display: block;
    width: 80%;
    margin: auto;

    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(22.5rem, 1fr));
        gap: 0.625rem;
    }
`

export const ItemImage = styled.div`
    background-size: 45rem 27rem, contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    @media screen and (max-width: 1250px) {
        height: 30rem;
        width: 100%;
    }

    @media screen and (min-width: 900px) {
        margin: 0;
        width: 100%;
    }

    @media screen and (min-width: 1250px) {
        height: 30rem;
    }
`
ItemImage.displayName = 'ItemImageStyles'

export const ItemDetailsDiv = styled.div`
    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: 11% 11% 15% auto;
    }
`

export const NameSpan = styled.h1`
    font-size: 250%;
    font-weight: 500;
    margin-top: 0.625rem;
    margin-bottom: 1.125rem;

    @media screen and (min-width: 900px) {
        grid-row: 1;
        grid-column: span 2 / auto;
    }
`

export const PriceSpan = styled.span`
    display: block;
    font-size: 150%;
    grid-row: 2;
    margin-top: 0.52rem;
    margin-bottom: 1.563rem;
`

export const DescriptionSpan = styled.span`
    grid-row: 4;
    grid-column: span 2 / auto;
`

export const AddButton = styled(CustomButton)`
    margin-top: 1.563rem;

    @media screen and (min-width: 900px) {
        grid-column: span 2 / auto;
        grid-row: 3;
        margin-top: 0;
        max-width: 23.438rem;
    }
`
AddButton.displayName = 'AddButtonStyles'
