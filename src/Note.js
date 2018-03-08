import React, {Component} from 'react';

import {Button, ListGroup, ListGroupItem, Grid, Row, Col, Navbar, 
    FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap/lib';

class Note extends Component {

    constructor(props){
        super(props);
        this.state = {
          deleted: false,
          done: false,
          textButtonDone: 'Done',
        }

        this.done = this.done.bind(this); //Porque tive que botar isso pra funcionar o State??
        this.delete = this.delete.bind(this); //Porque tive que botar isso pra funcionar o State??
    }

    componentDidMount(){
        
        this.setState({
            done: this.props.note.done,
            deleted: this.props.note.deleted
        });

        if (this.props.note.done){
            this.setState({ textButtonDone: 'Cancel' });
        }else{
            this.setState({ textButtonDone: 'Done' });
        }
    }

    done(){
        let currentNote = this.props.note;

        if (this.state.done){
            this.setState({ done: false, textButtonDone: 'Done' });
            currentNote.done = false;
        }else{
            this.setState({ done: true, textButtonDone: 'Cancel' });
            currentNote.done = true;
        }

        this.saveNote(currentNote);
    }

    delete(){
        let currentNote = this.props.note;
        currentNote.deleted = true;
        this.saveNote(currentNote);
        this.props.delete(); //Deleta Note da lista principal
    }

    saveNote(note){
        fetch(
            "http://localhost:9000/task/" + note.uuid.toString(), 
            { 
                method: 'PUT', 
                headers: { 'content-type': 'application/json'}, 
                body : JSON.stringify(note)
            }
        );
        this.setState({done: note.done, deleted: note.deleted})
    }

    render(){

        let text;

        if (this.state.done){
            text = <div className='text-line-through'>{this.props.note.name}</div>
        }else{
            text = <div className='pull-left'>{this.props.note.name}</div>
        }

        return(
            <Row className="show-grid">
                <Col xs={12} md={2}/>
                <Col xs={12} md={8}>
                    <div className="note">
                        <ListGroupItem>
                            <div>
                               {text}
                            </div>
                            <div className="pull-right">
                                <Button bsStyle="success" onClick={this.done}>
                                    {this.state.textButtonDone}
                                </Button>
                                <Button bsStyle="danger" onClick={this.delete}>
                                    Delete
                                </Button>
                            </div>
                        </ListGroupItem>
                    </div>
                </Col>
                <Col xs={12} md={2}/>
            </Row>
        );
    }
}

export default Note;