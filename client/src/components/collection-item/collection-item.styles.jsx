import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 21.875rem;
    align-items: center;
    position: relative;

    &:hover {
        .image {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;
        grid-template-columns: 1fr;
        display: flex;
        justify-content: space-between;

        &:hover {
            .image {
                opacity: unset;
            }

            button {
                opacity: unset;
            }
        }
    }
`

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 15.938rem;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        top: 13.688rem;
        padding: 0 0.625rem 0 0.625rem;
    }
`

AddButton.displayName = 'AddButton'

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 0.313rem;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    @media screen and (max-width: 800px) {
        width: 80vw;
        height: 95%;
    }
`

BackgroundImage.displayName = 'BackgroundImage'

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;

    @media screen and (max-width: 800px) {
        width: 80vw;
        height: 20%;
        font-size: 2.25rem;
    }
`

CollectionFooterContainer.displayName = 'CollectionFooterContainer'

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 0.938rem;
`

NameContainer.displayName = 'NameContainer'

export const PriceContainer = styled.span`
    text-align: right;
`

PriceContainer.displayName = 'PriceContainer'
