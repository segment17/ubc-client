import { createBrowserHistory } from "history";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Topbar from "./Topbar";
import HomePage from "../homepage/HomePage";
import BoxerDetails from "../boxers/BoxerDetails";
import NotFound from "./NotFound";
import Login from "../login/Login";

function Routes({requestClient}) {
  const history = createBrowserHistory();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12} style={{ padding: "1.5rem" }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" > 
              <HomePage requestClient={requestClient}/>
            </Route>
            <Route exact path="/boxers/:id" >
              <BoxerDetails requestClient={requestClient}/>
            </Route>
            <Route exact path="/login">
              <Login requestClient={requestClient}/>
            </Route>
            <Route exact path="*" >
              <NotFound requestClient={requestClient} />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
}

export default Routes;
