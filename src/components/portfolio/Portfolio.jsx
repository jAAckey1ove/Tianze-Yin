import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/JetEngine.avif'
import img2 from '../../assets/JetEngine.avif'
import img3 from '../../assets/JetEngine.avif'
import img4 from '../../assets/JetEngine.avif'
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
          <h3>put the achivement here</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img1} alt = ''/>
          </div>
          <h3>put the achivement here</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img1} alt = ''/>
          </div>
          <h3>put the achivement here</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img1} alt = ''/>
          </div>
          <h3>put the achivement here</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img1} alt = ''/>
          </div>
          <h3>put the achivement here</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
        <article className = 'portfolio__item'>
          <div className = 'portfolio__item-image'>
            <img src={img1} alt = ''/>
          </div>
          <h3>put the achivement here</h3>
          <div className = 'portfolio__item-cta'>
            <a href = '' className = 'btn' target = '_blank'>Learn More</a>
            <a href = '' className = 'btn btn-primary' target = '_blank'>Learn More</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio