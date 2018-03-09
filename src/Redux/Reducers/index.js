import { combineReducers } from 'redux';
import noteReducer from './noteReducer';

const app = combineReducers({
    noteReducer
});

export default app