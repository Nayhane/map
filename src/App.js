import React, { Component } from 'react';
import MapContainer from './containers/MapContainer'
import './App.css';

class App extends Component {

 updateMarkers(position, update){

 }

  render() {
    return (
      <div className="App">
        <MapContainer updateMarkers={this.updateMarkers.bind(this)} />
      </div>
    );
  }
}

export default App;
