import React from 'react'
import {BsInstagram} from  'react-icons/bs'
import {AiFillAlipayCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = 'https://www.instagram.com/tianzeyin888/' target = '_blank'><BsInstagram/></a>
        <a href = 'https://www.alipay.com' target = '_blank'><AiFillAlipayCircle/></a>

    </div>
  )
}

export default HeaderSocials