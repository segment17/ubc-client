import React from "react";
import AllMatches from "../matches/AllMatches";
import Standings from "../standings/Standings";
import Grid from "@material-ui/core/Grid";

export default function HomePage({requestClient}) {
  return (
    <Grid container spacing={2}>
      <Grid item lg={7}>
        <AllMatches requestClient={requestClient}/>
      </Grid>
      <Grid item lg={5}>
        <Standings requestClient={requestClient} style={{margin: 10}}/>
      </Grid>
    </Grid>
  );
}