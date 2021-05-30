import React, { forwardRef } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
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
import BoxerModal from "../boxers/BoxerModal";

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

export default function Standings({requestClient}) {
  const classes = useStyles();

	const [data, setData] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
  const [boxerModal, setBoxerModal] = React.useState(false); 

	const getAllStandings = React.useCallback(async () => {
    const resp = await requestClient.GetAllStandings();
    const { code, standings } = resp;
    let _standings = [];
    if (code === 200) {
      _standings = standings || [];
    }

    if (_standings.length > 0) {
      _standings = _standings.map(standing => {
        return {
          boxerId: standing.getBoxerid(),
          winCount: standing.getWincount(),
          lossCount: standing.getLosscount(),
          score: standing.getScore(),
        }
      });

      const boxerIds = _standings.map(standing => standing.boxerId);
      const boxersResponse = await requestClient.GetMultipleBoxers(boxerIds);
      const { code: _code, boxers } = boxersResponse;
      const _boxers = boxers.reduce((acc, curr) => {
        acc[curr.id] = {
          id: curr.id,
          boxer: curr.fullName,
        };
        return acc;
      }, {});

      _standings = _standings.map(standing => {
        return {
          ...standing,
          ...(_boxers[standing.boxerId] || { id: -1, boxer: 'No name' })
        }
      });
    }

    return _standings;
	}, [requestClient])

  const openBoxerDetails = (id) => {
    window.open("/boxers/" + id);
  }

  const deleteBoxer = async (oldData) => {
    const resp = await requestClient.RemoveBoxer(oldData.boxerId, Session.getUser().token);
    console.log('resp: ', resp);
    const { code, message, boxer } = resp;
    if (code === 201) {
      const dataDelete = [...data];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      setData([...dataDelete]);
      window.location.reload();
    }
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

	const init = React.useCallback(async () => {
    setColumns([
      { field: 'boxer', title: 'Boxer', width: 300, render: rowData => 
        <Button 
          onClick={() => openBoxerDetails(rowData.id)}
          variant="text"
          fullWidth
          className={classes.boxerButton}
        >
          {rowData.boxer}
        </Button>        
      },
      { field: 'winCount', title: 'Wins' },
      { field: 'lossCount', title: 'Losses' },
      { field: 'score', title: 'Score' }
    ]);
		setData(await getAllStandings());
	}, [getAllStandings, classes])
	React.useEffect(() => {
		init();
	}, [init]);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <BoxerModal modal={boxerModal} setModal={setBoxerModal} requestClient={requestClient} />

      <hr />
        <Grid container justify="space-between">
          <h2>Standings</h2>
          {Session.getUser()?.isAdmin && <CreateBoxerButton/>}
        </Grid>
			<hr />

      <MaterialTable 
        icons={tableIcons}
        options={{
          showTitle: false,
          searchFieldVariant: "outlined",
          searchFieldAlignment: "left",
        }}
        columns={columns}
        editable={{
          isDeleteHidden: () => !Session.getUser()?.isAdmin,
          onRowDelete: Session.getUser()?.isAdmin && ((oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                deleteBoxer(oldData);
                resolve();
              }, 500);
            })),
        }}
        data={data}
      />
    </div>
  );
}
