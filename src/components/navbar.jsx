import React from 'react'
import { NavLink } from 'react-router'

const navbar = () => {
  return (
    <div>
        <nav className='navbar'>
    <div className="navbar-brand">
      <p>DREAMRIDE</p>
    </div>
    <ul className="navbar-menu">
     <div className='navbar-middle-content'>
     <li><a href="#home" className="navbar-link active">Home</a></li>
      <li><a href="#cars" className="navbar-link active">Cars</a></li>
      {/* <li><a href="#Sign In" className="navbar-link active">Sign In</a></li> */}
      <li><a href="#Features" className="navbar-link active">Features</a></li>
      <li><a href="#Contact" className="navbar-link active">Rent a Car</a></li>
     </div>
      <div className='profile'>
      <button className="signin-button">Sign In</button>
      </div>
    </ul>
  </nav>
    </div>
  )
}

export default navbar
