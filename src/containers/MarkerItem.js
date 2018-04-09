import React, { PureComponent } from 'react'
import { Popup, Marker } from 'react-leaflet'
import PropTypes from 'prop-types'
import L from 'leaflet'


class MarkerItem extends PureComponent{
 static propTypes = {
  title: PropTypes.string.isRequired,
  pointIcon: PropTypes.string,
  latLng: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  })
 }


  render(){
    const { title, pointIcon, latLng } = this.props

    const myIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png"
     })

    return(
      <Marker icon={myIcon} position={latLng}>

           <h3>{ title }</h3>
          
      </Marker>
    )
  }
}

export default MarkerItem
