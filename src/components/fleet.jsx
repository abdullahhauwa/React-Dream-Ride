import React from 'react'

const fleet = () => {
  return (
    <div>
{/* Begining Of Vehicle Fleet Section */}
<section id="Cars">
  <div className="car-fleet">
    <h1><strong>Our Vehicle Fleet</strong></h1>
    <p>We provide our customers with the most incredible driving emotions <br />
      That's why we have only world-class cars in our fleet.</p>
    <nav className="retard">
      <ul>
        <li className="premium"><a href="#premium-gallery">Premium</a></li>
        <li className="luxury"><a href="#luxury-gallery">Luxury</a></li>
        <li className="economic"><a href="#economic-gallery">Economic</a></li>
        <li className="suv"><a href="#suv-gallery">SUV</a></li>
        <li className="sports"><a href="#sports-gallery">Sports</a></li>
      </ul>
    </nav>
    <div className="car-galleries">
      <div id="premium-gallery" className="car-gallery">
        <img src="https://i.pinimg.com/736x/a3/ad/4e/a3ad4e0e2358d1b9eee4971329d74208.jpg" alt="Car 1" />
        <img src="https://i.pinimg.com/736x/cf/d4/65/cfd46514707dcf6c5f9d79b987535b87.jpg" alt="Car 2" />
        <img src="https://i.pinimg.com/736x/f5/55/7a/f5557a84bc333603f9133e4a8794b7c9.jpg" alt="Car 3" />
        <img src="https://i.pinimg.com/736x/b6/96/ba/b696ba566bf7082a264258194f960610.jpg" alt="Car 4" />
        <img src="https://i.pinimg.com/736x/76/d5/80/76d580fb760ff3cf355fe8c661f968ca.jpg" alt="Car 5" />
        <img src="https://i.pinimg.com/736x/f8/62/a8/f862a89865533df4ec14c8ee9c845c5d.jpg" alt="Car 6" />
        <img src="https://i.pinimg.com/736x/13/d9/88/13d988b9b361a6a3c59dbac0c504518d.jpg" alt="Car 7" />
        <img src="https://i.pinimg.com/736x/b4/52/45/b4524554bccddcbd5f00425672b073e5.jpg" alt="Car 8" />
      </div>
      <div id="luxury-gallery" className="car-gallery" style={{display: 'none'}}>  
        <img src="https://i.pinimg.com/736x/54/67/bb/5467bb0b209890dff10830367f496416.jpg" alt="Car 1" />
        <img src="https://i.pinimg.com/736x/d8/bd/44/d8bd44f8f2f3407ab182a96022fe6766.jpg" alt="Car 2" />
        <img src="https://i.pinimg.com/736x/9d/5a/4a/9d5a4a871f21b5461536f484f62d8f93.jpg" alt="Car 3" />
        <img src="https://i.pinimg.com/736x/02/c8/13/02c813dccb64d4a01734103ccda5baf7.jpg" alt="Car 4" />
        <img src="https://i.pinimg.com/736x/62/20/81/6220816980a4b2ddccbaab16c10e5bc3.jpg" alt="Car 5" />
        <img src="https://i.pinimg.com/736x/c4/03/f4/c403f4ba18fb7299d3f32350ec083ead.jpg" alt="Car 6" />
        <img src="https://i.pinimg.com/736x/62/6f/42/626f42fe890a0a8425b658471c76fceb.jpg" alt="Car 7" />
        <img src="https://i.pinimg.com/736x/26/20/84/262084fab128858e01149e5fc594aae4.jpg" alt="Car 8" />
      </div>
      <div id="economic-gallery" className="car-gallery" style={{display: 'none'}}>
        <img src="https://i.pinimg.com/736x/93/c1/10/93c110c4c1d777737415530935ae30c3.jpg" alt="Car 1" />
        <img src="https://i.pinimg.com/736x/3d/85/9d/3d859daca0e3b9d99d61448ecd378b11.jpg" alt="Car 2" />
        <img src="https://i.pinimg.com/736x/78/67/15/7867152abd5df398b2d179227f94bf2e.jpg" alt="Car 3" />
        <img src="https://i.pinimg.com/736x/8c/87/38/8c8738de604c4a906354b5807b875209.jpg" alt="Car 4" />
        <img src="https://i.pinimg.com/736x/6d/ab/b9/6dabb94a57709126c2f92f0acc03e288.jpg" alt="Car 5" />
        <img src="https://i.pinimg.com/736x/82/56/56/825656817cccb29fe26a36ab9403536f.jpg" alt="Car 6" />
        <img src="https://i.pinimg.com/736x/dc/27/1b/dc271b771e9f6d9eff1b71c7f1fa44b7.jpg" alt="Car 7" />
        <img src="https://i.pinimg.com/736x/fe/93/47/fe9347aa0323a709a7d8a4a497c96623.jpg" alt="Car 8" />
      </div>
      <div id="suv-gallery" className="car-gallery" style={{display: 'none'}}>
        <img src="https://i.pinimg.com/736x/03/e2/ea/03e2ea829eec798cbef8ba1289a9e803.jpg" alt="Car 1" />
        <img src="https://i.pinimg.com/736x/31/4d/9c/314d9cb97b3e053aabd8c77ce0bada44.jpg" alt="Car 2" />
        <img src="https://i.pinimg.com/736x/63/fa/32/63fa324c4c44a685e412f1794e6ece0d.jpg" alt="Car 3" />
        <img src="https://i.pinimg.com/736x/20/b4/fd/20b4fd3bac7f2dafb74e3f449f7f1973.jpg" alt="Car 4" />
        <img src="https://i.pinimg.com/736x/41/42/1b/41421b51349a9c5b5309c25a1c05329c.jpg" alt="Car 5" />
        <img src="https://i.pinimg.com/736x/17/a1/3d/17a13d4e88c50c683c2dd817eeb685a2.jpg" alt="Car 6" />
        <img src="https://i.pinimg.com/736x/a8/01/71/a80171b3a73200f3cc931ca3e51b8871.jpg" alt="Car 7" />
        <img src="https://i.pinimg.com/736x/50/9d/c5/509dc55c835137d34416514d1f9e9cd2.jpg" alt="Car 8" />
        {/* Add images here */}
      </div>
      <div id="sports-gallery" className="car-gallery" style={{display: 'none'}}>
        <img src="https://i.pinimg.com/736x/94/51/93/9451933b22c10092001cc4dd340e934e.jpg" alt="Car 1" />
        <img src="https://i.pinimg.com/736x/0d/2b/13/0d2b13ee48276e34e2f3e5fd79706cd4.jpg" alt="Car 2" />
        <img src="https://i.pinimg.com/736x/91/4f/65/914f65915c1b326fddec00427cbe8079.jpg" alt="Car 3" />
        <img src="https://i.pinimg.com/736x/c6/56/54/c656542b0843de0bb16f588ea84ab080.jpg" alt="Car 4" />
        <img src="https://i.pinimg.com/736x/cd/dd/9e/cddd9e6068506fb821bab622dc108f8b.jpg" alt="Car 5" />
        <img src="https://i.pinimg.com/736x/b7/3f/75/b73f75c17fafa9af256f5e0536c1fefa.jpg" alt="Car 6" />
        <img src="https://i.pinimg.com/736x/b9/5c/e9/b95ce90e02612aa55404e608c1a9adb9.jpg" alt="Car 7" />
        <img src="https://i.pinimg.com/736x/ea/6d/16/ea6d164e74ec4ce781467da62afd88da.jpg" alt="Car 8" />
        {/* Add images here */}
      </div>
    </div>
    {/*  End Of Vehicle Fleet Section*/}
  </div></section>


    </div>
  )
}

export default fleet