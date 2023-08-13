import React from 'react'
import './App.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import ArchivedNotes from './pages/ArchivedNotes';

function App() {
  return (  
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/archived" element={ <ArchivedNotes />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
