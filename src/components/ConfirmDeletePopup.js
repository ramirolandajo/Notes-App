import React from 'react'
import closeButton from '../images/close-button.png'

function ConfirmDeletePopup(props) {
    
  const handleClick=(e) => {
    e.preventDefault()
    fetch("http://localhost:8080/api/note/"+props.noteId, {
      method: "DELETE"
    }).then(()=>{
      alert("Note deleted")
      window.location.reload(true)
      console.log("Note with id " + props.noteId + " was successfully deleted")
    })
  }

  return (props.trigger) ? (
    <div className="popup">
        <div className="inner-popup inner-delete-popup">
          <img src={closeButton} className="close-btn" onClick={()=>props.setTrigger(false)} alt="Close"/>
          <h2 className="popup-title">Delete Note</h2>
          <p>Are you sure you want to delete the note?</p>
            <div className="form-buttons">
                <button className="btn box-shw" onClick={()=>props.setTrigger(false)}>Cancel</button>
                <button className="btn box-shw btn-red" onClick={handleClick}>Delete</button>
            </div>
        </div>
    </div>
  ) : "";
}

export default ConfirmDeletePopup