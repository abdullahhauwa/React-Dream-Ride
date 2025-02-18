import React from 'react'

const download = () => {
  return (
    <div>
<div>
  {/* Begining of Download Section */}
  <section id="download-app">
    <div className="download-app-content">
      <h1>Modern App</h1>
      <p> We developed a simple and functional app <br />
        it is built in such a way as to simplify the  <br />
        problem of the car selection <br />
        and rental process view the location,<br />
        statement and other information about <br />
        each of the vehicles in one click </p>
      <div className="download-btns">
        <div className="btn">
          <button><i className="fa fa-download" /><a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank">Download on Play Store</a></button>
          <button><i className="fa fa-download" /><a href="https://www.apple.com/app-store/" target="_blank">Download on App Store</a></button>
        </div>
      </div>
    </div>
    <img className="download-app-img" src="phonep.jpg" alt="Download App Image" />
  </section>
  {/* End of Download Section */}<br />
</div>

    </div>
  )
}

export default download