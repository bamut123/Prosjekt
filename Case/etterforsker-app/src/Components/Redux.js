import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNote, addNote } from '../actions';
import { decrementNote, deleteNote } from '../actions';
import { resetNote, setNote } from '../actions';


function App() {
  const [ NoteName, setNoteName ] = useState();

  const numberOfNotes = useSelector( state => state.numberOfNotes );
  const noteList = useSelector( state => state.noteList );

  const dispatch = useDispatch();

  const getAllNotes = () => {
    let notesLi = noteList.map( note => {
      return <li>{ note }</li>
    } );
    return notesLi;
  }

  const addNewNote = (event) => {
    dispatch( addNote( NoteName ) );
    event.preventDefault();
  }

  const handleChange = (event) => {
      let newNoteName = event.target.value;
      setNoteName(newNoteName);
  }

  return (
    <div>

      <h1>Notes/To Do List</h1>

      <section id="number-of-notes-section">
        <p>Number of Notes Made: { numberOfNotes }</p>
        <input class="btn btn-success"s onClick={ () => dispatch( incrementNote() ) }  type="button" value="Add Note" />
        <input class="btn btn-danger" onClick={ () => dispatch( decrementNote() ) }  type="button" value="Remove Notes" />
        <input class="btn btn-primary" onClick={ () => dispatch( resetNote() ) }  type="button" value="Delete All Notes" />
      </section>{/* end umber-of-cars-section */}

      {/*
          *******
          add-new-car-section
          *******
      */}
      <section id="add-new-car-section">
       
        <form onSubmit={ addNewNote }>
        <div className="form-group">
          <label>Note</label>
          <textarea class="form-control" onChange={ handleChange } value={ NoteName }  rows="3"></textarea>
          <input type="submit" value="Add Note"/>
          </div>
        </form>
        <ul class="list-group">
          <li class="list-group-item"> { getAllNotes() }</li>
           </ul>

      </section>

    </div>
  );
}

export default App;
