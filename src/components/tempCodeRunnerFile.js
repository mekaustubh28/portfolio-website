import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Error404 from "./404/error404";
import About from "./about/about";
import Blog from "./blog/blog";
import Home from "./Home/home";

export default function App() {
    return (
        <div>
            <h1>Render on all Pages</h1>
            <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link to="/blog/blog1">blog1</Link>
                    </li>
                    <li>
                        <Link to="/blog/blog2">blog2</Link>
                    </li>
                </ul>
            </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
