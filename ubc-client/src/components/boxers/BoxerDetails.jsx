import React, { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { GetBoxerWithStandingAndMatches } from "../common/Requests";
import { Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import MaterialTable from "@material-table/core";
import {
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  Search,
  ViewColumn
} from '@material-ui/icons';

const tableIcons = {
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    width: "95%"
  },
  desc: {
    marginTop: 10
  },
  boxerButton: {
    justifyContent: "flex-start",
    textAlign: "left"
  }
}))

function BoxerDetails() {
  const classes = useStyles();
  const location = useLocation();
  const id = location.pathname.substring(7);

  const [boxerProps, setBoxerProps] = React.useState({});
  const [standing, setStanding] = React.useState({});
  const [matches, setMatches] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
  
  const openBoxerDetails = (id) => {
    window.open("/boxers/" + id);
  }

  const init = React.useCallback(async () => {
    setColumns([
			{ field: 'homeBoxer', title: 'Home Boxer', width: 300, render: rowData => 
				<Button
					onClick={() => openBoxerDetails(rowData.homeBoxer?.id)}
					variant="text"
          fullWidth
          className={classes.boxerButton}
				>
					{rowData.homeBoxer?.fullName}
				</Button>        
			},
			{ field: 'awayBoxer', title: 'Away Boxer', width: 300, render: rowData => 
				<Button 
					onClick={() => openBoxerDetails(rowData.awayBoxer?.id)}
					variant="text"
          fullWidth
          className={classes.boxerButton}
				>
					{rowData.awayBoxer?.fullName}
				</Button>        
			},
			{ field: 'matchTime', title: 'Match Time' },
			{ emptyValue: "-", field: 'winnerBoxer', title: 'Winner', width: 300, render: rowData => 
				<Button 
					onClick={() => openBoxerDetails(rowData.winnerBoxer?.id)}
					variant="text"
          fullWidth
          className={classes.boxerButton}
				>
					{rowData.winnerBoxer?.fullName}
				</Button>        
			},
			{ field: 'isFinished', title: 'Is Finished?', render: rowData =>  rowData.isFinished === true ? 'Yes' : 'No' }
		]);

    const resp = await GetBoxerWithStandingAndMatches(id);
    resp.boxer && setBoxerProps({
      name: resp.boxer?.fullName,
      birthdate: resp.boxer?.birthDate,
      weight: resp.boxer?.weight,
      height: resp.boxer?.height
    });
    resp.standingAndMatches?.standing && setStanding(resp.standingAndMatches.standing);
    resp.standingAndMatches?.matches && setMatches(resp.standingAndMatches.matches);
  }, [id, classes]);
  React.useEffect(() => {
    init();
  }, [init]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={5}>

        <Typography variant="h2">{boxerProps.name}</Typography>
        <Divider/>
        <Typography variant="h6" className={classes.desc}>{"Birthdate: " + boxerProps.birthdate}</Typography>
        <Typography variant="h6" className={classes.desc}>{"Weight: " + boxerProps.weight + " kg"}</Typography>
        <Typography variant="h6" className={classes.desc}>{"Height: " + boxerProps.height + " cm"}</Typography>

        <Typography variant="h4" style={{marginTop: "10%"}}>{"Standing"}</Typography>
        <Divider/>
        <Typography variant="h6" className={classes.desc}>{"Wins: " + standing.winCount}</Typography>
        <Typography variant="h6" className={classes.desc}>{"Losses: " + standing.lossCount}</Typography>
        <Typography variant="h6" className={classes.desc}>{"Score: " + standing.score}</Typography>
        
      </Grid>
      <Grid item xs={7}>
        <MaterialTable
          title="Matches"
          icons={tableIcons}
          columns={columns}
          data={matches}
          options={{
            searchFieldVariant: "outlined",
          }}
        />
      </Grid>
    </Grid>
  )
}

export default BoxerDetails;
