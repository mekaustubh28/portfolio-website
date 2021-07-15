import React from 'react'
import "./project.css"
import Footer from "../Footer/footer"
import portfolio from "../statics/portfolio.png"
import Edification from "../statics/edification.png"
import ISTE from "../statics/iste.png"
import Peddlers from "../statics/peddlers.png"


const Projects = [
  {
    name: 'Edification',
    skills: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/mekaustubh28/Edification',
    website: 'https://mekaustubh28.github.io/Edification/index.html',
    image: Edification,
    desc: 'Sample website which provide free mock test.',
  },
  {
    name: 'ISTE',
    skills: ['Gatsby', 'Styled-Component'],
    code: 'https://github.com/istenith/istenith.github.io',
    website: 'https://www.istenith.com/',
    image: ISTE,
    desc: 'My Society website, I contributed to it.',
  },
  {
    name: 'Peddlers',
    skills: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/mekaustubh28/html-assassins',
    website: 'https://mekaustubh28.github.io/html-assassins/',
    image: Peddlers,
    desc: 'Website for my front end Challenge.',
  },
  {
    name: 'Portfolio',
    skills: ['React', 'css', 'javascript'],
    code: 'https://github.com/mekaustubh28/portfolio',
    website: 'https://mekaustubh28.github.io/Edification/index.html',
    image: portfolio,
    desc: 'My Portfolio website.',
  },
]


export default function Project() {

  return (
    <div className="project-container">
      <div className="backgroundProject" style={{ position: "fixed", zIndex: -9 }}></div>
      <div className="project">
        <div className="title-project">
          <h1>Selected Projects<span>.</span></h1>
        </div>
        <div className="projects">
          {Projects.map((value, index) => {
            return (
              <a className="project" id={value.name} key={index}>
                <img src={value.image} className={value.name} alt="projectImage" />
                <div className="details">
                  <div className="projectName">
                    <h1>{value.name}</h1>
                    {
                      value.skills.map((skill, i) => {
                        return (
                          <span>
                            <span>{skill}</span><span className="nextCircle"></span>
                          </span>)
                      })
                    }
                    <br></br>
                    <p className="desc">{value.desc}</p>
                  </div>
                  <div className="projectLinks">
                    <a href={value.code} className="link" target="_blank" rel="noreferrer">View Code</a><br></br><br></br><br></br>
                    <a href={value.website} className="link" target="_blank" rel="noreferrer">Visit Website</a>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}