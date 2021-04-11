import React, { useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

function Topbar() {
    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Unlimited Boxing Championship
                </Typography>
                <div>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField color="white" id="input-with-icon-grid" label="username" />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" type="password" color="white" label="password" />
                        </Grid>
                        <Button color="inherit">Login</Button>
                    </Grid>

                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Topbar;
