import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render(){
        return (
            <nav>
                <ul>
                    <li><Link to="/reactgames/tictactoe">Tic Tac Toe game</Link></li>.
                    <li><Link to="/reactgames/snakegame">Snake game</Link></li>.
                    <li><Link to="/reactgames/flappybird">Flappy bird game</Link></li>.
                </ul>
            </nav>
        )
    }
}