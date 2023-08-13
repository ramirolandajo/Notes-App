import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function ArchivedNotes() {
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
        </main>
    </div>  )
}
