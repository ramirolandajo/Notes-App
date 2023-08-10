import React from "react"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import ArchivedNotes from "./components/ArchivedNotes";

function App() {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/archived" element={ <ArchivedNotes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
