import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles'

export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem)

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
    history: PropTypes.object,
    linkUrl: PropTypes.string,
    match: PropTypes.object
}