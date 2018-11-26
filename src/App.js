import React, { Component } from 'react';
import './App.css';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown,
  FormGroup,
  FormControl,
  Button,
  Grid,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import ThreeColumns from './components/three-columns';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      boxWithItem: '',
    };
  }

  render() {
    const boxes = {
      box1: ['Loafer', 'Spatula'],
      box2: ['Mouse', 'Sunglasses'],
      box3: ['Pen', 'Toilet Paper'],
    };

    const getValueFromBox = (boxes, getValue) => (
      Object.keys(boxes).reduce((accum, box, index, arr) => {
        let value = getValue(boxes[box]);
        if (value) {
          accum.push(arr[index], value, ...accum);
          arr.splice(1); // mutation allows us to break/shortcut out of the reduce.
          return accum;
        }
        return accum;
      }, [])
    );

    const getValue = currBox => (
      currBox.reduce((accum, value, _, arr) => {
        if (value.toUpperCase() === this.state.word) {
          accum.push(value);
          arr.splice(1); // mutation allows us to break/shortcut out of the reduce.
          return accum;
        }
        return accum; // this is never used.
      }, [])
    );

    let show = () => {
      const [box, item] = getValueFromBox(boxes, getValue);
      this.setState({ boxWithItem: box });
      console.log({ box, item });
      //        console.log('boxes reached', value: boxes[box] )
    };

    let there =
      this.state.boxWithItem !== '' && this.state.word
        ? this.state.word + ' in ' + this.state.boxWithItem
        : 'Find it...';

    return (
      <div className="App">
        <Navbar>
          <h3>unpackit</h3>
          <h1>Find my favorite item</h1>
          <Navbar.Form>
            <FormGroup>
              <FormControl
                onChange={e => {
                  this.setState({ word: e.target.value.toUpperCase() });
                }}
                type="text"
                placeholder="Search"
              />
            </FormGroup>{' '}
            <Button type="submit" onClick={show}>
              Submit
            </Button>
          </Navbar.Form>
        </Navbar>

        <Grid>
          <Row>
            {' '}
            <Col xs={6} md={4}>
              <Image
                src="https://source.unsplash.com/0VGG7cqTwCo/250x250"
                rounded
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src="https://source.unsplash.com/z9F_yK4Nmf8/250x250"
                rounded
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src="https://source.unsplash.com/sxNt9g77PE0/250x250"
                rounded
              />
            </Col>
          </Row>
        </Grid>
        <div>
          <h2>{there}</h2>
        </div>
      </div>
    );
  }
}

export default App;
