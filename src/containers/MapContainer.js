import React, { PureComponent } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
import MarkerContainer from './MarkerContainer'
import createMarker from '../actions/create'
import 'leaflet/dist/leaflet.css'


const styleMap = {
  height: '40rem',
  width: '80%',
  marginTop: '3rem',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto'
}



class MapContainer extends PureComponent {

  addMarker = (e) => {
    const marker =   {latLng: {lat: e.latlng.lat, lng:  e.latlng.lng}}
    this.props.createMarker(marker)
    }


  render(){

    return(
      <div>
        <Map
          center={[52.370216, 4.895168]}
          zoom={10}
          style={styleMap}
          doubleClickZoom={false}
          onClick={this.addMarker.bind(this)}
        >

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          <MarkerContainer />
        </Map>
      </div>
    )
  }
}
//
const mapStateToProps = ({ markers }) => ({ markers })


export default connect(mapStateToProps, {createMarker})(MapContainer)
