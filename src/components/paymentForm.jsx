
import React, { useState } from "react";

const PaymentForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    setIsSubmitted(true); // Show confirmation message
  };

  return (
    <div>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        
        {isSubmitted ? (
          <div className="confirmation-message">
            <h2>Thank you!</h2>
            <p>Your booking is confirmed.</p>
          </div>
        ) : (
          <div className="wrapper">
            <h2>Payment Form</h2>
            <form onSubmit={handleSubmit}>
              {/* Account Information */}
              <h4>Account</h4>
              <div className="input_group">
                <div className="input_box">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Name on Card" required />
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input type="text" placeholder="Address" required />
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input type="text" placeholder="City" required />
                </div>
              </div>

              {/* Payment Details */}
              <h4>Payment Details</h4>
              <div className="input_group">
                <div className="input_box">
                  <input type="tel" placeholder="Card Number 1111-2222-3333-4444" required />
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input type="tel" placeholder="Card CV 632" required />
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input type="number" placeholder="Exp Month" required />
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input type="number" placeholder="Exp Year" required />
                </div>
              </div>
              <div className="input_box">
                <input type="number" placeholder="Enter Amount" required />
              </div>
              <div className="input_group">
                <div className="input_box">
                  <button type="submit">Pay Now</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
