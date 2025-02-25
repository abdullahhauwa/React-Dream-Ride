import React from 'react'
import Image from "../assets/images/aboutImage.png"

const about = () => {
  return (
    <div>
    <section className="about-us">
    <div className='about-content'>
    <div className="content">
        <h3>About Us</h3>
        <p>
          Experience <span className="highlight">Flexible Car Rentals</span> with DreamRide. <br />  
          Enjoy top-tier vehicles and seamless booking for a hassle-free journey.
        </p>
        <p className="description">
          Whether you need a luxury car for a special occasion or a reliable ride for daily use, DreamRide offers a variety of high-end vehicles to suit your needs.
        </p>
        <div className="buttons">
          <button className="rent">Contact</button>
          {/* <button className="learn-more">Learn More</button> */}
        </div>
      </div>
      <div className="arrive-style">
        <h3>Arrive In Style</h3>
        <p>Drive premium vehicles at unbeatable rates with our flexible rental options.</p>
      </div>
    </div>

      <div className="about-image-container">
              <img src={Image} alt="Luxury Car" />
      </div>
    </section>
    </div>
  )
}

export default about
