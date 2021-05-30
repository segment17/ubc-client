import React, { forwardRef } from "react";
import { useLocation } from "react-router-dom";
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
import Session from "../common/Session";
import EditIcon from '@material-ui/icons/Edit';
import BoxerModal from "./BoxerModal";
import moment from 'moment';

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

function BoxerDetails({requestClient}) {
  const classes = useStyles();
  const location = useLocation();
  const id = location.pathname.substring(7);

  const [boxerModal, setBoxerModal] = React.useState(false);
  const [boxerProps, setBoxerProps] = React.useState({});
  const [standing, setStanding] = React.useState({});
  const [matches, setMatches] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
  
  const openBoxerDetails = (id) => {
    window.open("/boxers/" + id);
  }

  const EditBoxerButton = () => {
    return (
      <Button
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<EditIcon />}
        onClick={() => setBoxerModal(true)}
      >
        Edit Boxer
      </Button>
    )
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

    const resp = await requestClient.GetBoxerWithStandingAndMatches(id);
    console.log('boxer resp: ', resp);
    resp.boxer && setBoxerProps({
      id: resp.boxer?.id,
      name: resp.boxer?.fullName,
      birthdate: resp.boxer?.birthDate / 1000,
      weight: resp.boxer?.weight,
      height: resp.boxer?.height
    });
    const { standingAndMatches: { standing, matches: __matches }, code } = resp;
    let _matches = [];
    if (code === 200) {
      _matches = __matches || [];
      if (standing) {
        setStanding(standing);
      }
    }

    if (_matches.length > 0) {
      _matches = _matches.map(match => {
        return {
          id: match.getId(),
          homeBoxerId: match.getHomeboxerid(),
          awayBoxerId: match.getAwayboxerid(),
          matchTime: match.getMatchtime(),
          isFinished: match.getIsfinished(),
          winnerBoxerId: match.getWinnerboxerid(),
        };
      });

      const awayBoxerIds = _matches.map(match => match.awayBoxerId);
      const homeBoxerIds = _matches.map(match => match.homeBoxerId);
      const boxerIds = Array.from(new Set([...awayBoxerIds, ...homeBoxerIds]));
      const boxersResponse = await requestClient.GetMultipleBoxers(boxerIds);
      const { code: _code, boxers } = boxersResponse;
      const _boxers = boxers.reduce((acc, curr) => {
        acc[curr.id] = {
          id: curr.id,
          fullName: curr.fullName
        };
        return acc;
      }, {});

      _matches = _matches.map(match => {
        const _match = {
          ...match,
          homeBoxer: _boxers[match.homeBoxerId] || {id: -1, fullName: 'No name'},
          awayBoxer: _boxers[match.awayBoxerId] || {id: -1, fullName: 'No name'},
        };

        if (match.winnerBoxerId) {
          _match.winnerBoxer = _boxers[match.winnerBoxerId] || {id: -1, fullName: 'No name'}
        }
        return _match;
      });
      setMatches(_matches);
    }
  }, [requestClient, id, classes.boxerButton]);
  React.useEffect(() => {
    init();
  }, [init]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <BoxerModal modal={boxerModal} setModal={setBoxerModal} oldBoxerProps={boxerProps} requestClient={requestClient} />

      <Grid item xs={5}>

        <Typography variant="h2">{boxerProps.name}</Typography>
        <Divider/>
        <Typography variant="h6" className={classes.desc}>{"Birthdate: " + moment.unix(boxerProps.birthdate).format("MMMM Do, YYYY")}</Typography>
        <Typography variant="h6" className={classes.desc}>{"Weight: " + boxerProps.weight + " kg"}</Typography>
        <Typography variant="h6" className={classes.desc}>{"Height: " + boxerProps.height + " cm"}</Typography>
        {Session.getUser().isAdmin && <EditBoxerButton/>}

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
