import React, {Component} from 'react';

import Note from './note';

class ListNotes extends Component {

    render(){
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