import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        {this.props.beyObj.map(bey => {
          return <BeyCard bey={bey} removeFromFav={this.props.removeFromFav}/>
        })}
      </div>
    );
  }
}
