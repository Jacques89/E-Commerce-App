import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionsLoaded } from 'redux/shop/shop.selectors'
import WithSpinner from 'components/Loading/with-spinner/with-spinner.component'
import ProductPage from './product-page.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
})

const ProductPageContainer = compose(connect(mapStateToProps), WithSpinner)(ProductPage)

export default ProductPageContainer
