import React from 'react'
import archiveImg from '../images/archive-icon.png'
import editImg from '../images/edit-icon.png'
import deleteImg from '../images/delete-icon.png'

export default function Note(props) {
  return (
    <div className="note box-shw">
        <h2>{props.noteTitle}</h2>
        <p>{props.noteContent}</p>
        <div className="note-images">
            <img src={archiveImg} alt="archive img" />
            <img src={editImg} alt="edit img" />
            <img src={deleteImg} alt="delete img" />
        </div>
    </div>
  )
}
