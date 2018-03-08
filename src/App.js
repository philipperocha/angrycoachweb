import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ListGroup, ListGroupItem, Grid, Row, Col, Navbar, 
  FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap/lib';
import Note from './Note';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value});
  }

  addNote(){
    if (this.state.noteText === '') {
      alert('É preciso inserir uma tarefa');
      return;
    }

    let notesArray = this.state.notes;
    notesArray.push(this.state.noteText);
    this.setState({noteText: ''});
    //this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      let notesArray = this.state.notes;
      notesArray.push(this.state.noteText);
      this.setState({noteText: ''});
    }
  }

  deleteNote(index) {
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({notes: notesArray});
  }

  componentDidMount(){
    fetch('https://desolate-shore-59639.herokuapp.com/task')
    .then(response => response.json())
    .then(body  => { 
      this.setState({notes: body});
    })
    .catch( err => alert(err));
  }

  render() {

    let notes = this.state.notes.map((val, key) => {

      if (!val.deleted){ //Somente retorna Notes que nao foram deletados
        return <Note key={key} note={val} delete={() => this.deleteNote(key)} />
      }
      
    })

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
            <FormGroup>
              <InputGroup>
                <FormControl type="text" 
                        ref={((input) => {this.textInput = input})}
                        className="form-control"
                        value={this.state.noteText}
                        onChange={noteText => this.updateNoteText(noteText)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                />
                <InputGroup.Button>
                  <Button onClick={this.addNote.bind(this)}>Adicionar</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={12} md={2}/>
        </Row>

        {notes}

      </div>
    );
  }
}

export default App;