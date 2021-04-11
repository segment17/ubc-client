import React from 'react';
import AllMatches from '../matches/AllMatches';
import Standings from '../standings/Standings';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <Grid container spacing={3}>
                <Grid item lg={10}>
                    <AllMatches />
                </Grid>

                <Grid item lg={2}>
                    <Standings />
                </Grid>
            </Grid>
        )
    }
}

export default HomePage;