import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import './App.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: window.localStorage.getItem('unsafely_username'),
      place: null
    }
  }
  changePlace(place) {
    this.setState({
      place
    })
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
      </div>)
  }
}
