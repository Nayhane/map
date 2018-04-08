import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MarkerItem from './MarkerItem'




class MarkerContainer extends PureComponent{
  constructor(props){
    super()
  }


  renderMarker(marker, index) {
      return <MarkerItem key={index} {...marker} />
  }

  render(){
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
