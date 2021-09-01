import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/Navigation/header/header.component'
import Spinner from './components/Loading/spinner/spinner.component'
import ErrorNotice from './components/Error/error-notice/error-notice.component'

import { GlobalStyle } from './global.styles'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const ContactPage = lazy(() => import('./pages/contact/contact.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUpPage = lazy(() =>
    import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
)

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorNotice>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/contact' component={ContactPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route
                            exact
                            path='/signin'
                            render={() =>
                                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                            }
                        />
                    </Suspense>
                </ErrorNotice>
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
