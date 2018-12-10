import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import './App.css'
import NeighbourhoodList from './NeighbourhoodList'


class App extends Component {
  render() {
    return (
      <Grid fluid className="App">
        <NeighbourhoodList />
      </Grid>
    )
  }
}

export default App

