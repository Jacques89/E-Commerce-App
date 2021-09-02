import React from 'react'
import PropTypes from 'prop-types'

import CollectionItemContainer from 'components/Collection/collection-item/collection-item.container'

import { SuggestedProductsDiv, Title, SuggestedSectionDiv } from './suggest-products.styles'

const SuggestedProducts = ({ collection, currItemId }) => {
    const { routeName, items } = collection

    const getRandom = (items, n) => {
        const result = []
        const taken = []
        let added = 0

        while (added < n) {
            const index = Math.floor(Math.random() * items.length)
            if (index + items[0].id !== currItemId && !taken.includes(index)) {
                result.push(items[index])
                taken.push(index)
                added += 1
            }
        }
        return result
    }

    return (
        <SuggestedSectionDiv>
            <Title>You may also like... </Title>
            <SuggestedProductsDiv>
                {getRandom(items, 2).map((item) => (
                    <CollectionItemContainer key={item.id} item={item} routeName={routeName} />
                ))}
            </SuggestedProductsDiv>
        </SuggestedSectionDiv>
    )
}

export default SuggestedProducts

SuggestedProducts.propTypes = {
    collection: PropTypes.object.isRequired,
    currItemId: PropTypes.number.isRequired
}