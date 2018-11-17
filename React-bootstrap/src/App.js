import React, { Component } from 'react';
import './App.css';
import {  Nav, Navbar, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import ThreeColumns from './components/three-columns'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <h3>unpackit</h3>
          <h1>Find my favorite item</h1>
          <Navbar.Form>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar>

        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://source.unsplash.com/0VGG7cqTwCo/250x250" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://source.unsplash.com/z9F_yK4Nmf8/250x250" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://source.unsplash.com/sxNt9g77PE0/250x250" rounded />
            </Col>
          </Row>
        </Grid>
        {/*    <h1>Thing outside of the box</h1> */}
      </div>
    );
  }
}

export default App;
