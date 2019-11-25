import React from "react";
import BeyCard from './BeyCard'

export default class BeyContainer extends React.Component {

  render() {

    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {this.props.beyObj.map(bey => {
          return <BeyCard bey={bey} addToFav={this.props.addToFav}/>
        })}
      </div>
    )
  }
}
