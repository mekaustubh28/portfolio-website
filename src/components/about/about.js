import React from 'react'
import "./about.css"
import myPhoto from "../statics/2.jpg"
import halfPic from "../statics/half.jpg"
import Icons from './Icons'
import Footer from '../Footer/footer'

export default function About() {

  var date = new Date();
  var Year = date.getFullYear() - 2020;

  const stats = ['Front-End (ReactJS)', 'Back-End (Django)', 'Figma', 'StackOverFlow']

  return (
    <>
      <div className="container-about">
        <div className="top-container">
          <div className="aboutLeft about">
            <div className="moreInfo profile">
              <h1>MORE ABOUT ME<span className="dot">.</span></h1>
              <p>--Lets open my book--</p>
              <h3>I am currently pursing my BTech from <a href="https://nith.ac.in/" target="_blank" style={{ color: '#cf000f' }} rel="noreferrer">NIT,Hamirpur</a>.I am a Python Developer, who loves to build dyanmic and responsive website. I am also member of <a href="https://www.istenith.com/" target="_blank" style={{ color: '#cf000f' }}>ISTE, NITH Chapter</a>.</h3>
              <br></br>
              <p>I love to talk to different people. Over a year i have tried to boost my skills and learn new stuff. if i am not at my desk, you will find me playing badminton or sleeping.</p>
              <br></br>
              <p style={{ color: 'white' }}>Need me for a Project?</p>
              <br></br>
              <a className="contact" href="/contact">Let's Talk</a><span style={{ margin: '2%' }}></span>
              <div className="extrafora"></div>
              <a className="contact" href="https://drive.google.com/file/d/1kIEb3vISwF3v6XIWe8rHqglMM8G-b-wC/view?usp=sharing" target="_blank" rel="noreferrer">My Resume</a>
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
          <div className="time-skill">
            <div className="year">
              <h1>{Year}<span>.</span></h1>
              <p>Year Experience</p>
            </div>
          </div>
          <div className="time-skill skills">
            {stats.map((value, index) => {
              return (
                <div className="eachSkill" key={index}>
                  <h3>{value}</h3>
                </div>
              )
            })}
          </div>
        </div>
        <div className="Third-container">
          <img className="halfPic" src={halfPic} />
          <div class="randomFacts">
            <h1>Random Facts<span>.</span></h1>
            <ul>
              <li>I Play Badminton a Lot.</li>
              <li>I Love to eat Food.</li>
              <li>Watch Zombie Movies</li>
              <li>60% search, 20% code, 20% think</li>
              <li>Beside all these I also try Graphic Designing</li>
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