import React, { PureComponent } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import { connect } from 'react-redux'
import MarkerContainer from './MarkerContainer'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'



const styleMap = {
  height: '40rem',
  width: '80%',
  marginTop: '3rem',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const myIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
} )


class MapContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      lat: 52.293546,
      lng: 4.739897,
      zoom: 13,
    }
  }

  render(){
   const position = [this.state.lat, this.state.lng]
   // const myIcon = L.icon({
   //     iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png"
   //  })

    return(
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
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

const mapStateToProps = ({ markers }) => ({ markers })

export default connect(mapStateToProps)(MapContainer)
