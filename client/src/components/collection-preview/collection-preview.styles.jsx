import styled from 'styled-components'

export const CollectionPreviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`
CollectionPreviewDiv.displayName = 'CollectionPreviewStyles';

export const Title = styled.h1`
    font-size: 1.75rem;
    margin-bottom: 1.563rem;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`

Title.displayName = 'TitleContainer'

export const PreviewDiv = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0.938rem;
    }
`
PreviewDiv.displayName = 'PreviewStyles';