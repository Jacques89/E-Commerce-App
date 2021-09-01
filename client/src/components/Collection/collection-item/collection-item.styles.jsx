import styled from 'styled-components'
import CustomButton from '../../Button/custom-button/custom-button.component'

export const CollectionItemDiv = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 21.875rem;
    align-items: center;
    position: relative;
    margin-bottom: 1.25rem;
    cursor: pointer;

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

        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }

    @media screen and (max-width: 554px) {
        width: 40vw;
        display: flex;
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
CollectionItemDiv.displayName = 'CollectionItemStyles'

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
        padding: 0 0.625rem;
    }
`
AddButton.displayName = 'AddButtonStyles'

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 0.313rem;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    @media screen and (max-width: 800px) {
        width: 77vw;
        background-size: 41rem;
        background-repeat: no-repeat;
    }
`
BackgroundImage.displayName = 'BackgroundImageStyles'

export const CollectionFooterDiv = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;

    @media screen and (max-width: 800px) {
        width: 77vw;
    }
`
CollectionFooterDiv.displayName = 'CollectionFooterStyles'

export const NameSpan = styled.span`
    width: 90%;
    margin-bottom: 0.938rem;
`
NameSpan.displayName = 'NameSpanStyles'

export const PriceSpan = styled.span`
    width: 10%;
    text-align: right;
`
PriceSpan.displayName = 'PriceSpanStyles'
