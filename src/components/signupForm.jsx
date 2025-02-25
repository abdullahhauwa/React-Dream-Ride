import React from 'react'

const signupForm = () => {
  return (
    <div>
  {/* Button to trigger the modal  */}
{/* <button id="modal-button">Login | Register</button> */}
{/* Modal window */}
{/* <div id="modal" class="modal"> */}
{/* Modal content */}
<div className="modal-content">
  <span className="close">×</span>
  <form autoComplete="off" className="register-form">
    <p className="title">Register</p> 
    <div className="form-group">
      <div className="input-field">
        {/*<span>First name</span> */}
        <i className="fa-regular fa-user" />
        {/* <label id="form-name" for="name">First Name</label> */}
        <input type="text" placeholder="First name" required />
      </div>
      <div className="input-field">
        {/* <span>Last name</span> */}
        <i className="fa-regular fa-user" />
        {/* <label id="form-name" for="name">Last Name</label> */}
        <input type="text" placeholder="Last name" required />
      </div>
    </div> 
    <div className="input-field">
      {/* <span>Email</span> */}
      <i className="fa-regular fa-envelope" />
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
      Already have an account?
      <button className="signinbtn">Sign in</button>
      {/* <a 
      href="#" 
      class="signinbtn">Sign in</a> */}
    </p>
    {/* Form fields here */}
  </form>
</div>

    </div>
  )
}

export default signupForm
