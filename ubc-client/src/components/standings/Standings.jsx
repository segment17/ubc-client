import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';
import { GetAllStandings } from '../common/Requests';

export default function Standings({ CreateButton }) {
	const [data, setData] = React.useState([]);

	const getAllStandings = React.useCallback(() => {
    const resp = GetAllStandings();
    //TO-DO: Format response and add snackbar
    let standings = [];
    return standings;
	}, [])

  const openBoxerDetails = (param) => {
    if(param.field === "boxer") {
      window.open("/boxers/" + param.data.id);
    }
  }

	const init = React.useCallback(async () => {
		setData(getAllStandings());
	}, [getAllStandings])
	React.useEffect(() => {
		init();
	}, [init]);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <hr />
			<Grid container justify="space-between">
				<h4>Standings</h4>
				<CreateButton/>
			</Grid>
			<hr />
      <DataGrid
        columns={[
          { field: 'boxer', headerName: 'Boxer', width: 170 },
          { field: 'winCount', headerName: 'Wins', width: 170 },
          { field: 'lossCount', headerName: 'Losses', width: 170 },
          { field: 'score', headerName: 'Score', width: 170 }
        ]}
        disableColumnSelector
        disableSelectionOnClick
        disableClickEventBubbling
        onCellClick={(param) => openBoxerDetails(param)}
        //onCellHover={(param) => console.log("ok")}
        rows={
        //data
        [
          { id: 1, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 2, boxer: 'Muhammad Ali', winCount: '76', lossCount: '4', score: 300 },
          { id: 3, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 4, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 5, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 6, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 7, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 8, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
          { id: 9, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 }
        ]}
      />
    </div>
  );
}
