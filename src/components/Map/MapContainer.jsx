import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function MapContainer (props) {
  return (
    <section>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "25vh",
              width: "25vh"
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={14}
            defaultCenter={props.coordinates}
          >
          <Marker
          position={props.coordinates}
          place={props.place}
          />
          </GoogleMap>
        }
      />
    </section>
  );
}
