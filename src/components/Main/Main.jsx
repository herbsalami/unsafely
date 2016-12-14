import React, { Component } from 'react';
import MapContainer from '../Map/MapContainer.jsx';
import PlaceHeader from '../PlaceHeader/PlaceHeader.jsx';
import FlagContainer from '../FlagContainer/FlagContainer.jsx';
import './Main.css';

const Main = (props) => {
  return (<div className="Main">
    <MapContainer coordinates={props.coordinates} place={props.placeName}/>
    <PlaceHeader name={props.placeName} address={props.placeAddress} />
    <FlagContainer flags={props.flags} />
  </div>);
}

export default Main;
