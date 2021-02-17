import React from 'react'; 
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from '../pages/home';
import contador from '../pages/contador';

export default function() {
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route path="/contador" component={contador}/>
                </Switch>
            </Router>
        </React.Fragment>

    )
}