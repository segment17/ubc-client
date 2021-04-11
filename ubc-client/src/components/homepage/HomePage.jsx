import React from "react";
import AllMatches from "../matches/AllMatches";
import Standings from "../standings/Standings";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CreateBoxerModal from "../boxers/CreateBoxerModal";
import CreateMatchModal from "../matches/CreateMatchModal";

export default function HomePage() {
  const [boxerModal, setBoxerModal] = React.useState(false);
  const [matchModal, setMatchModal] = React.useState(false);

  const CreateMatchButton = () => {
    return (
      <Button
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={() => setMatchModal(true)}
      >
        Create a match
      </Button>
    )
  }

  const CreateBoxerButton = () => {
    return (
      <Button
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={() => setBoxerModal(true)}
      >
        Create a boxer
      </Button>
    )
  }

  return (
    <Grid container spacing={2}>
      <CreateBoxerModal modal={boxerModal} setModal={setBoxerModal}/>
      <CreateMatchModal modal={matchModal} setModal={setMatchModal}/>
      <Grid item lg={7}>
        <AllMatches CreateButton={CreateMatchButton}/>
      </Grid>
      <Grid item lg={5}>
        <Standings CreateButton={CreateBoxerButton} style={{margin: 10}}/>
      </Grid>
    </Grid>
  );
}