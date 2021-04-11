import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const MAX_ROW_LENGTH = 500;

export default function AllMatches() {
    return (
        <div style={{ height: 900, width: '100%' }}>
            <DataGrid

                columns={[{ field: 'homeBoxer', headerName: 'Home Boxer', width: 185 },
                { field: 'awayBoxer', headerName: 'Away Boxer', width: 185 },
                { field: 'matchTime', headerName: 'Match Time', width: 185 },
                { field: 'winnerBoxer', headerName: 'Winner', width: 185 },
                { field: 'isFinished', headerName: 'Is Finished?', width: 185 }]}
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
