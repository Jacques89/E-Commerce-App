import React from 'react'
import PropTypes from 'prop-types'

import { CustomButtonContainer } from './custom-button.styles'

export const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CustomButton

CustomButton.propTypes = {
    children: PropTypes.node
}