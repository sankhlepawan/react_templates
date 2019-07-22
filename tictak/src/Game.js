import React, { Component } from 'react';
import {Board} from './components'
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default Game;
