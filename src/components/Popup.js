import React from 'react'
import closeButton from "../images/close-button.png"

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="inner-popup">
          <img src={closeButton} className="close-btn" onClick={() => props.setTrigger(false)} alt="Close Btn"/>
          {props.children}
          <form>
            <div className="form-title">
              <label>Title</label>
              <input type="text" id="form-title-input" name="form-title-input" placeholder="Note Title"></input>
            </div>
            <div className="form-content">
              <label>Content</label>
              <textarea id="note-content" name="note-content" placeholder="Note about something..."></textarea>
            </div>
          </form>
          <button className="btn box-shw" id="btn-cancel">Cancel</button>
          <button className="btn box-shw" id="btn-confirm">Confirm</button>
        </div>
    </div>
  ) : "";
}

export default Popup