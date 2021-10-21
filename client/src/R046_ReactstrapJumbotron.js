import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
    render() {
        return (
            <Jumbotron style={{backgroundColor: "#D38C7C"}}>
                <h1 className="display-4">REACT 200</h1>
                <p className="h4">내용...</p>
                <hr className="my-2" />
                <p>내용...2</p>
                <p className="lead">
                    <Button color="danger">Go Detail</Button>
                </p>
            </Jumbotron>
        );
    }
}

export default R046_ReactstrapJumbotron;