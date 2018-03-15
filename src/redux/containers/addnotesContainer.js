import React, { Component } from 'react';
import { connect } from 'react-redux';
import  AddNotes from '../../addNotes';

import { addNote } from '../actions/actions'

function mapStateToProps(state) {
    
    return { notesList: state.notes }
}

const mapDispatchToProps = {
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNotes)