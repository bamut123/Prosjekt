import { combineReducers } from 'redux';
import numberOfNotesReducer from './numberOfNotesReducer';
import noteListReducer from './noteListReducer';

const allReducers = combineReducers(
{
    numberOfNotes: numberOfNotesReducer,
    noteList : noteListReducer
}
);


export default allReducers;