import React, { Component } from 'react';
import './Nav.css';

const Nav = (props) => {
  return (<div className="Nav-Bar">
      <div className="User-Header"><h3>{props.user}</h3></div>
      <div className="Logo-Header"><h2>Unsafely</h2></div>
      <div className="Logout-Button" onClick={() => props.logout()}><h3>Log Out </h3> </div>
    </div>);
}
export default Nav;
