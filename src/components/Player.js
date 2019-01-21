import React, { Component } from 'react';

export class Player extends Component {

  render() {
    return (
      <div>
        <h3>Amber Counter: 
          <span>0</span>
          <button>+</button>
          <button>-</button>
        </h3>

      </div>
    )
  }
}