import React from 'react'
import './About.css'
import JetEngine from '../../assets/JetEngine.avif'
import {AiOutlineRead} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import {GiAmericanFootballPlayer} from 'react-icons/gi'


const About = () => {
  return (
    <section id = 'about'>
      <h2>About Me</h2>
      <div className = 'container, about__container'>
        <div className = 'about__me'>
          <div className = 'JetEngine'>
            <img src = {JetEngine} alt = 'About Image'/>
          </div>
        </div>

        <div className = 'about__content'>
          <div className = 'about__cards'>
            <article className = 'about__card'>
              <AiOutlineRead className = 'about__icons'/>
              <h5>Education</h5>
              <small>Diverse education</small>
            </article>
            <article className = 'about__card'>
              <FaAward className = 'about__icons'/>
              <h5>Experience</h5>
              <small>5+ coding languages</small>
            </article>
            <article className = 'about__card'>
              <GiAmericanFootballPlayer className = 'about__icons'/>
              <h5>Activities</h5>
              <small>Variety of sports and clubs</small>
            </article>
          </div>
          <p>
          I'm a student from St.Paul's High School who aims to be an engineer in the future. As a Chinese student who came to Canada in grade 6, I'm diversely educated and well-suited for math and physics. I'm always interested in coding and mechanics and ready to contribute to the world of engineering.
          </p>
          <a href = '#contact' className = 'btn btn-primary'>Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About