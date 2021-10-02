import React from "react";
import {Switch, Route} from "react-router-dom";
import HikeList from "./HikeList";
import NewsList from "./NewsList";
import HikersList from "./HikersList"

function EntityList(){

    return(
        <div>
            <Switch>
                <Route path="/hikes">
                    <HikeList />
                </Route>
                
                <Route path="/news">
                    <NewsList />
                </Route>

                
                <Route path="/hikers">
                    <HikersList />
                </Route>
            </Switch>
        </div>
    )
}

export default EntityList;