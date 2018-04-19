import React, { PureComponent } from 'react'



class MarkerEditor extends PureComponent{
  constructor(props){
    super()

   const { title, pointIcon } = props

    this.state = { title, pointIcon, show: false}
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
       show: false
     }
     console.log(updateMarker)
     // this.props.saveMarker(updateMarker)
  }

  renderEditor(){
    console.log(this.state.title)
    console.log(this.state.pointIcon)
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
         </div>
       )
     }
  }
}



export default MarkerEditor