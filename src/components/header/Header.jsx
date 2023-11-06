import React from 'react'
import './Header.css'
import CTA from './CTA'
import PicofTianze from '../../assets/PicofTianze.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello, I am</h5>
        <h1>Tianze Yin</h1>
        <h5 className = 'text-light'>The genius</h5>
        <CTA></CTA>
        <HeaderSocials/>
        <div className='me'>
          <img src = {PicofTianze} alt = 'me'/>
        </div>
        <a href = '#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header