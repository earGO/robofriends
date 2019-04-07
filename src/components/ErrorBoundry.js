import React from 'react';


const initialState = {
    hasError:false
}


class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError:true
        })
    }

    render() {
        let {hasError} = this.state.hasError
        if(hasError){
            return (
                <h1>Got an error of some kind here</h1>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry