import React, {Component} from 'react';

import {Button, ListGroup, ListGroupItem, Grid, Row, Col, Navbar, 
    FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap/lib';

class Note extends Component {
    render(){
        return(
            <Row className="show-grid">
                <Col xs={12} md={2}/>
                <Col xs={12} md={8}>
                    <div className="note">
                        <ListGroupItem>
                            <div className="pull-left">
                                {this.props.text}
                            </div>
                            <div className="pull-right">
                                <Button bsStyle="success">
                                    Done
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