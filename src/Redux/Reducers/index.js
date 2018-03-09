import { combineReducers } from 'redux';
import NoteReducer from './NoteReducer';

const app = combineReducers({
    NoteReducer
});

export default app