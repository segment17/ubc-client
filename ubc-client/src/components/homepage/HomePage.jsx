import React from "react";
import AllMatches from "../matches/AllMatches";
import Standings from "../standings/Standings";
import Grid from "@material-ui/core/Grid";

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={7}>
        <AllMatches/>
      </Grid>
      <Grid item lg={5}>
        <Standings style={{margin: 10}}/>
      </Grid>
    </Grid>
  );
}