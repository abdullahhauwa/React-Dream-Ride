import React from 'react'

const hero = () => {
  return (
    <div>
      <section className="hero-section">
  <nav className="navbar">
    <div className="navbar-brand">
      {/* <p>DreamRide</p> */}
    </div>
    <ul className="navbar-menu">
      {/* </i><img src="brrea.jpg.png " alt="logo" class="mylogo"> */}
      <img src="logoo.jpg.png " alt="dream-ride-logo" className="mylogo" />
      <li><a href="#home" className="navbar-link active">Home</a></li>
      <li><a href="#cars" className="navbar-link active">Cars</a></li>
      <li><a href="#Features" className="navbar-link active">Features</a></li>
      <li><a href="#Contact" className="navbar-link active">Rent a Car</a></li>
      <li className="download-link"><a href="#Download" className="navbar-link active ">Download App</a></li>
      <li className="dropdown">
        <a href="#" className="dropdown-toggle">More <i className="fas fa-caret-down" /></a>
        <ul className="dropdown-menu">
          <li><a href="#testimonial" className="navbar-link active">Help</a></li>
          <li><a href="#help" className="dropdown-link">Rent Today</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div id="Home">
    <div className="hero-text">
      <h1>Rent Your Dream Car Across <span>Nigeria!</span></h1>
      <p>Our wide range of cars are available for rent in Abuja, 
        <br/>Lagos, and Port Harcourt. 
        <br/>Get behind the wheel and take control of your journey.
      </p>
      <button className='hero-cta-btn'>Get Started</button>
      <p></p>
    </div>
    <div className='hero-cards'>
      <div className='card-group'>
        <div id='card'>
          <h3>Book in Minutes</h3>
          <p>No hassle, no fuss. Book your dream car with <br/>just a few clicks.</p>
        </div>
        <div id='card'>
          <h3>No Hidden Fees</h3>
          <p>We cover your vehicle licensing fee, so you don't <br/>have to worry about extra costs.</p>
        </div>
        <div id='card'>
          <h3>Drive With Peace Of Mind</h3>
          <p>Our third-party insurance has got you covered in <br/>case of any unexpected events.</p>
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
  )
}

export default hero