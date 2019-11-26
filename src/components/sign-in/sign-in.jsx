import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user-actions';

import './sign-in.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    }

    render() {
        console.log(this.props)
        const { googleSignInStart } = this.props;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='E-mail'
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='Password'
                        required 
                    />
                    
                    <div className='buttons'>
                        <CustomButton 
                            type='submit'>
                                Sign in
                        </CustomButton>
                        <CustomButton 
                            type='button'
                            onClick={googleSignInStart} 
                            isGoogleSignIn>
                                Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);