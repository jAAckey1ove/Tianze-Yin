import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <div className = "note">
        <p>Note: this website is still developing. It is the best to view it with full screen on your laptop or desktop. Please contact me if something went wrong.</p>
      </div>
        <Header />
        <Nav/>
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonials/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default App