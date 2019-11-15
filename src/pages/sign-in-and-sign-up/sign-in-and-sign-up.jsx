import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-sign-up.scss';

const SignInandSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInandSignUp