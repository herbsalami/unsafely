import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import './Search.css';

class Search extends Component {

  render() {
    return <div className="Search"><Autocomplete
    style={{width: '90%', position: 'absolute', left: '2.5%', marginTop: '5vh', display: 'block'}}
    onPlaceSelected={(place) => {
      this.props.changePlace(place);
    }}
    types={['establishment', 'geocode']}
/></div>;
  }
}
export default Search;
