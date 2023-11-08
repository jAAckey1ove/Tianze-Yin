import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import{BiSolidMessageAltDetail} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href = '#' onClick = {()=> setActiveNav('#')} className = {activeNav === '#' ? 'active': ''}>Home</a>
      <a href = '#about' onClick = {()=> setActiveNav('#about')} className = {activeNav ==='#about' ? 'active': ''}>About</a>
      <a href = '#experience' onClick = {()=> setActiveNav('#experience')} className = {activeNav ==='#experience' ? 'active': ''}>Abilities</a>
      <a href = '#services' onClick = {()=> setActiveNav('#services')} className = {activeNav ==='#services' ? 'active': ''}>Curriculars</a>
      <a href = '#portfolio' onClick = {() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active':''}>Accomplishments</a>
      <a href = '#Testimonials' onClick = {()=> setActiveNav('#Testimonials')} className = {activeNav ==='#contact' ? 'active': ''}>Testimonials</a>
    </nav>
  )
}

export default Nav