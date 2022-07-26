import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

const Note = ({id,text,date,handelDeleteNote }) => {
  return (
    <div className='note'>
      <span style={{fontSize:"16px" ,fontWeight:"400" , fontFamily:"sans-serif"}}>{text}</span>
      <div className='footer'>
        <small style={{fontWeight:"bold", fontSize:"15px"}}>{date}</small>
        <MdDeleteForever className='delete-icon' onClick={() => handelDeleteNote(id)}/>
      </div>
    </div>
  )
}

export default Note