import React, { Component } from 'react';

class Flag extends Component{
  constructor(props){
    super(props);
    this.flagName = props.flagName;
    this.flagCount = props.flagCount;
  }

  render() {
    return(
      <div className={this.props.flagName} onClick={() => this.props.addFlag(this.props.flagName)}>
        <h6>{this.props.flagName}</h6>
        <h5>{this.props.flagCount}</h5>
      </div>);
  }
}

export default Flag;
