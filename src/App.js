import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ListGroup, ListGroupItem, Grid, Row, Col, Navbar} from 'react-bootstrap/lib';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Angry Coach</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={2}/>
            <Col xs={12} md={8}>
              <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem> 
                <ListGroupItem>Item 2</ListGroupItem> 
                <ListGroupItem>Item 3</ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs={12} md={2}/>
          </Row>
        </Grid>


      </div>
    );
  }
}

export default App;
