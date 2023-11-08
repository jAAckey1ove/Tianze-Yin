import React from 'react'
import './Footer.css'
import {TbLetterP} from 'react-icons/tb'
import {BsInstagram} from 'react-icons/bs'
import {BsFillChatHeartFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href = "#" className = 'footer__logo'>Tianze Yin</a>
      <ul className = 'permalinks'>
        <li><a href = '#'>Home</a> </li>
        <li><a href = '#about'>About</a> </li>
        <li><a href = '#experience'>Experience</a> </li>
        <li><a href = '#services'>Services</a> </li>
        <li><a href = '#portfolio'>Portfolio</a> </li>
        <li><a href = '#contact'>Contact</a> </li>
      </ul>

      <div className = "footer__socials">
        <a href = "https://www.instagram.com/tianzeyin888/"><BsInstagram></BsInstagram></a>
        <a href = "https://www.stpauls.mb.ca"><TbLetterP/></a>
        <a href = 'mailto:yint25@gocrusaders.ca'><AiOutlineMail/></a>
      </div>
      <div className = 'lyf'>
        <a>This website is a rememberance of lyf</a>
      </div>
      <div className = 'footer__copyright'>
        <small>&copy; TianzeYin Profile. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer