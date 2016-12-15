import React, { Component } from 'react';
import MapContainer from '../Map/MapContainer.jsx';
import PlaceHeader from '../PlaceHeader/PlaceHeader.jsx';
import FlagContainer from '../FlagContainer/FlagContainer.jsx';
import ChartComponent from '../ChartComponent/ChartComponent.jsx';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
  return (<div className="Main">
    <MapContainer coordinates={this.props.coordinates} place={this.props.placeName}/>
    <PlaceHeader name={this.props.placeName} address={this.props.placeAddress} />
    <ChartComponent flags={this.props.flags} placeName={this.props.placeName} />
    <FlagContainer flags={this.props.flags} addFlag={this.props.addFlag}/>
  </div>);
  }
}

export default Main;
