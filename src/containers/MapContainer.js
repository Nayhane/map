import React, { PureComponent } from 'react'
import { Map, TileLayer } from 'react-leaflet'
// import { connect } from 'react-redux'
import MarkerContainer from './MarkerContainer'
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
  constructor(props) {
    super()

    this.state = {
      lat: 52.29354,
      lng: 4.739897
    }
  }



  render(){
   const mapPosition = [this.state.lat, this.state.lng]

    return(
      <div>
        <Map
          center={mapPosition}
          zoom={10}
          style={styleMap}
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
// const mapStateToProps = ({ markers }) => ({
//   markers
// })

export default MapContainer
