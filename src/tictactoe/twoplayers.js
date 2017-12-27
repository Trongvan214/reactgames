import React, {Component} from 'react';
import Grid from './grid';
import GameOver from './gameover';
import './twoplayers.css';

export default class TwoPlayers extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: 1,
            grid: Array(3).fill().map(() => Array(3).fill(false)),
            isGameDone: false,
        }
    }
    select = (row,col) => {
        // let isGameOver = checkWinner(this.state.grid);
        let copyGrid = this.state.grid.slice();
        if(copyGrid[row][col]){
            return;
        }
        else {
            copyGrid[row][col] = this.state.player;
        }
        this.setState((prevState) => ({
            player: prevState.player===1?2:1,
            grid: copyGrid,
            // isGameDone: isGameOver
        }))
    }
    render(){
        if(this.props.choice !== 2) return null;
        if(this.state.isGameDone) return <GameOver player={this.state.player}/>
        return (
            <Grid 
                grid={this.state.grid}
                selectSquare={this.select}
            />
        )
    }
}

// let checkWinner = (arr) => {
//     let player1Arr = arr.map(v => v.map(a => a===1));
//     let player2Arr = arr.map(v => v.map(a => a===2));
//     console.log(player1Arr);
//     console.log(player2Arr);
//     return winCases(player1Arr)?1:false;
//     return winCases(player2Arr)?2:false;
// }
// let winCases = (arr) => {
//     //winner cases
//     if(arr[0][1] && arr[0][1] && arr[0][2]) return true;
//     else if(arr[1][1] && arr[1][1] && arr[1][2]) return true;
//     else if(arr[2][1] && arr[2][1] && arr[2][2]) return true;
//     else if(arr[0][0] && arr[1][0] && arr[2][0]) return true;
//     else if(arr[0][1] && arr[1][1] && arr[2][1]) return true;
//     else if(arr[1][2] && arr[1][2] && arr[2][2]) return true;
//     else if(arr[0][0] && arr[1][1] && arr[2][2]) return true;
//     else if(arr[0][2] && arr[1][1] && arr[2][0]) return true;
//     else return false;
// }