import React from "react";
import { BrowserRouter, Redirect, Link, Route, Switch } from "react-router-dom";
import Styling from "./App.css"
import Error404 from "./404/error404";
import About from "./about/about";
import Blog from "./blog/blog";
import Home from "./Home/home"
import Navbar from "./navbar/navbar";
import Contact from "./Contact/contact"
import Project from "./Project/project";

export default function App() {
  
  return (
    <div className="most-main-container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home">
            <Redirect to="/"></Redirect>
          </Route>  
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/blog" component={Blog} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
