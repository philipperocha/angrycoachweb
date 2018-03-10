import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ListNotes from '../../listNotes';


function mapStateToProps(state) {
    console.log(state);
    return { notesList: state.noteReducer }
}

export default connect(mapStateToProps)(ListNotes)