import FirstImage from "../assets/images/Review1.png";
import SecondImage from "../assets/images/Review2.png";
import ThirdImage from "../assets/images/Review3.png";

const testimonials = () => {
  return (
    <div id="testimonial">
      {/* <section className="testimonials-section">
    <div className="testimonials">
      <header className="header-section">
        <h2>TESTIMONIALS</h2>
      </header>
      <div id="testimonials">
        <img src="testimonial 2.jpg" alt="fashion style" width="80px" height="80px" />
        <header className="headings"><h4>JAMES D</h4></header>
        <p>I was impressed by the wide selection of cars at DreamRide.
          The staff were helpful and didn't pressure me into making a decision.
          I found the perfect car for my budget and needs, and I'm thrilled 
          with my purchase.<br />
          <button>View More</button>
        </p></div>
      <div id="testimonials">
        <img src="testimonial 1.jpg" alt="jfif fashion" width="80px" height="80px" />
        <header className="headings">  <h4>DAVID K</h4></header>
        <p>I was a bit skeptical about buying a used car, but DreamRide
          made the process easy for me. They were transparent 
          about the car's history and condition, and they gave me a great deal.  
          I'm so happy with my purchase.<br />
          <button>View More</button>
        </p></div>
      <div id="testimonials">
        <img src="testimonial 3.jpg" alt="fashion test" width="80px" height="80px" />
        <header className="headings"> <h4>MICHEAL T</h4></header>
        <p>I purchased a car from DreamRide a few months ago, and I've 
          loved it ever since. The staff were helpful and friendly,
          and they made the buying process easy for customers. I would definitely 
          be happy to tell others.<br />
          <button>View More</button>
        </p></div>
    </div>
  </section> */}

      <section className="testimonials-section">
        <header className="header-section">
          <h2>Testimonials</h2>
        </header>
        <div className="testimonials-cards">
          <div id="testimonials">
            <img
              src={FirstImage}
              alt="fashion style"
              width="100px"
              height="200px"
            />
            <header className="headings">
              <h4>Angel Francis</h4>
            </header>
            <p>
              I was impressed by the wide selection of cars at DreamRide. The
              staff were helpful and didn&apos;t pressure me into making a
              decision.
              <br />
              {/* <button>View More</button> */}
            </p>
          </div>
          <div id="testimonials">
            <img
              src={SecondImage}
              alt="jfif fashion"
              width="100px"
              height="200px"
            />
            <header className="headings">
              {" "}
              <h4>Mubira Ali</h4>
            </header>
            <p>
              I was a bit skeptical about buying a used car, but DreamRide made
              the process easy for me. They were transparent.
              <br />
              {/* <button>View More</button> */}
            </p>
          </div>
          <div id="testimonials">
            <img
              src={ThirdImage}
              alt="fashion test"
              width="100px"
              height="200px"
            />
            <header className="headings">
              {" "}
              <h4>James Faisal</h4>
            </header>
            <p>
              I purchased a car from DreamRide a few months ago, and I&apos;ve
              loved it ever since. The staff were helpful and friendly.
              <br />
              {/* <button>View More</button> */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default testimonials;
