import React from "react";
import { Switch, Route } from "react-router-dom";
import HikeList from "./HikeList";
import NewsList from "./NewsList";
import Registrations from "./Registrations"

function EntityList() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                <div>Hello, choose one of the tabs to see and edit more info about our Hikes, News and Registrations!</div>
                </Route>
                <Route path="/hikes">
                    <HikeList />
                </Route>

                <Route path="/news">
                    <NewsList />
                </Route>

                <Route path="/registrations">
                    <Registrations />
                </Route>
            </Switch>
        </div>
    )
}

export default EntityList;