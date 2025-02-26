import React from "react";
import ServiceImage from "../assets/images/service-section-image.jpg";

const services = () => {
  return (
    <div>
      <section className="customer-service" id="services">
        <div className="image-container">
          <img src={ServiceImage} alt="Luxury Car" />
        </div>
        <div className="text-container">
          <h2>
            Superior <br /> Customer Service
          </h2>
          <p>
            Experience exotic car rentals from the brand known for award-winning
            customer service. Our goal is to meet your needs and exceed your
            expectations. We'll even deliver and collect your exotic vehicle at
            your convenience.
          </p>
          <button className="rent-a-car">Rent a Car</button>
        </div>
      </section>
    </div>
  );
};

export default services;
