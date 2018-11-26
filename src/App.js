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
      boxes: {
        box1: ['Loafer', 'Spatula'],
        box2: ['Mouse', 'Sunglasses'],
        box3: ['Pen', 'Toilet Paper'],
      },
    };
    this.forLoopGetValueFromBox = this.forLoopGetValueFromBox.bind(this);
    this.forLoopGetValue = this.forLoopGetValue.bind(this);
    this.show = this.show.bind(this);
  }

  // // better for if you ever want to handle duplicates.
  //  const getValueFromBox = (boxes, getValue) =>
  //    Object.keys(boxes).reduce((accum, box, index, arr) => {
  //      let value = getValue(boxes[box]);
  //      if (value) {
  //        accum.push(arr[index], value, ...accum);
  //        return accum;
  //      }
  //      return accum;
  //    }, []);

  //  const getValue = currBox =>
  //    currBox.reduce((accum, value, _, arr) => {
  //      if (value.toUpperCase() === this.state.word) {
  //        accum.push(value);
  //        return accum;
  //      }
  //      return accum; // this is never used.
  //    }, []);

  // this implementation will need to pop off values and do additional searches if worried about duplicates such as ... 3 different types of mouse's. For a quicker way to handle that look at the reduce solution above.
  forLoopGetValueFromBox = (boxes, forLoopGetValue) => {
    for (let i = 0; i < Object.keys(boxes).length; i++) {
      let boxArray = Object.keys(boxes);
      let value = forLoopGetValue(i, boxArray[i], boxes[boxArray[i]]);
      if (value) return value;
    }
    // reached the end so return an empty array.
    return [];
  };

  forLoopGetValue = (currBoxIndex, boxName, currBox) => {
    for (let y = 0; currBox.length > y; y++) {
      if (currBox[y].toUpperCase() === this.state.word) {
        const item = currBox[y];
        console.log({ boxName, currBox });
        return [boxName, item];
      }
    }
  };

  show = () => {
    const [box, item] = this.forLoopGetValueFromBox(
      this.state.boxes,
      this.forLoopGetValue
    );
    if (item) this.setState({ boxWithItem: box });
    console.log({ box, item });
  };

  componentDidUpdate() {
    if (!this.state.boxWithItem) {
      this.show();
    } else {
      this.state.boxWithItem = '';
    }
  }

  render() {
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
            <Button type="submit" onClick={this.show}>
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
