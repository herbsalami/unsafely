import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Main from '../components/Main/Main.jsx';
import fetchJsonp from 'fetch-jsonp';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: window.localStorage.getItem('unsafely_username'),
      place: null
    }
  }
  changePlace(place) {
    fetch(`./places/${place.place_id}?token=${window.localStorage.getItem('unsafely_token')}`)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      this.setState({
        place: data
      })
    })
    .catch(err => console.log(err))
  }
  renderMain() {
    if (this.state.place !== null) {
      return <Main placeID={this.state.place.place_id} coordinates={[this.state.place.geometry.location.lat, this.state.place.geometry.location.lng]} placeName={this.state.place.name} placeAddress={this.state.place.formatted_address}/>;
    }
    else {
      return <div/>;
    }
  }

  logout() {
    window.localStorage.removeItem('unsafely_username');
    window.localStorage.removeItem('unsafely_token');
    window.location.href = './';
  }

  render() {
    return (<div className="App-Container">
        <Nav
          user={this.state.user}
          logout={()=> this.logout()}
        />
        <Sidebar changePlace={this.changePlace.bind(this)}/>
        {this.renderMain()}
      </div>)
  }
}
