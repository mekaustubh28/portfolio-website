import React from "react";
import { BrowserRouter, Redirect, Link, Route, Switch } from "react-router-dom";
import Styling from "./App.css"
import Error404 from "./404/error404";
import About from "./about/about";
import Blog from "./blog/blog";
import Home from "./Home/home"
import Navbar from "./navbar/navbar";
import Contact from "./Contact/contact"

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/home">
            <Redirect to="/"></Redirect>
          </Route>  
          <Route  path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
