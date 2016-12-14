import React, { Component } from 'react';

const PlaceHeader = (props) => {
  return (<div className="PlaceBox">
    <h4>{props.name}</h4>
    <h5>{props.address}</h5>
  </div>);
}

export default PlaceHeader;
