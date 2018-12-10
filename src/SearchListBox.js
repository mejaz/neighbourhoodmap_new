import React, { Component } from 'react'
import MyFancyComponent from './MyFancyComponent'
import { Row, Col } from 'react-bootstrap'
import escapeRegExp from 'escape-string-regexp'

class SearchListBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: '',
			value: "all",
			selectedLoc: [],
		}
		this.handleInput = this.handleInput.bind(this)
		this.clearSearch = this.clearSearch.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleInput(e) {
		let val = e.target.value
		this.setState({
			searchText: val,
		})
	}

	clearSearch(e) {
		this.setState({
			searchText: ''
		})
		this.props.handleClick(e)
	}

  handleClick(event) {
    let selValDetails = this.props.venues.filter((r) => r.id === event.target.getAttribute("value"))
    this.setState({
      value: event.target.getAttribute("value"),
      selectedLoc: selValDetails,
    })
  }	

	render() {

    let searchVenues
    if(this.state.searchText) {
      const match = new RegExp(escapeRegExp(this.state.searchText), 'i')
      searchVenues = this.props.venues.filter((r) => match.test(r.name))
    } else {
      searchVenues = this.props.venues
    }

		return (
			<Row>
				<Col md={4} >
	        <input 
	        	className='search-text' 
	        	type='text' 
	        	placeholder='Type here...'
	        	onChange={this.handleInput}
	        	value={this.state.searchText}
	        />
	        <ul className='search-box list'>
	          {searchVenues.map((r) => (
	            <li key={r.id} value={r.id} onClick={this.handleClick}>{r.name}</li>
	          )
	          )}          
	        </ul>
	      </Col>
	      <Col md={8} className='google-map'>
          <MyFancyComponent 
          	venues={searchVenues} 
          	showInfoVenue={this.state.selectedLoc}
          />
	      </Col>
      </Row>
		)
	}
}

export default SearchListBox




