import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <div className="container-fluid">
    <span className="navbar-brand">Ahmad Syakban</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/portofolio" className="nav-link">Portofolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/article" className="nav-link">Article</Link>
        </li>
      </ul>
    </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar;
