import React from 'react'
import archiveImg from '../images/archive-icon.png'
import editImg from '../images/edit-icon.png'
import deleteImg from '../images/delete-icon.png'
import EditPopup from '../components/EditPopup'
import { useState } from 'react'
import { useLocation } from 'react-router'
import ConfirmDeletePopup from './ConfirmDeletePopup'

export default function Note(props) {
  const [btnEditPopup, setBtnEditPopup] = useState(false);
  const [btnConfirmDeletePopup, setBtnConfirmDeletePopup] = useState(false);
  const location = useLocation();

  const handleArchiveClick = (e) => {
    e.preventDefault()
    if (location.pathname !== "/archived") {
      fetch("http://localhost:8080/api/note/"+props.noteId, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: '{"title": "'+props.noteTitle+'", "content": "'+props.noteContent+'", "archived": "true"}'
  
      }).then(()=>{
        alert ("Note archived")
        window.location.reload(true)
        console.log("Note with id " + props.noteId + " archived")
      })
    }
    else {
      fetch("http://localhost:8080/api/note/"+props.noteId, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: '{"title": "'+props.noteTitle+'", "content": "'+props.noteContent+'", "archived": "false"}'
  
      }).then(()=>{
        alert ("Note unarchived")
        window.location.reload(true)
        console.log("Note with id " + props.noteId + " archived")
      })
    }
  }

  return (
    <div className="note box-shw">
        <h2>{props.noteTitle}</h2>
        <p>{props.noteContent}</p>
        <div className="div-note-images">
            <img src={archiveImg} alt="archive img" onClick={handleArchiveClick} className="note-images"/>
            <img src={editImg} alt="edit img" onClick={() => setBtnEditPopup(true)} className="note-images"/>
            <img src={deleteImg} alt="delete img" onClick={() => setBtnConfirmDeletePopup(true)} className="note-images"/>
        </div>
        <EditPopup trigger={btnEditPopup} setTrigger={setBtnEditPopup} noteId={props.noteId} noteArchived={props.noteArchived}/>
        <ConfirmDeletePopup trigger={btnConfirmDeletePopup} setTrigger={setBtnConfirmDeletePopup} noteId={props.noteId}/>
    </div>
  )
}
