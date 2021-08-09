import React, { useState } from 'react'
import swal from 'sweetalert'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { ContactFormContainer, Title, MessageBox } from './contact-form.styles'

const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phoneNum: '',
        message: ''
    })

    const { name, email, phoneNum, message } = state

    const handleSubmit = (event) => {
        event.preventDefault()
        swal(`
        ${name}, your message has been delivered!
        
        We will be in touch, Thank You`)

        setState({
            name: '',
            email: '',
            phoneNum: '',
            message: ''
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }

    return (
        <ContactFormContainer>
            <Title>Contact Us</Title>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    label='Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='tel'
                    name='phoneNum'
                    value={phoneNum}
                    onChange={handleChange}
                    label='Phone Number'
                />
                <MessageBox
                    rows='15'
                    name='message'
                    value={message}
                    onChange={handleChange}
                    placeholder='Write your message here...'
                    requied
                />
                <CustomButton type='submit'>Send Message</CustomButton>
            </form>
        </ContactFormContainer>
    )
}

export default ContactForm
