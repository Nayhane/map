import React, { PureComponent } from 'react';
import MapContainer from './containers/MapContainer'
import './App.css';


class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <MapContainer {...this.props}/>
      </div>
    );
  }
}

export default App;
