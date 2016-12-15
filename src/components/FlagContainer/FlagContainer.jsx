import React, { Component } from 'react';
import Flag from '../Flag/Flag.jsx';
import './FlagContainer.css';

const FlagContainer = (props) => {
    return(
    <div className="FlagBox">
    {Object.keys(props.flags).map((flagName) => {
      return (<Flag key={flagName} addFlag={props.addFlag}flagName={flagName} flagCount={props.flags[flagName]} />)
    })}
      </div>)
}

export default FlagContainer;
