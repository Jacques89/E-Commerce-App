import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCollectionsStart } from 'redux/shop/shop.actions'
import Spinner from 'components/Loading/spinner/spinner.component'
import { ShopPageContainer } from './shop.styles'

const CollectionsOverviewContainer = lazy(() =>
    import('components/Collection/collections-overview/collections-overview.container')
)
const CollectionPageContainer = lazy(() => import('pages/collection/collection.container'))
const ProductPageContainer = lazy(() => import('pages/product-page/product-page.container'))

export const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
                <Route
                    path={`${match.path}/:collectionId/:itemId`}
                    component={ProductPageContainer}
                />
            </Suspense>
        </ShopPageContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)

ShopPage.propTypes = {
    fetchCollectionsStart: PropTypes.func.isRequired,
    match: PropTypes.object
}