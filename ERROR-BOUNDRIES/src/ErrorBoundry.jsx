import { Component } from "react";

class ErrorBoundry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null, 
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true , error: error }
    }

    componentDidCatch( error, errorInfo ) {
        console.log("ErrorBoundry caught an error: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // return <h1>Something went wrong!</h1>
            return (
                <div style={{ border: '1px solid #c50f0f', backgroundColor: '#f8d7da', marginTop: '20px', padding: '20px' }}>
                    <h1>Oops! Something went wrong!</h1>
                    <p>{ this.props.fallback }</p>
                    <p>{ this.state.error.message }</p>
                </div>
            )
        } else {
            return this.props.children;

        }
    }
}

export default ErrorBoundry