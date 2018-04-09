import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MarkerItem from './MarkerItem'
import fetchMarkers from '../actions/fetch'


class MarkerContainer extends PureComponent{
  constructor(props){
    super()
  }

  componentWillMount() {
      this.props.fetchMarkers()
    }


  renderMarker(marker, index) {
    console.log(marker)
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



export default connect(mapStateToProps, {fetchMarkers})(MarkerContainer)
