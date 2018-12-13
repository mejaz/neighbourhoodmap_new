import React, { Component } from 'react'
import { Marker, InfoWindow } from "react-google-maps"

class InfoBoxMarker extends Component {
	
	constructor(props) {
	  super(props)  
	  this.state = {
	  	isOpen: false,
	  	animate: false
	  }
	  this.markerClick = this.markerClick.bind(this)
	}

  componentWillReceiveProps(nextProps) {
  	this.setState({
  		isOpen: nextProps.showInfo,
  		animate: true
  	})
  }

	markerClick = () => (
		this.setState({
			isOpen: !this.state.isOpen,
		})
	)

	render() {
		const { lat, lng, name, formattedAddress } = this.props
		return (
			<Marker 
				position={{lat: lat, lng: lng}} 
				onClick={this.markerClick}
				animation={this.state.animate === true && this.state.isOpen === true
						? window.google.maps.Animation.BOUNCE
						: null }
			>
				{this.state.isOpen && <InfoWindow>
          <div>
  					<span className='info-name'>{name}</span><br />
            <p className='info-add'>{formattedAddress.join(" ")}</p>
          </div>
				</InfoWindow>}
			</Marker>
		)
	}
}

export default InfoBoxMarker