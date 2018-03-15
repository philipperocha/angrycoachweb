const reducerNote = ( state = [1,2,3,4,5,6], action) => {
    
    switch(action.type) {
        case 'ADD_ALL':
<<<<<<< HEAD
            return action.note;
=======
            return [
                      ...action.notes
                   ];
>>>>>>> 601382032a8bd3a53018990dfa6c1c2334800bfa
        case 'ADD_NOTE':
            return state;

        case 'DONE_NOTE':
            return state;

        case 'DELETE_NOTE':
            return state;

        default: 
            return state;
    }
}
    
export default reducerNote
