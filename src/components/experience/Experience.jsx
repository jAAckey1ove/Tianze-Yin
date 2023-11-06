import React from 'react'
import './Experience.css'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {IoLogoReact} from 'react-icons/io5'
import {FaLanguage} from 'react-icons/fa'
import {TbMathPi} from 'react-icons/tb'
import {GiMechanicalArm} from 'react-icons/gi'
import {PiHandsPrayingDuotone} from 'react-icons/pi'
import {GiBlackBook} from 'react-icons/gi'
import {IoCreateOutline} from 'react-icons/io5'
import {BiCrown} from 'react-icons/bi'
import {AiOutlineTeam} from 'react-icons/ai'
import {GoCommentDiscussion} from 'react-icons/go'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaHandHoldingHeart} from 'react-icons/fa6'
import {PiFootballDuotone} from 'react-icons/pi'
import {PiSoccerBallThin} from 'react-icons/pi'
import {FaSwimmer} from 'react-icons/fa'
import {PiPianoKeysDuotone} from 'react-icons/pi'
import {GiClarinet} from 'react-icons/gi'
import {BiCodeAlt} from 'react-icons/bi'
import {FaAward} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {BiSolidChess} from 'react-icons/bi'
import {TiPrinter} from 'react-icons/ti'


const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What I can do</h5>
      <h2>My Abilities</h2>
      <div className = 'container experience__container'>
        <div className = 'academic__abilities'>
          <h3>Academic Abilities</h3>
          <div className = 'experience__content'>
            <article className = 'experience__details'>
            <FaLanguage className = 'experience__details-icon'/>
              <div>
                <h4>Bilingual</h4>
                <small className = 'text-light'>English and Chinese</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <TbMathPi className = 'experience__details-icon'/>
              <div>
                <h4>Mathematics</h4>
                <small className = 'text-light'>1st in Manitoba</small>
              </div>
            </article>
            <article className = 'experience__details'>
            <GiMechanicalArm className = 'experience__details-icon'/>
              <div>
                <h4>Physics</h4>
                <small className = 'text-light'>skilled calculation</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <IoLogoReact className = 'experience__details-icon'/>
              <div>
                <h4>Chemistry</h4>
                <small className = 'text-light'>Compound Master</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <PiHandsPrayingDuotone className = 'experience__details-icon'/>
              <div>
                <h4>Religion</h4>
                <small className = 'text-light'>Catholic Worship</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <GiBlackBook className = 'experience__details-icon'/>
              <div>
                <h4>History</h4>
                <small className = 'text-light'>Eastern and Western</small>
              </div>
            </article>
          </div>
        </div>

        <div className = 'social__abilities'>
        <h3>Social Skills</h3>
          <div className = 'experience__content'>
            <article className = 'experience__details'>
              <BiCrown className = 'experience__details-icon'/>
              <div>
                <h4>Leadership</h4>
                <small className = 'text-light'>Competent leader</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <IoCreateOutline className = 'experience__details-icon'/>
              <div>
                <h4>Creativity</h4>
                <small className = 'text-light'>Imaginative mind</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <FaHandHoldingHeart className = 'experience__details-icon'/>
              <div>
                <h4>Selfless</h4>
                <small className = 'text-light'>Willing to contribute</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <AiOutlineTeam className = 'experience__details-icon'/>
              <div>
                <h4>Teamwork</h4>
                <small className = 'text-light'>Cooperate with others</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <HiOutlineLightBulb className = 'experience__details-icon'/>
              <div>
                <h4>Intelligent</h4>
                <small className = 'text-light'>Problem solver</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <GoCommentDiscussion className = 'experience__details-icon'/>
              <div>
                <h4>Engaging</h4>
                <small className = 'text-light'>Open to discussion</small>
              </div>
            </article>
          </div>

        </div>
        <div className = 'academic__abilities'>
          <h3>Sports and Arts</h3>
          <div className = 'experience__content'>
            <article className = 'experience__details'>
            <PiFootballDuotone className = 'experience__details-icon'/>
              <div>
                <h4>Football</h4>
                <small className = 'text-light'>LineBacker 1</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <PiSoccerBallThin className = 'experience__details-icon'/>
              <div>
                <h4>Soccer</h4>
                <small className = 'text-light'>Intramual</small>
              </div>
            </article>
            <article className = 'experience__details'>
            <FaSwimmer className = 'experience__details-icon'/>
              <div>
                <h4>Swimming</h4>
                <small className = 'text-light'>Seals Swimming club</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <PiPianoKeysDuotone className = 'experience__details-icon'/>
              <div>
                <h4>Piano</h4>
                <small className = 'text-light'>RCM lvl.10</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <GiClarinet className = 'experience__details-icon'/>
              <div>
                <h4>Clarinet</h4>
                <small className = 'text-light'>Carried the band</small>
              </div>
            </article>
          </div>
        </div>

        <div className = 'academic__abilities'>
          <h3>Other abilities</h3>
          <div className = 'experience__content'>
            <article className = 'experience__details'>
            <BiCodeAlt className = 'experience__details-icon'/>
              <div>
                <h4>Coding</h4>
                <small className = 'text-light'>5+ coding language</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <FaAward className = 'experience__details-icon'/>
              <div>
                <h4>Waterloo contests</h4>
                <small className = 'text-light'>Top 25% in every contest</small>
              </div>
            </article>
            <article className = 'experience__details'>
            <FaGithub className = 'experience__details-icon'/>
              <div>
                <h4>Web-development</h4>
                <small className = 'text-light'>3+ years</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <BiSolidChess className = 'experience__details-icon'/>
              <div>
                <h4>Chess</h4>
                <small className = 'text-light'>Top in the school</small>
              </div>
            </article>
            <article className = 'experience__details'>
              <TiPrinter className = 'experience__details-icon'/>
              <div>
                <h4>3D print</h4>
                <small className = 'text-light'>Made many models</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience