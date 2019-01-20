import React, { Component } from 'react';

export default class Start extends Component {

  render() {
    const playerForm = (
      <form>
        <label htmlFor="player-name">Player Name:</label>
        <input id="player-name" type="text"/>
        <label htmlFor="player-deck">Deck Identity:</label>
        <input id="player-deck" type="text"/>
        <label htmlFor="player-houses">Deck Identity Houses:</label>
        <div className="checkbox-container">
          <input type="checkbox" name="brobnar" value="brobnar" id="brobnar" />
          <label htmlFor="brobnar">Brobnar</label>
          <input type="checkbox" name="dis" value="dis" id="dis" />
          <label htmlFor="dis">Dis</label>
          <input type="checkbox" name="logos" value="logos" id="logos" />
          <label htmlFor="logos">Logos</label>
          <input type="checkbox" name="mars" value="mars" id="mars" />
          <label htmlFor="mars">Mars</label>
          <input type="checkbox" name="sanctum" value="sanctum" id="sanctum" />
          <label htmlFor="sanctum">Sanctum</label>
          <input type="checkbox" name="shadows" value="shadows" id="shadows" />
          <label htmlFor="shadows">Shadows</label>
          <input type="checkbox" name="untamed" value="untamed" id="untamed" />
          <label htmlFor="untamed">Untamed</label>
        </div>
      </form>
    )

    return (
      <div className="start">
        <h1>Welcome to KeyForge!</h1>
        <div className="player player1">
          <h2>Player 1</h2>
          {playerForm}
        </div>

        <div className="player player2">
          <h2>Player 2</h2>
          {playerForm}
        </div>
        <button className="start-button">Start!</button>
      </div>
    )
  }
}