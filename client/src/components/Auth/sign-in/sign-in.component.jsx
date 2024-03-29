import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FormInput from 'components/Forms/form-input/form-input.component'
import CustomButton from 'components/Button/custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../../redux/user/user.actions'

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault()

        emailSignInStart(email, password)
    }

    const handleChange = (event) => {
        const { value, name } = event.target

        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton id='sign-in-email-button' type='submit'>
                        Sign in
                    </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)

SignIn.propTypes = {
    emailSignInStart: PropTypes.func,
    googleSignInStart: PropTypes.func
}
