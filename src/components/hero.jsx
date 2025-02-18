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
      <img src="logoo.jpg.png " alt="logo" className="mylogo" />
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
    <div className="Logo">
      {/* <h1>Premium <br />
        Car Rental <br />
        in Lagos, Nigeria</h1>
      <p>Don't deny yourself the pleasure of  <br />
        driving the best premium cars from <br />
        around the world here and now</p> */}
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