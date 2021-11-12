import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import CartIcon from 'components/Cart/cart-icon/cart-icon.component'
import CartDropdown from 'components/Cart/cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from 'redux/cart/cart.selectors'
import { selectCurrentUser } from 'redux/user/user.selectors'
import { signOutStart } from 'redux/user/user.actions'

import { ReactComponent as Logo } from 'assets/turntable.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

export const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo data-cy='logo' className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink data-cy='shop-button' to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink data-cy='contact-button' to='/contact'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink data-cy='sign-out-button' to='/#' as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink data-cy='sign-in-button' to='/signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon data-cy='cart-icon' />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

Header.propTypes = {
    currentUser: PropTypes.object,
    hidden: PropTypes.bool,
    signOutStart: PropTypes.func
}
