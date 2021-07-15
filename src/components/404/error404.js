import React from 'react'
import Styling from './error404.css'
import sadGIf from "../statics/sad.gif"
import { Link } from "react-router-dom";
import Footer from '../Footer/footer'

export default function error404() {
  return (
    <div>
      <div className="error-container">
        <div className="message"> 
          <h1>OOPS!</h1>
          <h2>We can't seem to find the <br></br> page you're looking for.</h2>
          <h3>Error Code: 404</h3>
          <Link to="/">Back to Home Page</Link>
        </div>
        <div className="gif">
          <img src={sadGIf} alt="sad" width="350px"/>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      <Footer />
    </div>
  )
}