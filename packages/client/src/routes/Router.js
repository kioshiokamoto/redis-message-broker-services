import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import Survey from "../pages/Survey"
import Navbar from "../components/Navbar";
import Events from "../pages/Events";

export default function SourceRouter () {
  return (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path = "/" component = {PageOne} />
                <Route exacr path = "/pageTwo"  component = {PageTwo}/>
                <Route exacr path = "/Survey"  component = {Survey}/>
                <Route exacr path = "/events"  component = {Events}/>
                <Redirect to="/" />

            </Switch>
        </div>
    </Router>
  );
};
