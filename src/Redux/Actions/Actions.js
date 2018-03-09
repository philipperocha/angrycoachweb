export const addNote = note => {
    
    return {
        type: 'ADD_NOTE',
        note
    };
}

export const doneNote = note => {
    
    return {
        type: 'DONE_NOTE',
        note
    };
}

export const deleteNote = note => {
    
    return {
        type: 'DELETE_NOTE',
        note
    };
}