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

export default function AllMatches() {
  const classes = useStyles();

	const [data, setData] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
  const [matchModal, setMatchModal] = React.useState(false);
  const [oldMatchProps, setOldMatchProps] = React.useState(null);

	const getAllMatches = React.useCallback(async () => {
		const resp = GetAllMatches();
    //TO-DO: Format response and add snackbar
    let matches = [
			{ id: 1, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: {id:2, name: 'Muhammad Ali'}, isFinished: true },
			{ id: 2, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: null, isFinished: false },
			{ id: 3, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: null, isFinished: false },
			{ id: 4, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: {id: 1, name: 'Mike Tyson'}, isFinished: true },
			{ id: 5, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: {id:2, name: 'Muhammad Ali'}, isFinished: true },
			{ id: 6, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: null, isFinished: false },
			{ id: 7, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: {id:2, name: 'Muhammad Ali'}, isFinished: true },
			{ id: 8, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: null, isFinished: false },
			{ id: 9, homeBoxer: {id: 1, name: 'Mike Tyson'}, awayBoxer: {id:2, name: 'Muhammad Ali'}, matchTime: 157419968, winnerBoxer: null, isFinished: false },
		];
    return matches;
	}, [])

	const openBoxerDetails = (id) => {
    window.open("/boxers/" + id);
  }

	const deleteMatch = async (oldData) => {
		//TEMP
		const dataDelete = [...data];
		const index = oldData.tableData.id;
		dataDelete.splice(index, 1);
		setData([...dataDelete]);
		//REAL
		//await RemoveMatch(oldData.id, Session.getUser().token);
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
      <MatchModal modal={matchModal} setModal={setMatchModal} oldMatchProps={oldMatchProps}/>

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
