import React, { PureComponent } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import PropTypes from 'prop-types'
import L from 'leaflet'


class MarkerItem extends PureComponent{
 static propTypes = {
  title: PropTypes.string.isRequired,
  pointIcon: PropTypes.string,
  position: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string,
  })
 }


  render(){
    const { title, pointIcon } = this.props
    const position = [this.props.lat, this.props.lng]
    const myIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png"
     })

    return(
      <Marker icon={myIcon} position={position}>
        <Popup minWidth={90}>
         <h3>{ title }</h3>
         <img>{ pointIcon } </img>
        </Popup>
      </Marker>
    )
  }
}

export default MarkerItem
