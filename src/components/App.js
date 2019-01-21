import React, { Component } from 'react';
import Start from '../containers/Start.js';
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
    return (
      <div className="App">
        <Start addPlayers={this.addPlayers} />
      </div>
    );
  }
}

export default App;
