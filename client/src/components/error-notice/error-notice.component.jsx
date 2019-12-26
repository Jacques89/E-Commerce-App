import React, { Component } from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-notice.styles';

class ErrorNotice extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // process error
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/hkRuanu.png' />
                    <ErrorImageText>Sorry this page is broken!</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
};

export default ErrorNotice;