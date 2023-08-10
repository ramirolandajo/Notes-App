import React from 'react'
import icon from "../images/post-it-icon.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        <img src={icon} alt="note-it-icon" className="navbar-img"/>
        <h1 className="navbar-title">Note it</h1>
      </Link>
    </nav>
  )
}
