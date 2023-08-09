import React from "react"
import { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import addNoteImg from "./images/add-icon.png"
import archiveImage from "./images/archive-icon.png"

function App() {
  const [btnPopup, setBtnPopup] = useState(false);

  return (  
    <div>
      <Navbar />
      <Popup />
      <main>
        <div className="secondary-bar">
          <h2>My Notes</h2>
          <div className="div-buttons">
            {/* Archive Button */}
            <button className="box-shw btn" id="btn-archive">
              <img src={archiveImage} alt="img"/>
              Archive
            </button>
            {/* Add Note Button */}
            <button className="box-shw btn" id="btn-add-note" onClick={() => setBtnPopup(true)}>
              <img src={addNoteImg} alt="img" />
              Note
            </button>    
          </div>
        </div>
        <Popup trigger={btnPopup} setTrigger={setBtnPopup}/>
      </main>
    </div>
  );
}

export default App;
