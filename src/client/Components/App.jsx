import React, {Component} from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Saved from "./Saved";
import NoMatch from "./NoMatch";
import Nav from "./Nav";

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/saved" component={Saved} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App