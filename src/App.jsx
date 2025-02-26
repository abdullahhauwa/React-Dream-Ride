// import { useState } from 'react'
// import React from "react";

import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Fleet from "./pages/Fleet.jsx";
// import BookForm from "./components/bookForm.jsx";
import Features from "./pages/Features.jsx";
import Book from "./pages/Book.jsx";
// import Download from "./pages/Download.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./pages/Services.jsx";
import Faq from "./pages/Faq.jsx";
import Testimonials from "./pages/Testimonials.jsx";
// import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
