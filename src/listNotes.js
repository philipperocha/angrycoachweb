import React, {Component} from 'react';

import Note from './note';

class ListNotes extends Component {


    componentDidMount(){
        this.retrieveDataAPI();
    }
    
    retrieveDataAPI(){
        fetch('https://desolate-shore-59639.herokuapp.com/task')
        .then(response => response.json())
        .then(body  => { 
          this.props.addAll(body);
        })
        .catch( err => alert(err));
    }

    render(){
        console.log(this.props);
        var notes = this.props.notesList.map((val, key) => {
            
            if (!val.deleted){ //Somente retorna Notes que nao foram deletados
                return <Note key={key} note={val} delete={() => this.deleteNote(key)} />
            }
        });

        return (
            <div>
                {notes}
            </div>
        );
    }
}

export default ListNotes;