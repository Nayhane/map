import React, { Component } from 'react'
import { connect } from 'react-redux'
import saveMarker from '../actions/update'
import deleteMarker from '../actions/delete'



class MarkerEditor extends Component{
  constructor(props){
    super()

    const { title, pointIcon, latLng, id } = props
    this.state = { title, pointIcon, latLng, id, show: false}
  }


  toogleInput(){
    this.setState({
      show: true
    })
  }


  updateTitle(e) {
    this.setState({
      title: this.refs.title.value
    })
  }

  updatePointIcon(e)  {
    this.setState({
      pointIcon: this.refs.pointIcon.value
    })
  }


  saveMarker = () => {
     const updateMarker = {
       ...this.state,
       title: (this.state.title),
       pointIcon: (this.state.pointIcon),
       show: false,
       id: (this.state.id)
     }

     this.props.saveMarker(updateMarker)
  }

  removeMarker = () => {
      this.props.deleteMarker(this.props)

  }

  renderEditor(){
    return(
      <div>
        <input
          style={{width:'5rem'}}
          type='text'
          ref='title'
          placeholder='title'
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)} />

        <input
          style={{width:'5rem'}}
          type='text'
          ref='pointIcon'
          placeholder='Icon'
          defaultValue={this.state.pointIcon}
          onChange={this.updatePointIcon.bind(this)} />

          <button type="button" className="btn btn-outline-success" onClick={this.saveMarker.bind(this)}>Save</button>
      </div>
    )
  }

  render(){
   const { show } = this.state

     if (show) {
       return this.renderEditor()
     } else {
       return(
         <div>
           <button type='button' className="btn btn-outline-dark"  onClick={this.toogleInput.bind(this)}>Edit</button>
          <button type='button' className="btn btn-outline-dark"  onClick={this.removeMarker.bind(this)}>Delete</button>
         </div>
       )
     }
  }
}

export default connect(null, {saveMarker, deleteMarker})(MarkerEditor)
