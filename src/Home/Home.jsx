import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    // this.updateUsername = this.updateUsername.bind(this);
    // this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  login() {
    fetch(`./user/${this.state.username}?password=${this.state.password}`)
    .then(r => r.json())
    .then((data) => {
      window.localStorage.setItem('unsafely_token', data.token);
      window.localStorage.setItem('unsafely_username', data.username)
      window.location.href = './app';
    })
    .catch(err => console.log(err))
  }

  signup() {
    fetch('./user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      window.localStorage.setItem('unsafely_token', data.token);
      window.localStorage.setItem('unsafely_username', data.username);
      window.location.href = './app';
    })
    .catch(err => console.log(err));
  }

  render() {
    return (<div className="Home">
        <div className="title-container">
          <div><h2>Unsafely</h2></div>
        </div>
        <div className="login-container">
          <div className="prompt">
            Please sign up or log in to continue
          </div>
          <div className="login-box">
            <input type="text" size="50" value={this.state.username} onChange={event => this.updateUsername(event)} placeholder="Username" />
            <input type="password" size="50" value={this.state.password} onChange={event => this.updatePassword(event)} placeholder="Password" />
          </div>
          <div className="buttons">
          <div className="login-button" onClick={() => this.login()}> Log In </div>
          <div className="signup-button" onClick={() => this.signup()}> Sign Up </div>
          </div>
        </div>
      </div>);
  }
}
