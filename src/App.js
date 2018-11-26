import React, { Component } from 'react';
import './App.css';
import {  Nav, Navbar, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import ThreeColumns from './components/three-columns'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: '',
      boxWithItem: ''
    };
  }

  render() {

    const boxes = {
      box1: [
        'Loafer',
        'Spatula'
      ],
      box2: [
        'Mouse',
        'Sunglasses'
      ],
      box3: [
        'Pen',
        'Toilet Paper'
      ]
    }


    let show = () => {
      //  Object.keys(boxes).map((box, index) =>  {
      //   console.log(value: boxes[box] )
      // })
      for (let i = 0; i < Object.keys(boxes).length; i++) {
        let boxArray = Object.keys(boxes)
        for (let y = 0; boxes[boxArray[i]].length > y; y++) {
          //          let cappitalItems = boxes[boxArray[i]][y]
          if( boxes[boxArray[i]][y].toUpperCase() == this.state.word ) {
            console.log(boxArray[i])
            this.setState({boxWithItem: boxArray[i]})
          }
        }
      }
    }

    let there = ((this.state.boxWithItem !== '') && (this.state.word)) ? this.state.word + ' in ' + this.state.boxWithItem : 'Find it...'

    return (
      <div className="App">
        <Navbar>
          <h3>unpackit</h3>
          <h1>Find my favorite item</h1>
          <Navbar.Form>
            <FormGroup>
              <FormControl  onChange={(e) => {this.setState({word: e.target.value.toUpperCase()})}} type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit" onClick={show}>Submit</Button>
          </Navbar.Form>
        </Navbar>

        <Grid>
          <Row> <Col xs={6} md={4}>
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
        <div>
          <h2>
            {there}
          </h2>
        </div>
      </div>
    )
  }
}

export default App;
