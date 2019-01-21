import React, { Component } from 'react';
import { Player } from './Player';

export class Counters extends Component {

  render() {
    return (
      <section>
        <Player player={this.props.player1} />
        <Player player={this.props.player2} />
      </section>
    )
  }
}