import React, { Component } from 'react';
import Search from '../Search/Search.jsx';
import './Sidebar.css'

const Sidebar = (props) => {
  return (<div className="Side-Bar">
      <h4> Search for a location to view and flag incidents of discrimination, opression, or otherization. </h4>
      <Search changePlace={props.changePlace}/>
    </div>);
}
export default Sidebar;
