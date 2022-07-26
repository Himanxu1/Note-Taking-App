import React from 'react';
import {useState} from 'react';

const AddComponent = ({ handleAddNote }) => {
    const [notetext,setNotetext] = useState('');
    const characterLimit = 200;

    const handleChange= (e) =>{
       setNotetext(e.target.value);
    }

    const handleClick = () =>{
        if(notetext.trim().length > 0){
            handleAddNote(notetext)
        }
        setNotetext("");

    }
  return (
    <div className='note new'>
        <textarea rows="8" cols="10" value={notetext} maxLength={characterLimit} placeholder="Type to add note" onChange={handleChange}></textarea>
        <div className='footer'>
            <small>{characterLimit - notetext.length} remainning</small>
            <button className='save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddComponent