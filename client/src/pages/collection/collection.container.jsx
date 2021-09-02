import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionsLoaded } from 'redux/shop/shop.selectors'
import WithSpinner from 'components/Loading/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
})

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionPageContainer
