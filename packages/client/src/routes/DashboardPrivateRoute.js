import React from 'react'
import {
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import Survey from "../pages/Survey"
import Navbar from "../components/Navbar";
import Events from "../pages/Events";

export const DashboardPrivateRoute = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exacr path = "/Survey"  component = {Survey}/>
                    <Route exacr path = "/events"  component = {Events}/>
                    <Redirect to = "/events" />
                </Switch>

            </div>
            
            
        </>
    )
}
