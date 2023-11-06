import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id = 'services'>
      <h5>What I know</h5>
      <h2>My Curriculars</h2>
      <div className = 'container services__container'>
        <article className = 'service'>
          <div className = 'service__head'>
            <h3>Music</h3>
          </div>
          <ul className = 'service__list'>
          <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I have played piano for 10+ years</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I'm piano RCM lvl.10</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Winnipeg Music Festival piano honour roll</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I'm keyboard in junior jazz band</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I'm clarinet in senior jazz band</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Contributed great music at Tribute dinner</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I'm clarinet in concert band</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Performed great music at school concert</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I'm clarinet in chamber wind ensemble</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Performed in many events and festivals</p>
            </li>
          </ul>
        </article>

        <article className = 'service'>
          <div className = 'service__head'>
            <h3>Programming</h3>
          </div>
          <ul className = 'service__list'>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I started to code in grade 8</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>C++ was the first coding language I learned</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>Participated in an Unity game with my friend</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I have learned Python since grade 9</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I joined Coding club in my school</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I was interested in solving coding questions</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I participated in coding contest and achieved top 25%</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I started to learn web-development in grade 10</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I can code with HTML, Javascrip and CSS</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I made another program for my school called Pauly</p>
            </li>
          </ul>
        </article>

        <article className = 'service'>
          <div className = 'service__head'>
            <h3>Sports</h3>
          </div>
          <ul className = 'service__list'>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I participated in school basketball team in grade 6</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I started to play football in grade 8 for Charleswood Broncos</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>We went to the final and I was awarded the best offense linemen</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I joined St.James Seals swimming club</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I joined school junior varsity football team in grade 10</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I was a defensive back but we stopped at the semifinal game</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I joined school varsity football team in grade 11</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service__list-icon'/>
              <p>I became a linebacker but we were disqualified again at the semifinal game</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services