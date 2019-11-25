import React, { Component } from 'react'

export default class BeyCard extends Component {

  handleClick = () => {
    if (this.props.addToFav) {
      this.props.addToFav(this.props.bey)
    } else {
      this.props.removeFromFav(this.props.bey)
    }
  }

  render() {

    return (
        <div className='bey-card' onClick ={this.handleClick}>
        <h3>{this.props.bey.name}</h3>
        <img src={this.props.bey.img}></img>
        </div>
    )
  }
}

