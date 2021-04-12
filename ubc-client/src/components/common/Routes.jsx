import { createBrowserHistory } from "history";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Topbar from "./Topbar";
import HomePage from "../homepage/HomePage";
import BoxerDetails from "../boxers/BoxerDetails";
import NotFound from './NotFound';
import Login from '../login/Login';


function Routes(props) {
    const history = createBrowserHistory();
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Topbar />
            </Grid>
            <Grid item xs={12} style={{ padding: "1.5rem" }}>
                <BrowserRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/boxers/:id" component={BoxerDetails} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Grid>
        </Grid>
    );
}

export default Routes;
