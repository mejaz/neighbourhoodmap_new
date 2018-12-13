import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import SearchListBox from './SearchListBox'

class NeighbourhoodList extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      value: "all",
      selectedLoc: [],
      venues: [],
      showList: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    var clientId = "A241I4ML5J5CDHGKWSSTR1KPWSGAJCHHF3C3G41PD1YWAK1S"
    var clientSecret = "GJUUSBZJUHKK1RBTPXEM01JH2XS333IITSYZQUWSY5WXBV5X"
    let myLat = 28.5616
    let myLng = 77.2687
    var url = "https://api.foursquare.com/v2/venues/search?client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20181201&ll=" + myLat + "," + myLng + "&v=20181201&query=restaurant"
    
   
    fetch(url)
      .then((response) => { 
        if(response.ok) {
          return response.json()
        } else {
          throw Error('Error!!')
        }
      })
      .then(r => this.setState({venues: r.response.venues}))
      .catch((e) => alert("Error loading venues! Check you internet connection."))
  }

  handleClick(event) {
    let selValDetails = this.state.venues.filter((r) => r.id === event.target.getAttribute("value"))
    this.setState({
      value: event.target.getAttribute("value"),
      selectedLoc: selValDetails,
    })
  }
  
  render() {
    let options = []
    options = this.state.venues.map((r) => options.push({
      lable: r.name,
      value: r.id
    }))
    return (
      <Row className='cols header'>       
          <span className='appName'><h1>Neighbourhood Map</h1></span>
          <SearchListBox 
            venues={this.state.venues} 
            handleClick={this.handleClick}
          />
    
      </Row>
    )
  }
}

export default NeighbourhoodList

