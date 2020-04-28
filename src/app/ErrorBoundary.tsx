import React, { Component, ErrorInfo, ReactChild } from "react";
import ErrorPage from '../features/Error';
import { default as IError } from "../shared/types/error";

class ErrorBoundary extends Component<{errorRes: IError, children: ReactChild}> {
    public state = { error: null, errorInfo: null };

    public componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: info
        })
    }

    public render() {
        if (this.state.errorInfo || this.props.errorRes.status) {
            return <ErrorPage error={this.state.error || this.props.errorRes} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;