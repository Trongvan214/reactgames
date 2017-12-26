import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './menu';
import TicTacToe from './tictactoe';
import SnakeGame from './snakegame';
import FlappyBird from './flappybird';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/reactgames" component={Menu} />
            <Route path="/reactgames/tictactoe" component={TicTacToe} /> 
            <Route path="/reactgames/snakegame" component={SnakeGame} />
            <Route path="/reactgames/flappybird" component={FlappyBird} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
