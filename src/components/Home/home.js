import React, { useState, useEffect } from 'react';
import Styling from "./home.css";
import { Link } from "react-router-dom";


export default function Home() {

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.scrollY;
  //   setScrollPosition(position);
  //   console.log(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // this.setState({ x:"" + e.clientX * 100 / window.innerWidth + "%", y:"" + e.clientY * 100 / window.innerHeight + "%" });

  const [Transform, setTransform] = useState("")

  const backgroundMove = (e) => {
    setTransform("translate(" + e.clientX * -10 / window.innerWidth + "%," + e.clientY * -10 / window.innerHeight + "%)" );
    console.log(Transform);
  }

  return (
    <>
      <div className="background" onMouseMove={backgroundMove} style={{position:"absolute",transform:Transform,zIndex:-9}}>
      {/* <span className="topleft">👇You are great!</span><span className="bottomleft">👉You are Awesome!</span><span className="bottomright">🎁 You just got the hidden Treasure<a>Hidden</a>!</span> */}
      </div>
      <div className="container">
        <div className="info">
          <p>Hello,I'm Kaustubh Verma</p>
          <h1>Web Developer and <br></br> Designer</h1>
          <p>I love to develop and design beautiful website, <br></br> with help of awesome animations and UI effects. </p>
          <br></br>
          <a className="contact" href="#">Let's Talk</a>
        </div>
          <a className="down"><span></span></a>
      </div>
    </>
  );
}
