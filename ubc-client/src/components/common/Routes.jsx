import { createBrowserHistory } from "history";
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Topbar from './Topbar';
import HomePage from '../homepage/HomePage';
import BoxerDetails from '../boxers/BoxerDetails';
import CreateBoxer from '../boxers/CreateBoxer';
import CreateMatch from '../matches/CreateMatch';

function Routes(props) {
    const history = createBrowserHistory();
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Topbar />
            </Grid>
            <Grid item xs={12} style={{ padding: '1.5rem' }}>
                <BrowserRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/boxers/new" component={CreateBoxer} />
                        <Route exact path="/boxers/:id" component={BoxerDetails} />
                        <Route exact path="/matches/new" component={CreateMatch} />
                    </Switch>
                </BrowserRouter>
            </Grid>
        </Grid>

    )
}

export default Routes;