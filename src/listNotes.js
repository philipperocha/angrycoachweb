import React, {Component} from 'react';

import Note from './redux/containers/noteContainer';

class ListNotes extends Component {


    componentDidMount(){
        this.retrieveDataAPI();
    }
    
    retrieveDataAPI(){
        fetch('https://desolate-shore-59639.herokuapp.com/task')
        .then(response => response.json())
        .then(body  => {
           // console.log(body);

          //We pass to Store the body from API
          this.props.addAll(body);
        })
        .catch( err => alert(err));
    }

    render(){
        //console.log(this.props.notesList);
        
        //notesList is from Store ok?
        var notes = this.props.notesList.map((val, key) => {
            
            if (!val.deleted){ //Somente retorna Notes que nao foram deletados
                //console.log(val);
                return <Note key={key} note={val} />
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