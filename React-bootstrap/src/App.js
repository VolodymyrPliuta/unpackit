import React, { Component } from 'react';
import './App.css';
import {  Nav, Navbar, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import ThreeColumns from './components/three-columns'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar>
              <h1>Think outside the box</h1>
            </Navbar>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
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
      </Grid>;
      </div>
    );
  }
}

export default App;
