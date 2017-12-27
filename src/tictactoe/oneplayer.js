import React, {Component} from 'react';

export default class OnePlayer extends Component {
    render(){
        if(this.props.choice !== 1) return null;
        return <h1>Trong is awesome</h1>;
    }
}