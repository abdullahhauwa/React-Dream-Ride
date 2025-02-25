import React from 'react'

const faq = () => {
  return (
    <div>
<section className="FAQ-section">
  <h1>Frequently Asked Questions</h1>
  <div className="faq-container">
    <div className="faq-item">
      <button className="faq-question">
        What is preventative maintenance?
        <span className="arrow">▼</span>
      </button>
      <div className="faq-answer">
        <p>It's all about regular maintenance to ensure your vehicle 
          is running smoothly and safely.This includes things like regular 
          oil changes, tune-ups, and checking your brakes and tires.</p>
      </div>
    </div>
    {/* <div class="faq-container"> */}
    {/* <h1>Frequently Asked Questions</h1> */}
    <div className="faq-item">
      <button className="faq-question">
        How do I know when I need a tune-up? 
        <span className="arrow">▼</span>
      </button>
      <div className="faq-answer">
        <p>You might notice your vehicle is running rough or the check engine light 
          comes on. It's always a good idea to check your owner's manual or consult 
          with a professional to determine the best schedule for your vehicle.</p>
      </div>
    </div>
    {/* <div class="faq-section"> */}
    {/* <div class="faq-container"> */}
    {/* <h1>Frequently Asked Questions</h1> */}
    <div className="faq-item">
      <button className="faq-question">
        How do I know when I need a tune-up? 
        <span className="arrow">▼</span>
      </button>
      <div className="faq-answer">
        <p>You might notice your vehicle is running rough or the check engine light 
          comes on. It's always a good idea to check your owner's manual or consult 
          with a professional to determine the best schedule for your vehicle.</p>
      </div>
    </div>
    {/* <div class="faq-container"> */}
    {/* <h1>Frequently Asked Questions</h1> */}
    <div className="faq-item">
      <button className="faq-question">
        What do I do if my vehicle starts to overheat? 
        <span className="arrow">▼</span>
      </button>
      <div className="faq-answer">
        <p>If your vehicle starts to overheat, pull over to a safe location and turn off the engine. 
          Do not attempt to remove the radiator cap or check the hoses, as this can cause serious 
          injury. Instead, have your vehicle towed to a repair shop for inspection.</p>
      </div>
    </div>        
  </div>
</section>

    </div>
  )
}

export default faq
