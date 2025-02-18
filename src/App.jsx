// import { useState } from 'react'
import React from 'react'
import Hero from './components/hero'
import Fleet from './components/fleet'
import Features from './components/features'
import Book from './components/book'
import Download from './components/download'
import Footer from './components/footer'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Fleet/>
    <Features/>
    <Book/>
    <Download/>
    <Footer/>
    </>
  )
}

export default App
