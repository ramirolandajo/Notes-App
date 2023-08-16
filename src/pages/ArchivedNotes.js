import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Note from '../components/Note';

export default function ArchivedNotes() {
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/api/note/archived")
        .then(res=>res.json())
        .then((result)=>{
            setNotes(result);
        }
        )
    },[])
    
  return (
    <div>
        <Navbar/>
        <main>
            <div className="secondary-bar">
                <h2>Archived Notes</h2>
                <div className="div-buttons">
                    <Link to="/">
                        <button className="box-shw btn" id="btn-go-back">
                            Go back to unarchived notes
                        </button>
                    </Link>
                </div>
            </div>
            <section className="notes-section">
            {notes.map(note=>(
                <Note noteId={note.idNote} noteTitle={note.title} noteContent={note.content} key={note.idNote}/>
            ))}
            </section>
        </main>
    </div>  )
}
