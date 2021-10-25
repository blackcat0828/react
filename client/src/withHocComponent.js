import React, { Component } from 'react';
export default function withHocComponent(InComponent, InComponentName){
    return class OutComponent extends Component {
        componentDidMount (){
            console.log(`13. InComponentName : ${InComponentName}`)
        }
        render (){
            console.log('1. Incomponent render');
            return (<InComponent {...this.props} />)
        }
    }
}