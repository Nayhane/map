import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MarkerItem from './MarkerItem'
import fetchMarkers from '../actions/fetch'
import markers from '../data/markers'


class MarkerContainer extends PureComponent{
  constructor(props){
    super()
  }

  componentWillMount() {
      // this is hardcoded data, we could use an api later
      // instead of ../data/markers we could also fetch markers from localstorage
      this.props.fetchMarkers(markers)
    }


  renderMarker(marker, index) {
      return <MarkerItem key={index} {...marker} />
  }

  render(){
    const { markers } = this.props
    
    return(
      <div>
          {markers.map(this.renderMarker)}
      </div>
    )
  }
}

const mapStateToProps = ({ markers }) => ({
  markers
})



export default connect(mapStateToProps, {fetchMarkers})(MarkerContainer)
