import React, { Component, ErrorInfo } from "react";
import Error from '../features/Error';

class ErrorBoundary extends Component {
    public state = { error: null, errorInfo: null };

    public componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: info
        })
    }

    public render() {
        if (this.state.errorInfo) {
            return <Error error={this.state.error} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;