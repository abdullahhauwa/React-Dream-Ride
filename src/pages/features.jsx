import React from 'react'

const features = () => {
  return (
    <div>
<div>
  {/* Begining of Features Section */}
  <section id="Features">
    <div className="feature-section">
      <h1>What We Offer</h1>
      <p>We are all about our clients comfort and safety, <br />
        That's why we provide the best service you can imagine.</p>
      <div className="box-model">
        <div className="box">
          <i className="fas fa-truck" />
          <h3>24 Hour Car Delivery</h3>
        </div>
        <div className="box">
          <i className="fas fa-phone-alt" />
          <h3>24/7 Technical Support</h3>
        </div>
        <div className="box">
          <i className="fas fa-gift" />
          <h3>All Models Have a Premium Package</h3>
        </div>
        <div className="box">
          <i className="fas fa-lock" />
          <h3>Absolute Confidentiality</h3>
        </div>
      </div>
      {/* <hr className='features-horizontal-line'/> */}
    </div>
  </section>
  {/* Ending of Features Section */}
</div>
    </div>
  )
}

export default features