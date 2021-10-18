import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
    render() {
        let {
            ReactSting,
            ReactNumber
        } = this.props
        return (
            <div>
                {ReactSting}{ReactNumber}
            </div>
        );
    }
}

R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired,
}

export default R021_PropsRequired;