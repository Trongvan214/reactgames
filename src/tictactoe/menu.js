import React, {Component} from 'react';
import OnePlayer from './oneplayer';
import TwoPlayers from './twoplayers';

export default class Menu extends Component {
    state = {choice: 2};
    selectChoice = (userChoice) => {
        this.setState(()=>({choice: userChoice}));
    }
    render(){
        return (
            <div className="ttt-menu">
                <div className="back-to-menu"></div>
                <nav>
                    <ul>
                        <li className="choices" onClick={()=>this.selectChoice(1)}>1 Players</li>
                        <li className="choices" onClick={()=>this.selectChoice(2)}>2 Players</li>
                    </ul>
                </nav>
                <OnePlayer choice={this.state.choice}/>
                <TwoPlayers choice={this.state.choice}/>
            </div>
        )
    }
}