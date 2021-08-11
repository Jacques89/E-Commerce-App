import React from 'react'
import { connect } from 'react-redux'

import CollectionItemContainer from '../../components/collection-item/collection-item.container'
import { selectCollection } from '../../redux/shop/shop.selectors'

import { CollectionPageContainer, CollectionTitle, CollectionItemsDiv } from './collection.styles'

export const CollectionPage = ({ collection: { title, items } }) => {
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsDiv>
                {items.map((item) => (
                    <CollectionItemContainer key={item.id} item={item} />
                ))}
            </CollectionItemsDiv>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
