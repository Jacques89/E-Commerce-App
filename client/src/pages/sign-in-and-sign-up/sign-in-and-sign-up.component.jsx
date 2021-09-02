import React from 'react'

import SignIn from 'components/Auth/sign-in/sign-in.component'
import SignUp from 'components/Auth/sign-up/sign-up.component'

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage
