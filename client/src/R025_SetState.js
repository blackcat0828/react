import React, { Component } from 'react';

class R025_SetState extends Component {
    constructor(props){
        super(props);
        this.state = { StateString: 'react',}
    }

    stateChange = (flag) => {
        if(flag === 'direct') this.state.StateString = '리액트';
        if(flag === 'setState') this.setState({StateString : '리액트'});
    }

    render() {
        return (
            <div>
                <button onClick ={(e) => this.stateChange('direct', e) }>state 직접 변경</button>
                <button onClick={(e) => this.stateChange('setState', e)}>setState로 변경</button>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        );
    }
}

export default R025_SetState;