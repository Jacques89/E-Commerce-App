import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const CollectionTitle = styled.h2`
    font-size: 2.375rem;
    margin: 0 auto 1.875rem;
`

export const CollectionItemsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.938rem;
    & > div {
        margin-bottom: 1.875rem;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-gap: 0.938rem;
    }

    @media screen and (max-width: 554px) {
        grid-template-columns: 1fr;
        grid-gap: 0.938rem;
        width: 40%;
    }
`

CollectionItemsDiv.displayName = 'CollectionItemsStyle'
