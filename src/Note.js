import React, {Component} from 'react';

import {Button, ListGroup, ListGroupItem, Grid, Row, Col, Navbar, 
    FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap/lib';

class Note extends Component {

    constructor(props){
        super(props);
        this.state = {
          done: false,
          textButtonDone: 'Done',
        }

        this.done = this.done.bind(this); //Porque tive que botar isso pra funcionar o State??
    }

    done(){
        if (this.state.done){
            this.setState({ done: false, textButtonDone: 'Done' });
        }else{
            this.setState({ done: true, textButtonDone: 'Cancel' });
        }
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
                                <Button bsStyle="danger" onClick={this.props.delete}>
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