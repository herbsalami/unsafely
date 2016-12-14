import React, { Component } from 'react';
import Flag from '../Flag/Flag.jsx';

const FlagContainer = (props) => {
    const flagsClone = props.flags;
    return(
    <div className="FlagBox">
      <Flag flagName="Race" flagCount={flagsClone} />
      </div>)
}

export default FlagContainer;
