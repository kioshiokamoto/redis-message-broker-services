import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import Navbar from "../components/Navbar";

export default function SourceRouter () {
  return (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path = "/" component = {PageOne} />
                <Route exacr path = "/pageTwo"  component = {PageTwo}/>
                <Redirect to="/" />

            </Switch>
        </div>
    </Router>
  );
};
