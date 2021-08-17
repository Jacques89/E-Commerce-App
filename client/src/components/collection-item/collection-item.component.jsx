import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
    CollectionItemDiv,
    CollectionFooterDiv,
    AddButton,
    BackgroundImage,
    NameSpan,
    PriceSpan
} from './collection-item.styles'

export const CollectionItem = ({ item, addItem, history, match, routeName }) => {
    const { id, name, price, imageUrl } = item
    

    return (
        <CollectionItemDiv>
            <BackgroundImage
                className='image'
                imageUrl={imageUrl}
                onClick={() => {
                    if (match.url === '/shop') {
                        history.push(`${match.url}/${routeName}/${id}`)
                    } else if (Number.isNaN(parseInt(match.url.slice(-1)))) {
                        history.push(`${match.url}/${id}`)
                    } else {
                        history.push(`/shop/${routeName}/${id}`)
                    }
                }}
            />
            <CollectionFooterDiv>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}€</PriceSpan>
            </CollectionFooterDiv>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemDiv>
    )
}

export default withRouter(CollectionItem)

CollectionItem.propTypes = {
    item: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    history: PropTypes.object,
    match: PropTypes.object,
    routeName: PropTypes.string
}