import React from 'react'

const paymentForm = () => {
  return (
    <div>
      {/* Button to trigger the modal  */}
{/* <button id="modal-button">Login | Register</button> */}
{/* Modal window */}
{/* <div id="modal" class="modal"> */}
{/* Modal content */}
<div className="modal-content">
  <span className="close">×</span>
  <div className="wrapper">
    <h2>Payment Form</h2>
    <form action method="POST">
      {/* Account Information Start */}
      <h4>Account</h4>
      <div className="input_group">
        <div className="input_box">
          <input type="text" placeholder="Full Name" required className="name" />
          <i className="fa fa-user icon" />
        </div>
        <div className="input_box">
          <input type="text" placeholder="Name on Card" required className="name" />
          <i className="fa fa-user icon" />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="email" placeholder="Email Address" required className="name" />
          <i className="fa fa-envelope icon" />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="text" placeholder="Address" required className="name" />
          <i className="fa fa-map-marker icon" aria-hidden="true" />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="text" placeholder="City" required className="name" />
          <i className="fa fa-institution icon" />
        </div>
      </div>
      {/* Account Information End */}
      {/* DOB & Gender Start */}
      <div className="input_group">
        <div className="input_box">
          <h4>Date Of Birth</h4>
          <input type="text" placeholder="DD" required className="dob" />
          <input type="text" placeholder="MM" required className="dob" />
          <input type="text" placeholder="YYYY" required className="dob" />
        </div>
      </div>  
      <div className="input_box">
        <h4>Gender</h4>
        <input type="radio" name="gender" required id="b1" defaultChecked />
        <label htmlFor="b1">Male</label>
        <input type="radio" name="gender" required id="b2" defaultChecked />
        <label htmlFor="b2">Female</label>
      </div>
      {/* DOB Gender End */}
      {/* Payment Details Start */}
      <div className="input_group">
        <div className="input_box">
          <h4>Payment Details</h4>
          <input type="radio" name="pay" className="radio" id="bc1" defaultChecked />
          <label htmlFor="bc1"><span>
              <i className="fa fa-cc-visa" />Credit Card
            </span></label>
          <input type="radio" name="pay" className="radio" id="bc2" defaultChecked />
          <label htmlFor="bc2"><span>
              <i className="fa fa-cc-paypal" />Pay Pal
            </span></label>
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="tel" className="name" placeholder="Card Number 1111-2222-3333-4444" required />
          <i className="fa fa-credit-card-icon" />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="tel" className="name" placeholder="Card CV 632" required />
          <i className="fa fa-user-icon" />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="number" className="name" placeholder="Exp Month" required />
          <i className="fa fa-calender-icon" />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <input type="number" className="name" placeholder="Exp Year" required />
          <i className="fa fa-calender-icon" />
        </div>
      </div>
      <div className="input_box">
        <input type="number" className="name" placeholder="Enter Amount" required />
        <i className="fa fa-money-icon" />
      </div>
      <div className="input_group">
        <div className="input_box">
          <button type="submit">Pay Now</button>
        </div>
      </div>
      {/* Payment Details End */}
    </form>
  </div>
</div>

    </div>
  )
}

export default paymentForm
