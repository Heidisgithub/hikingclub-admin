import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HikeList from "./HikeList";
import NewsList from "./NewsList";
import Registrations from "./Registrations"
import Login from './Login'

function EntityList(props) {


    return (
        <div>
        <Switch>
        <Route exact path="/login">
        {props.loggedIn ? <Redirect to="/hikes" /> :  <Login login={props.login} errorState={props.errorState} />}  
        </Route>  
        <Route exact path="/">
        {props.loggedIn ? <Redirect to="/hikes" /> :  <Redirect to="/login" />}  
        </Route>  
                <Route path="/hikes">
                {props.loggedIn ? <HikeList logOut={props.logOut} loggedIn={props.loggedIn} /> : <Redirect to="/login" />}
                </Route>

                <Route path="/news">
                {props.loggedIn ? <NewsList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/registrations">
                {props.loggedIn ? <Registrations logOut={props.logOut} /> : <Redirect to="/login" />}
                </Route>
            </Switch>
        </div>
    )
}

export default EntityList;