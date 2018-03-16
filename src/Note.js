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

        //props.note is from application STORE
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
        //this.props.delete(); //Deleta Note da lista principal
    }

    //This method saves our current Note to API (Update)
    //After, update the application Store (Global State) <-- retrieveDataAPI method
    saveNote(note){
        fetch(
            "https://desolate-shore-59639.herokuapp.com/task/" + note.uuid.toString(), 
            { 
                method: 'PUT', 
                headers: { 'content-type': 'application/json'}, 
                body : JSON.stringify(note)
            }
        ).then(() => this.retrieveDataAPI());

        this.setState({done: note.done, deleted: note.deleted});
    }

    retrieveDataAPI(){
        fetch('https://desolate-shore-59639.herokuapp.com/task')
        .then(response => response.json())
        .then(body  => {
            //We pass the body from API to the Store
            this.props.addAll(body);
        })
        .catch( err => alert(err));
    }

    render(){
        //console.log(this.props.note.name + ' / done? ' + this.props.note.done + ' / deleted? ' + this.props.note.deleted);

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