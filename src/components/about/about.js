import React from 'react'
import "./about.css"
import myPhoto from "../statics/2.jpg"
import halfPic from "../statics/half.jpg"
import Icons from './Icons'
import Footer from '../Footer/footer'

export default function About() {

  var date = new Date();
  var Year = date.getFullYear() - 2020;

  const stats = ['Front-End (Next JS)', 'Back-End (Django)', 'Web3/Blockchain', 'StackOverFlow/ChatGPT']

  return (
    <>
      <div className="container-about">
        <div className="top-container">
          <div className="aboutLeft about">
            <div className="moreInfo profile">
              <h1>MORE ABOUT ME<span className="dot">.</span></h1>
              <p>--Lets open my book--</p>
              <h3>Final year Grad, from <a href="https://nith.ac.in/" target="_blank" style={{ color: '#cf000f' }} rel="noreferrer">NIT,Hamirpur</a> Pursuing BTech in Mathematics and Computing.  My Pronouns are Web3/ETH. President of Society named <a href="https://www.istenith.com/" target="_blank" style={{ color: '#cf000f' }} rel='noreferrer'>ISTE, NITH Chapter</a>.</h3>
              <br></br>
              <h3> <span style={{ color: '#cf000f' }}>Current Profession:</span> Web3 and Backend Developer @ <span><a href="https://www.athenaconsulting.io/" target="_blank" rel="noreferrer">Athena Consulting</a>.</span></h3>
              <p>I love to talk to different people. Over a year i have tried to boost my skills and learn new stuff. if i am not at my desk, you will find me playing badminton or sleeping.</p>
              <br></br>
              <p style={{ color: 'white' }}>Need me for a Project?</p>
              <br></br>
              <a className="contact" href="/contact">Let's Talk</a><span style={{ margin: '2%' }}></span>
              <div className="extrafora"></div>
              <a className="contact" href="https://drive.google.com/drive/u/1/folders/175SsoLDHANsslXkoXLsHrD2DHdRdWL6Z" target="_blank" rel="noreferrer">My Resume</a>
            </div>
          </div>
          <div className="aboutRight about">
            <div className="image profile">
              <img src={myPhoto} alt="MyPhoto" />
              <p>Lol my best photo, that to I am not smiling</p>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="time-skill" >
            <div className="year">
              <h1>{Year}<span>.</span></h1>
              <p>Year Experience</p>
            </div>
          </div>
          <div className="time-skill skills" style={{ margin: 0 }}>
            <h1>SKILLS<span style={{ color: '#cf000f' }}>.</span></h1>
            {stats.map((value, index) => {
              return (
                <div className="eachSkill" key={index}>
                  <h3>{value}</h3>
                </div>
              )
            })}
            <p>All these are for names, My Best Skill is Demand and Supply. <br></br></p>
          </div>
        </div>
        <div className="Third-container">
          <img className="halfPic" src={halfPic} alt='halfPic' />
          <div class="randomFacts">
            <h1>Random Facts<span>.</span></h1>
            <ul>
              <li>I Play Badminton a Lot.</li>
              <li>I Love to eat Food.</li>
              <li>Watch Zombie Movies/Anime.</li>
              <li>60% search, 20% code, 20% think</li>
            </ul>
          </div>
        </div>
        <div className="Fourth-Container">
          <div className="organizations">
            <h1>Work With<span>.</span></h1>
            <p>Its Been a Year and I very fortunate to work with Organizations</p>
          </div>
          <div className="icons">
            <Icons />
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  )
}