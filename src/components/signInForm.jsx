import React from 'react'
// import { useState } from 'react'


const signInForm = () => {

  return (
    <div>
{/* Button to trigger the modal  */}
{/* <button id="modal-button">Login | Register</button> */}
{/* Modal window */}
{/* <div id="modal" class="modal">  */}
{/* Modal content */}
<div className="modal-content">
  <span className="close">×</span>  
  <form autoComplete="off" className="login-form">
    <p className="message">Sign in to Book now!</p>
    {/* 
  <div class="form-group">
      <div class="input-field">
          <i class="fa-regular fa-user"></i>
          <input type="text" placeholder="First name" required>
      </div>

      <div class="input-field">
          <input type="text" placeholder="Last name" required>
      </div>
  </div>  */}
    <div className="input-field">
      {/* <span>Email</span> */}
      {/* <label id="form-email" for="email">Email</label> */}
      <input type="text" placeholder="Email" required />
    </div>     
    <div className="input-field">
      {/* <span>password</span> */}
      {/* <label id="form-password" for="password">Password</label> */}
      <input type="password" id="Password" placeholder="Password" required />
      <span className="icon" id="togglePassword">
        <i className="far fa-eye-slash" />
      </span>
    </div>
    <div className="input-field">
      {/* <span>Confirm Password</span> */}
      {/* <label id="form-confirm-password" for="confirm-password">confirm password</label> */}
      <input type="password" id="passwordConfirm" placeholder="Confirm Password" required />
      <span className="icon" id="togglePasswordConfirm">
        <i className="far fa-eye-slash" />
      </span>
    </div>
    <button className="submit">Submit</button>
    <p className="signin">
      Don't have an account?
      <button className="registerbutton">Register</button>
      {/* <a href="#">Register</a> */}
    </p>
  </form>
</div>

    </div>
  )
}

export default signInForm
