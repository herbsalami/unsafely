import React, { Component } from 'react';
const Map = require('react-d3-map').Map;
const MarkerGroup = require('react-d3-map').MarkerGroup;
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function MapContainer (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              left: "500px",
              height: "100px",
              width: "100px"
            }}
          />
        }
        googleMapElement= {
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat, long}}
          />
        }
      />
    </section>
  );
}
