import React, { Component } from 'react';
import Start from './Start.js';
import { Counters } from './Counters';
import '../styles/index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player1: {},
      player2: {}
    }
  }

  addPlayers = (player1, player2) => {
    this.setState({
      player1, 
      player2
    });
  }

  render() {
    const { player1, player2 } = this.state;

    if(Object.keys(player1).length && Object.keys(player2).length) {
      return (
        <div className="App">
          <Counters player1={player1} player2={player2} />
        </div>
      )
    } else {
      return (
        <div className="App">
        <Start addPlayers={this.addPlayers} />
      </div>
      );
    }
  }
}

export default App;
