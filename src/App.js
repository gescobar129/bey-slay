
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends Component {

state = {
  beys: [],
  favorites: []
}

addToFav = (bey) => {
  if (!this.state.favorites.includes(bey)) {
    this.setState({
      favorites: [...this.state.favorites, bey]
    }, () => {
      fetch(`http://localhost:4000/beys/${bey.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          favorite: true
        })
      })
    })
  }
}

removeFromFav = (bey) => {
  this.setState({
    favorites: this.state.favorites.filter(element => element !== bey)
  }, () => {
    fetch(`http://localhost:4000/beys/${bey.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          favorite: false
        })
      })
  })
}

componentDidMount() {
  fetch('http://localhost:4000/beys')
  .then(response => response.json())
  .then(data => {
    this.setState({
      beys: data 
    })
  })
}

render() {
return (
  <div className="main-container">
    <BeyContainer beyObj={this.state.beys} addToFav={this.addToFav}/>
    <Favorites beyObj={this.state.favorites} removeFromFav={this.removeFromFav}/>
  </div>
);
};
}
export default App;

