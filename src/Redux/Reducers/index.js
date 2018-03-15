import { combineReducers } from 'redux';
import noteReducer from './noteReducer';

const app = combineReducers({
    notes: noteReducer
});

export default app