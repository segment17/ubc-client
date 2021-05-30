import React, { forwardRef } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { GetAllMatches } from '../common/Requests';
import MaterialTable from '@material-table/core';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from '@material-ui/icons';
import Session from '../common/Session';
import SaveIcon from "@material-ui/icons/Save";
import MatchModal from './MatchModal';
import moment from 'moment';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
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
  boxerButton: {
    justifyContent: "flex-start",
    textAlign: "left"
  }
}))

export default function AllMatches({requestClient}) {
  const classes = useStyles();

	const [data, setData] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
  const [matchModal, setMatchModal] = React.useState(false);
  const [oldMatchProps, setOldMatchProps] = React.useState(null);

	const getAllMatches = React.useCallback(async () => {
		const resp = await requestClient.GetAllMatches();
    const { code, matches } = resp;
    let _matches = [];
    if (code === 200) {
      _matches = matches || [];
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
          name: curr.fullName
        };
        return acc;
      }, {});

      _matches = _matches.map(match => {
        const _match = {
          ...match,
          homeBoxer: _boxers[match.homeBoxerId] || {id: -1, name: 'No name'},
          awayBoxer: _boxers[match.awayBoxerId] || {id: -1, name: 'No name'},
        };

        if (match.winnerBoxerId) {
          _match.winnerBoxer = _boxers[match.winnerBoxerId] || {id: -1, name: 'No name'}
        }
        return _match;
      });
    }

    console.log('_matches: ', _matches);
    return _matches;
	}, [requestClient])

	const openBoxerDetails = (id) => {
    window.open("/boxers/" + id);
  }

	const deleteMatch = async (oldData) => {
    const { id: matchId } = oldData;
		const resp = await requestClient.RemoveMatch(matchId, Session.getUser().token);
    console.log('resp: ', resp);
    const { code, message, boxer } = resp;
    if (code === 200) {
      const dataDelete = [...data];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      setData([...dataDelete]);
      window.location.reload();
    }
	}

	const updateMatch = async (rowData) => {
    setOldMatchProps(rowData);
    setMatchModal(true);
	}

  const CreateMatchButton = () => {
    return (
      <Button
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={() => {
          setOldMatchProps(null);
          setMatchModal(true);
        }}
      >
        Create a match
      </Button>
    )
  }

	const init = React.useCallback(async () => {
		setColumns([
			{ field: 'homeBoxer', title: 'Home Boxer', width: 200, render: rowData => 
				<Button
					onClick={() => openBoxerDetails(rowData.homeBoxer?.id)}
					variant="text"
          fullWidth
          className={classes.boxerButton}
				>
					{rowData.homeBoxer?.name}
				</Button>        
			},
			{ field: 'awayBoxer', title: 'Away Boxer', width: 200, render: rowData => 
				<Button 
					onClick={() => openBoxerDetails(rowData.awayBoxer?.id)}
					variant="text"
          fullWidth
          className={classes.boxerButton}
				>
					{rowData.awayBoxer?.name}
				</Button>        
			},
			{ field: 'matchTime', title: 'Match Time', render: rowData => moment.unix(rowData.matchTime).format("DD/MM/yyyy HH:mm") },
			{ emptyValue: "-", field: 'winnerBoxer', title: 'Winner', width: 200, render: rowData => 
				<Button 
					onClick={() => openBoxerDetails(rowData.winnerBoxer?.id)}
					variant="text"
          fullWidth
          className={classes.boxerButton}
				>
					{rowData.winnerBoxer?.name}
				</Button>        
			},
			{ field: 'isFinished', title: 'Is Finished?', render: rowData =>  rowData.isFinished === true ? 'Yes' : 'No' }
		]);
		setData(await getAllMatches());
	}, [getAllMatches, classes])
	React.useEffect(() => {
		init();
	}, [init]);

	return (
		<div style={{ height: 700, width: '100%' }}>
      <MatchModal modal={matchModal} setModal={setMatchModal} oldMatchProps={oldMatchProps} requestClient={requestClient}/>

			<hr />
        <Grid container justify="space-between">
          <h2>All Matches</h2>
          {Session.getUser()?.isAdmin && <CreateMatchButton style={{ marginBottom: '0.3rem' }} />}
        </Grid>
			<hr />

			<MaterialTable 
        icons={tableIcons}
        columns={columns}
        data={data}
				editable={{
          isDeleteHidden: () => !Session.getUser()?.isAdmin,
          onRowDelete: Session.getUser()?.isAdmin && ((oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                deleteMatch(oldData);
                resolve();
              }, 500);
            })),
        }}
        actions={[
          Session.getUser()?.isAdmin && {
            icon: tableIcons.Edit,
            tooltip: "Update Match",
            onClick: (event, rowData) => updateMatch(rowData),
          }
        ]}
				options={{
          showTitle: false,
          searchFieldVariant: "outlined",
          searchFieldAlignment: "left",
        }}
      />
		</div>
	);
}
