import React from 'react';
import AllMatches from '../matches/AllMatches';
import Standings from '../standings/Standings';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item lg={7}>
                    <AllMatches />
                    <Button
                        style={{ marginLeft: '1rem', marginTop: '1rem' }}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                    >
                        Create a match
                    </Button>
                </Grid>

                <Grid item lg={5}>
                    <Standings />
                    <Button
                        style={{ marginLeft: '1rem', marginTop: '1rem' }}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}
                        onClick={() => this.props.history.push('/boxers/new')}
                    >Create a boxer</Button>

                </Grid>
            </Grid>
        )
    }
}

export default HomePage;