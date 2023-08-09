import React from 'react'
import icon from "../images/post-it-icon.png"

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={icon} alt="note-it-icon"/>
        <h1>Note it</h1>
    </nav>
  )
}
