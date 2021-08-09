import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItemContainer from '../collection-item/collection-item.container'

import { CollectionPreviewDiv, Title, PreviewDiv } from './collection-preview.styles'

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewDiv>
        <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </Title>
        <PreviewDiv>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItemContainer key={item.id} item={item} routeName={routeName} />
                ))}
        </PreviewDiv>
    </CollectionPreviewDiv>
)

export default withRouter(CollectionPreview)
