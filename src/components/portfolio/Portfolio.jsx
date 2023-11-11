import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/Cayley honour roll.png'
import img2 from '../../assets/myprotofolio.png'
import img3 from '../../assets/Pualysceenshot.png'
import img4 from '../../assets/coming-soon-1.jpg'
import img5 from '../../assets/JetEngine.avif'
import img6 from '../../assets/JetEngine.avif'


const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>What I have done</h5>
      <h2>My Accompishment</h2>

      <div className = 'container portfolio__container'>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img1} alt = ''/>
          </div>
          <h3>Cayley math contest honur roll</h3>
          <div className = 'portfolio__item-cta'>
            <a href = 'https://www.cemc.uwaterloo.ca/contests/past_contests/2023/2023CayleyResults.pdf' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img3} alt = ''/>
          </div>
          <h3>"Digi text" program for the school</h3>
          <div className = 'portfolio__item-cta'>
          <a href = 'https://www.digitext.ca/#/' className = 'btn' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img3} alt = ''/>
          </div>
          <h3>"Pauly" website for the school</h3>
          <div className = 'portfolio__item-cta'>
            <a href = 'https://paulysphs.ca' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img2} alt = ''/>
          </div>
          <h3>I made my own Protofolio website</h3>
          <div className = 'portfolio__item-cta'>
            <a href = 'https://github.com/tianzeyin/Tianze-Yin' className = 'btn' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img4} alt = ''/>
          </div>
          <h3>It's coming soon!</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img4} alt = ''/>
          </div>
          <h3>It's coming soon!</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio