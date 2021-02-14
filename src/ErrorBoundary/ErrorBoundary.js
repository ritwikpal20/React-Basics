import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorMessage: error };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: "red" }}>
                    <p>Encountered some error while rendering your component</p>
                    <p>Please contact developer if not resolved</p>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
