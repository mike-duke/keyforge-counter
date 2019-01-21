import React, { Component } from 'react';
import { CheckboxList } from '../components/CheckboxList';

export default class Start extends Component {
  constructor() {
    super();
    this.state = {
      player1: {
        name: '',
        deck: '',
        houses: []
      },
      player2: {
        name: '',
        deck: '',
        houses: []
      }
    }
  }

  setHouses = (target) => {
    const { id } = target.parentNode.parentNode.parentNode;
    const houseName = target.name
    this.setState({
      [id]: {
        ...this.state[id],
        houses: [...this.state[id].houses, houseName]
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { player1, player2 } = this.state;
    this.props.addPlayers(player1, player2);
  }

  handleChange = (event) => {
    const playerId = event.target.parentNode.parentNode.id; 
    const { id, value } = event.target;
    this.setState({
      [playerId]: {
        ...this.state[playerId],
        [id]: value
      }
    });
  }

  render() {
    const playerForm = (
      <div className="player-form">
        <label htmlFor="name">Player Name:</label>
        <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        <label htmlFor="deck">Deck Identity:</label>
        <input id="deck" type="text" value={this.state.deck} onChange={this.handleChange}/>
        <label htmlFor="player-houses">Deck Identity Houses:</label>
        <CheckboxList setHouses={this.setHouses} />
      </div>
    )

    return (
      <div className="start">
        <h1>Welcome to KeyForge!</h1>
        <form onSubmit={this.handleSubmit}>
          <section className="player-container">
            <div id="player1" className="player">
              <h2>Player 1</h2>
              {playerForm}
            </div>

            <div id="player2" className="player">
              <h2>Player 2</h2>
              {playerForm}
            </div>
          </section>
          <button className="start-button">Start!</button>
        </form>
      </div>
    )
  }
}