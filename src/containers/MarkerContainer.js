import React, { PureComponent } from 'react'
import { Marker, Popup} from 'react-leaflet'
import PropTypes from 'prop-types'
import L from 'leaflet'



class MarkerContainer extends PureComponent{
 constructor(props){
   super()

   this.state = {
       markers: []
    }
 }


renderMarker(marker, index) {
    const myIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png"
     })

      return (
        <Marker icon={myIcon} key={index} >
          <Popup>
             <h2>{marker.title}</h2>
             <p>{marker.pointIcon}</p>
           </Popup>
        </Marker>
      )
  }

  render(){
    return(
      <div>
            {this.state.markers.map(this.renderMarker)}
      </div>
    )
  }
}



export default MarkerContainer
