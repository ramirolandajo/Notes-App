import React from 'react'
import closeButton from '../images/close-button.png'
import { useState } from 'react';

function Popup(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick=(e) => {
    e.preventDefault()
    const note = {title, content}
    console.log(title, content)
    fetch("http://localhost:8080/api/note/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(note)
    }).then(()=>{
      window.location.reload(true)
      console.log("New note added")
    })

    setTitle("")
    setContent("")
    props.setTrigger(false)
  }

  const handleExit=(e) => {
    e.preventDefault()
    props.setTrigger(false)
    setTitle("")
    setContent("")
  }

  return (props.trigger) ? (
    <div className="popup">
        <div className="inner-popup">
          <img src={closeButton} className="close-btn" onClick={handleExit} alt="Close"/>
          <h2 className="popup-title">Add new note</h2>
          <form>
            <div className="form-title">
                <label>Title</label>
                <input 
                    type="text"
                    id="form-title-input"
                    name="form-title-input"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="form-content">
                <label>Content</label>
                <textarea 
                    id="note-content-txtf"
                    name="note-content"
                    placeholder="Note about something..."
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
            </div>
            <div className="form-buttons">
                <button className="btn box-shw btn-red" onClick={handleExit}>Cancel</button>
                <button className="btn box-shw btn-green" onClick={handleClick}>Confirm</button>
            </div>
          </form>
        </div>
    </div>
  ) : "";
}

export default Popup