import React, { useState } from "react";
import PaymentForm from "../components/PaymentForm";

const BookForm = ({ car, onClose }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleBookNow = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    setShowPayment(true);
  };

  return (
    <div>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {!showPayment ? (
          <form onSubmit={handleBookNow}>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="car-type">Car Type:</label>
                <select id="car-type" name="car-type">
                  <option value="economy">Economy</option>
                  <option value="compact">Compact</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="standard">Standard</option>
                  <option value="full-size">Full-size</option>
                  <option value="luxury">Luxury</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pick-up-location">Pick-up Location:</label>
                <input type="text" id="pick-up-location" name="pick-up-location" />
              </div>
              <div className="form-group">
                <label htmlFor="pick-up-date">Pick-up Date:</label>
                <input type="date" id="pick-up-date" name="pick-up-date" />
              </div>
              <div className="form-group">
                <label htmlFor="pick-up-time">Pick-up Time:</label>
                <input type="time" id="pick-up-time" name="pick-up-time" />
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" name="destination" />
              </div>
              <div className="form-group">
                <label htmlFor="drop-off-date">Drop-off Date:</label>
                <input type="date" id="drop-off-date" name="drop-off-date" />
              </div>
              <div className="form-group">
                <label htmlFor="drop-off-time">Drop-off Time:</label>
                <input type="time" id="drop-off-time" name="drop-off-time" />
              </div>

              <button type="submit">Book Now</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        ) : (
          <PaymentForm onClose={() => setShowPayment(false)} />
        )}
      </div>
    </div>
  );
};

export default BookForm;

