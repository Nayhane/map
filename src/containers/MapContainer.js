import React, { PureComponent } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
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
    super(props)

    this.state = {
      lat: 52.29354,
      lng: 4.739897,
    }
  }


  render(){
   const position = [this.state.lat, this.state.lng]

    return(
      <div>
        <Map
          center={position}
          zoom={13}
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

const mapStateToProps = ({ markers }) => ({
  markers
})

export default connect(mapStateToProps)(MapContainer)
