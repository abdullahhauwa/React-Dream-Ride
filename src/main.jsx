import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
// import Hero from './pages/hero.jsx'
// import About from './pages/about.jsx'
// import Faq from './pages/faq.jsx'
// import Features from './pages/features.jsx'
// import Fleet from './pages/fleet.jsx'
// import Footer from './pages/footer.jsx'
// import Testimonials from './pages/testimonials.jsx'
// import Services from './pages/services.jsx'
// import {BrowserRouter, Routes, Route} from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
