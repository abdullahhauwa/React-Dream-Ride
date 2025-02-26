import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";
// import SignInForm from '../components/signinForm'

const hero = () => {
  return (
    <div>
      <section className="hero-section">
        <Navbar />
        {/* <div className='navbar-outer'> */}
        {/* <nav className="navbar">
        <div className="navbar-brand">
          <p>DREAMRIDE</p>
        </div>
        <ul className="navbar-menu">
        <div className='navbar-middle-content'>
        <li><a href="#home" className="navbar-link active">Home</a></li>
          <li><a href="#cars" className="navbar-link active">Cars</a></li>
          <li><a href="#Features" className="navbar-link active">Features</a></li>
          <li><a href="#Contact" className="navbar-link active">Rent a Car</a></li>
        </div>
          <div className='profile'>
          <button className="signin-button">Sign In</button>
          </div>
        </ul>
      </nav> */}
        {/* </div> */}
        <div id="Home">
          <div className="hero-text">
            <h1>
              Flexible Car Rental <br />
              Across Nigeria.
            </h1>
            <button className="hero-cta-btn">Get Started</button>
          </div>
          <div className="hero-cards">
            <div className="card-group">
              <div id="card">
                <h3>Book in Minutes</h3>
                <p>
                  No hassle, no fuss. Book your dream car with <br />
                  just a few clicks.
                </p>
              </div>
              <div id="card">
                <h3>No Hidden Fees</h3>
                <p>
                  We cover your vehicle licensing fee, so you don't <br />
                  have to worry about extra costs.
                </p>
              </div>
              <div id="card">
                <h3>Drive With Peace Of Mind</h3>
                <p>
                  Our third-party insurance has got you covered in <br />
                  case of any unexpected events.
                </p>
              </div>
            </div>
          </div>
          {/* <img className="carimg" src="motor.jpg.png" alt="carimg" /> */}
          {/* <div className="car-logos">
          <img src="toyota.jpg.svg" alt="Toyota Logo" />
          <img src="mercedes-benz.jpg.svg" alt="mercedes-benz" />
          <img src="rolls-royce.jpg.svg" alt="rolls-royce" />
          <img src="porsche.jpg.svg" alt="porsche" />
          <img src="lamborghini-alt.jpg.svg" alt="lamborghini" />
          <img src="volkswagen.jpg.svg" alt="volkswagen" />
          <img src="mitsubishi.jpg.svg" alt="mitsubishi" />      
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default hero;
