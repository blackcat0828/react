import React, { Component } from 'react';
import {Badge, Button} from 'reactstrap'

class R034_ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>

            </div>
        );
    }
}

export default R034_ReactstrapAlerts;