import React, { Component } from 'react';

const Flag = (props) => {
    return(
      <div className={props.flagName}>
        <h6>{props.flagName}</h6>
        <h5>{props.flagCount}</h5>
      </div>);
}

export default Flag;
