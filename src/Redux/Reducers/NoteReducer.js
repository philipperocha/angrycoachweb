const reducerNote = ( state = [1,2,3,4,5,6], action) => {
    
    switch(action.type) {
        case 'ADD_ALL':
            return action.note;
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