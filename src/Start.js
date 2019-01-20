import React, { Component } from 'react';
import './styles/Start.scss';

export default class Start extends Component {

  render() {
    return (
      <div className="start">
        <form>
          <div className="player player1">
            <label htmlFor="player1-name">Player One Name</label>
            <input id="player1-name" type="text"/>
            <label htmlFor="player1-deck">Player One Deck Identity</label>
            <input id="player1-deck" type="text"/>
            <label htmlFor="player1-houses">Deck Identity House</label>
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
          </div>

          <div className="player player2">
            <label htmlFor="player2-name">Player Two Name</label>
            <input id="player2-name" type="text"/>
            <label htmlFor="player2-deck">Player Two Deck Identity</label>
            <input id="player2-deck" type="text"/>
            <label htmlFor="player2-houses">Deck Identity House</label>
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
          </div>
          <button className="start-button">Start!</button>
        </form>
      </div>
    )
  }
}