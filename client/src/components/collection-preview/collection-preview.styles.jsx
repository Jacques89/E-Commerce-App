import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875rem;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`

export const TitleContainer = styled.h1`
    font-size: 1.75rem;
    margin-bottom: 1.563rem;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`

TitleContainer.displayName = 'TitleContainer'

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0.938rem;
    }
`
