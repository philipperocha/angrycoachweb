const reducerNote = ( state = [], action) => {
    
    switch(action.type) {
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