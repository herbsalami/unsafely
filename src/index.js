import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Home from './Home/Home.jsx';
import App from './App/App.jsx';

const loggedIn = window.localStorage.getItem('unsafely_token') && window.localStorage.getItem('unsafely_username');

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path='/' component={loggedIn ? App : Home}></Route>
      <Route path='/app' component={App}></Route>
  </Router>,
  document.querySelector('#root-container'));
