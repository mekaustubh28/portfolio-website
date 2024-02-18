import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./404/error404";
import About from "./about/about";
import Blog from "./blog/blog";
import Home from "./Home/home";
import Navbar from "./navbar/navbar";
import Contact from "./Contact/contact";
import Project from "./Project/project";

export default function App() {
  return (
    <div className="most-main-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}
