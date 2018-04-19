import React, { PureComponent } from 'react'
import { Popup, Marker } from 'react-leaflet'
import PropTypes from 'prop-types'
import L from 'leaflet'
import MarkerEditor from './MarkerEditor'


class MarkerItem extends PureComponent{
 static propTypes = {
   title: PropTypes.string,
   pointIcon: PropTypes.string,
   latLng: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  })
 }


  render(){
    const { latLng, title, pointIcon } = this.props

    const myIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png"
     })

     const styleIcon= {
       width: '2rem',
       height: '2rem'
     }

    return(
      <Marker icon={myIcon} position={latLng}>
        <Popup minWidth={90}>
          <div>
            <h3> {title} </h3>
            <div>
              <img style={styleIcon} alt="icon" src={pointIcon}/>
            </div>
            <div>
              <MarkerEditor />
            </div>
          </div>
        </Popup>
      </Marker>
    )
  }
}

export default MarkerItem
