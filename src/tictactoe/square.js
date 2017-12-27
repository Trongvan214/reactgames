import React, {Component} from 'react';

export default class Square extends Component {
    selectSquare = () => {
        this.props.selectSquare(this.props.row,this.props.col);
    }
    render(){
        return (
            <div 
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectSquare}
            />
        )
    }
}