import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ListGroup, ListGroupItem, Grid, Row, Col, Navbar, 
  FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap/lib';

import ListNotes from './redux/containers/notesContainer';
import AddNotes from './redux/containers/addnotesContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  }

  deleteNote(index) {
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({notes: notesArray});
  }

  componentDidMount(){
    this.retrieveDataAPI();
  }

  retrieveDataAPI(){
    fetch('https://desolate-shore-59639.herokuapp.com/task')
    .then(response => response.json())
    .then(body  => { 
      this.setState({notes: body});
    })
    .catch( err => alert(err));
  }

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

        <Row className="show-grid">
          <Col xs={12} md={2}/>
          <Col xs={12} md={8}>
            <AddNotes />
          </Col>
          <Col xs={12} md={2}/>
        </Row>

        <ListNotes />

      </div>
    );
  }
}

export default App;