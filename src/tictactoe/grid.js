import React, {Component} from 'react';
import Square from './square';

export default class Grid extends Component {
    render(){
        let boxId,boxClass;
        let squares = this.props.grid.map((v,i) => v.map((vv,ii) => {
            boxId = i+"-"+ii;
            boxClass = vv===1?"square x":vv===2?"square o": "square";
            return (
                <Square
                    boxClass={boxClass}
                    key={boxId}
                    boxId={boxId}
                    row={i}
                    col={ii}
                    selectSquare={this.props.selectSquare}
                />
            )
        }));
        return (
            <div className="grid">
                {squares}
            </div>
        )
    }
}