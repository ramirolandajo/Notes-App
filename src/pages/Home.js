import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import addNoteImg from '../images/add-icon.png';
import archiveImage from '../images/archive-icon.png';
import { Link } from 'react-router-dom';
import Note from '../components/Note';

export default function Home() {
  const [btnPopup, setBtnPopup] = useState(false);
  const [notes, setNotes] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:8080/api/note/unarchived")
    .then(res=>res.json())
    .then((result)=>{
        setNotes(result);
    }
    )
  },[])

  return (
    <div>
        <Navbar/>
        <Popup />
        <main>
        <div className="secondary-bar">
            <h2>My Notes</h2>
            <div className="div-buttons">
            {/* Archive Button */}
                <Link to="/archived">
                    <button className="box-shw btn" id="btn-archive">
                        <img src={archiveImage} alt="img"/>
                        Archive
                    </button>
                </Link>
                {/* Add Note Button */}
                <button className="box-shw btn" id="btn-add-note" onClick={() => setBtnPopup(true)}>
                    <img src={addNoteImg} alt="img" />
                    Note
                </button>
            </div>
        </div>
        <section className="notes-section">
            {notes.map(note=>(
                <Note noteId={note.idNote} noteTitle={note.title} noteContent={note.content} noteArchived={note.archived} key={note.idNote}/>
            ))}
        </section>
        {/* create note Popup */}
        <Popup trigger={btnPopup} setTrigger={setBtnPopup}/>
        </main>
    </div>
    )
}
