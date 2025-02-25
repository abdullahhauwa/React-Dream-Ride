import React from 'react'

const book = () => {
  return (
    <div>
{/* Begining of Book Section */}
<section id="rental-form">  
  <div className="rental-form">
    <h1><i className="fas fa-car" /> Rental Cars from just <br /></h1>
    <h5>$25/Day</h5>
    <p><span><i className="fas fa-tag" /> 15% off</span> first time reservations <br /><br /><br />
      <button>Redeem</button></p>
    <img className="rentalimg" src="neewcar.jpg.png" alt="rentalimg" />
  
  </div>
</section>
{/* End of Book section */}
    </div>
  )
}

export default book