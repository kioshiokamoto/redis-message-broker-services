import React,{useContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import {PublicRoute} from "./PublicRoute"
import {PrivateRoute} from "./PrivateRoute"
import {DashboardPrivateRoute} from "./DashboardPrivateRoute"
import { DataContext } from "../store/GlobalState";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";

export default function SourceRouter () {
  const {state} = useContext(DataContext);
  const {logged}=state
  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute exact path = "/login"  component = {PageOne}  isAuthenticated={logged}/>
                <PublicRoute exact path = "/register"  component = {PageTwo}  isAuthenticated={logged}/>
                <PrivateRoute isAuthenticated={logged} path = "/" component = {DashboardPrivateRoute} />
            </Switch>
        </div>
    </Router>
  );
};
