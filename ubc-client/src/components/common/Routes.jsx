import { createBrowserHistory } from "history";
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Topbar from './Topbar';
import HomePage from '../homepage/HomePage';

function Routes(props) {
    const history = createBrowserHistory();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Topbar />
            </Grid>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    {/* <Route exact path="/boxers/:id" component={BoxerDetails} />
                    <Route exact path="/boxers/new" component={CreateBoxer} />
                    <Route exact path="/matches/new" component={CreateMatch} /> */}
                </Switch>
            </BrowserRouter>
        </Grid>

    )
}

export default Routes;