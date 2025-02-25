// import { useState } from 'react'
import React from 'react'
import Hero from './pages/hero'
import Fleet from './pages/fleet'
import Features from './pages/features'
import Book from './pages/book'
import Download from './pages/download'
import Footer from './components/footer'
import Services from'./pages/services'
import About from './pages/about'
import Faq from './pages/faq'
import Testimonials from './pages/testimonials'
import {BrowserRouter, Routes, Route} from 'react-router'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Hero/>
    <About/>
    <Fleet/>
    <Services/>
    <Features/>
    <Testimonials/>
    <Faq/>
    <Footer/> */}
    <BrowserRouter>
    <Route path='/' element={<Hero/>}/>
    <Route path='/about' element={<About/>}/>
    </BrowserRouter>
    </>
  )
}

export default App
