import React, { Component } from 'react';

export class CheckboxList extends Component {

  handleChange = (event) => {
    this.props.setHouses(event.target.name)
  }

  render() {
    return (
      <div className="checkbox-container" onChange={(event) => this.props.setHouses(event.target)}>
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
    );
  }
}