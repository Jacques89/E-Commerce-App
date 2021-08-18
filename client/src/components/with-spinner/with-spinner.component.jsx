import React from 'react'
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner.component'

const WithSpinner =
    (WrappedComponent) =>
    ({ isLoading, ...otherProps }) => {
        return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
    }

export default WithSpinner

WithSpinner.propTypes = {
    isLoading: PropTypes.bool
}