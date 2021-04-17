import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';

const MAX_ROW_LENGTH = 500;

export default function AllMatches({ CreateButton }) {
	return (
		<div style={{ height: 700, width: '100%' }}>
			<hr />
			<Grid container justify="space-between">
				<h4>All Matches</h4>
				<CreateButton style={{ marginBottom: '0.3rem' }} />
			</Grid>
			<hr />
			<DataGrid
				disableColumnSelector
				columns={[
					{ field: 'homeBoxer', headerName: 'Home Boxer', width: 200 },
					{ field: 'awayBoxer', headerName: 'Away Boxer', width: 200 },
					{ field: 'matchTime', headerName: 'Match Time', width: 185 },
					{ field: 'winnerBoxer', headerName: 'Winner', width: 185 },
					{ field: 'isFinished', headerName: 'Is Finished?', width: 185, valueFormatter: (value) => value === true ? 'Yes' : 'No' }
				]}
				rows={[
					{ id: 1, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 2, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 3, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 4, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 5, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 6, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 7, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 8, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
					{ id: 9, homeBoxer: 'Mike Tyson', awayBoxer: 'Muhammad Ali', matchTime: '11/04/2021 08:00 PM', winnerBoxer: '-', isFinished: false },
				]}
			/>
		</div>
	);
}
