import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

class CreateBoxer extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Grid container spacing={3} style={{ border: '1px solid #cecece' }}>
                <Grid item xs={12}>
                    <FormControl variant="filled">
                        <FilledInput
                            id="filled-adornment-weight"
                            value={70}
                            onChange={console.log('weight')}
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>

                        <FilledInput
                            id="filled-adornment-weight"
                            value={70}
                            onChange={console.log('weight')}
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                        <FormHelperText id="filled-weight-helper-text">Height</FormHelperText>


                        <TextField
                            id="outlined-full-width"
                            label="Label"
                            style={{ margin: 8 }}
                            placeholder="Placeholder"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                    </FormControl>
                </Grid>
            </Grid>
        )
    }
}

export default CreateBoxer;