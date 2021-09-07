import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-notice.styles'

class ErrorNotice extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        // Process the errors

        // Setting local state
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.error(error, info)
    }

    render() {
        return this.state.hasError ? (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                <ErrorImageText>Sorry this page is broken 😥</ErrorImageText>
            </ErrorImageOverlay>
        ) : (
            this.props.children
        )
    }
}

export default ErrorNotice
