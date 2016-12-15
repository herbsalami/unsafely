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
      place: null,
      flags: null
    };
    this.changePlace = this.changePlace.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.getFlagsForPlace = this.getFlagsForPlace.bind(this);
    this.distributeFlags = this.distributeFlags.bind(this);
    this.addFlag = this.addFlag.bind(this);
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if(nextProps.flags === null) {
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }

  changePlace(place) {
    fetch(`./place/${place.place_id}?token=${window.localStorage.getItem('unsafely_token')}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        place: data.place.result
      }, () => {
        window.localStorage.setItem('unsafely_token', data.token);
        this.getFlagsForPlace(this.state.place.place_id);
      })
    })
    .catch(err => console.log(err));
  }

  getFlagsForPlace(id) {
    fetch(`./flag/${id}?token=${window.localStorage.getItem('unsafely_token')}`)
    .then(r => r.json())
    .then((data) => {
      this.distributeFlags(data.flags);
      window.localStorage.setItem('unsafely_token', data.token);
    })
    .catch(err => console.log(err));
  }

  distributeFlags(flags) {
    const flagObject = { "Race": 0, "Religion": 0, "Gender": 0, "Sexuality": 0, "Body": 0};
    if(flags.length > 0) {
      flags.forEach((flag) => {
        flagObject[flag.flag_name] += 1;
      })
    }
    this.setState({
      flags: flagObject
    });
  }

  // componentWillUpdate(nextProps, nextState) {
  //   return nextProps.flags ? false : true;
  // }

  addFlag(name) {
    const token = window.localStorage.getItem('unsafely_token');
    fetch('./flag', {
      "method": "POST",
      "headers": {
      "Content-type": "application/JSON; charset=UTF-8"
      },
      "body": JSON.stringify({
        token: token,
        flagName: name,
        placeID: this.state.place.place_id
      })
    })
    .then(r => r.json())
    .then((data) => {
      window.localStorage.setItem('unsafely_token', data.token);
      this.distributeFlags(data.flags)
    })
    .catch(err => console.log(err));
  }

  renderMain() {
    if (this.state.place !== null && this.state.flags !== null) {
      return <Main addFlag={(name) => this.addFlag(name)}flags={this.state.flags} placeID={this.state.place.place_id} coordinates={this.state.place.geometry.location} placeName={this.state.place.name} placeAddress={this.state.place.formatted_address}/>;
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
    return (
      <div className="App-Container">
        <Nav
          user={this.state.user}
          logout={()=> this.logout()}
        />
        <Sidebar changePlace={this.changePlace.bind(this)}/>
        {this.renderMain()}
      </div>)
  }
}
