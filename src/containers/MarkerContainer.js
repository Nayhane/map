import React, { PureComponent } from 'react'
import { Marker, Popup} from 'react-leaflet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MarkerItem from './MarkerItem'
import L from 'leaflet'



class MarkerContainer extends PureComponent{
  constructor(props){
    super()
  }


  renderMarker(marker, index) {
      return <MarkerItem key={index} {...marker} />
  }

  render(){
    const myIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png"
     })



    return(
      <div>
          {this.props.markers.map(this.renderMarker)}
      </div>
    )
  }
}

const mapStateToProps = ({ markers }) => ({
  markers
})



export default connect(mapStateToProps)(MarkerContainer)
