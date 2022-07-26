import React from 'react';
import AddComponent from './AddComponent';
import Note from './Note';

const Notelist = ({ notes, handleAddNote,handelDeleteNote }) => {
  
  return (
    <div className='notelist'>
    {notes.map((note)=>{
      return  <Note id={note.id} text={note.text} date={note.date} handelDeleteNote={handelDeleteNote} />
    })}
    <AddComponent handleAddNote={handleAddNote} />
    </div>
  )
}

export default Notelist