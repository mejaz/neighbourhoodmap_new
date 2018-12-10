import React, { Fragment } from "react"
import InfoBoxMarker from './InfoBoxMarker'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBPYmscV7S_fKralMKoEAryLRZVvQVL6f8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className='map-resp' style={{ height: `89vh`, width: `100%`}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
)((props) => 
	<Fragment>
	  <GoogleMap
	    defaultZoom={12}
	    defaultCenter={{
	      lat: 28.5616,
	      lng: 77.2687
	    }}
		 >
			{props.isMarkerShown && props.venues.length > 0 &&
				props.venues.length != null &&
		    	props.venues.map((r) => (
            <Fragment key={r.id}>
  						{ 
                props.showInfoVenue.length > 0 && r.id === props.showInfoVenue[0].id
                  ?
                    <InfoBoxMarker 
                      lat={r.location.lat}
                      lng={r.location.lng}
                      name={r.name}
                      formattedAddress={r.location.formattedAddress}
                      showInfo={true}
                    />
                  :
                    <InfoBoxMarker 
                      lat={r.location.lat}
                      lng={r.location.lng}
                      name={r.name}
                      formattedAddress={r.location.formattedAddress}
                      showInfo={false}
                    />                    
              }
            </Fragment>   
          )
				)
			}
	  </GoogleMap>
  </Fragment>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        venues={this.props.venues}
        displayInfo={this.props.displayInfo}
        showInfoVenue={this.props.showInfoVenue}
      />
    )
  }
}

export default MyFancyComponent