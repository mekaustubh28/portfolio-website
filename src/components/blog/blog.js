import React from 'react'
import {Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Error404 from '../404/error404';
import Blog1 from './blog1';
import Blog2 from './blog2';

export default function Blog(){
    const { path } = useRouteMatch();
    return(
        <>
            <h1>Blog Section</h1>
            <Switch>
                <Route path={`${path}/blog1`}>
                    <Blog1 />
                </Route>
                <Route  path={`${path}/blog2`}>
                    <Blog2 />
                </Route>
                <Route  path={`${path}/*`}>
                    <Error404 />
                </Route>
            </Switch>
        </>
    )
}