import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";


export default function Home() {

  return (
    <>
      <div className="backgroundHome"style={{position:"fixed",zIndex:-9}}>
      {/* <span className="topleft">👇You are great!</span><span className="bottomleft">👉You are Awesome!</span><span className="bottomright">🎁 You just got the hidden Treasure<a>Hidden</a>!</span> */}
      </div>
      <div className="home">
        <div className="info ">
          <p>Hello,I'm Kaustubh Verma</p>
          <h1>Web Developer and <br></br> Designer<span>.</span></h1>
          <p>I enjoy creating and designing attractive websites,<br></br> with help of awesome animations and UI effects. </p>
          <br></br>
          <Link className="contact" to="/contact">Let's Talk</Link><span style={{margin:'2%'}}>or</span>
          <Link className="contact" to="/project">View Work</Link>
        </div>
        {/* eslint-disable-next-line */}
         <a className="down"><span></span></a>
      </div>
    </>
  );
}
