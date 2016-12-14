import React, { Component } from 'react';
import MapContainer from '../Map/MapContainer.jsx';

const Main = (props) => {
  return (<div className="Main">
    <MapContainer coordinates={props.coordinates} />
  </div>);
}

export default Main;
