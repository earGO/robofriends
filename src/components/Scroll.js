import React from 'react';
import PropTypes from 'prop-types';

const scrollStyle = {
    overflow:"scroll",
    height:"85vh",
    border:"1px solid black"
}

class Scroll extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={scrollStyle}>
                {this.props.children}
            </div>

        )
    }
}

export default Scroll