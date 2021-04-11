import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function Standings() {
    return (
        <div style={{ height: 700, width: '100%' }}>
            <hr />
            <h4>Standings</h4>
            <hr />
            <DataGrid
                columns={[{ field: 'boxer', headerName: 'Boxer', width: 170 },
                { field: 'winCount', headerName: 'Wins', width: 170 },
                { field: 'lossCount', headerName: 'Losses', width: 170 },
                { field: 'score', headerName: 'Score', width: 170 }]}
                rows={
                    [
                        { id: 1, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 2, boxer: 'Muhammad Ali', winCount: '76', lossCount: '4', score: 300 },
                        { id: 3, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 4, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 5, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 6, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 7, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 8, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
                        { id: 9, boxer: 'Mike Tyson', winCount: '74', lossCount: '6', score: 283 },
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
