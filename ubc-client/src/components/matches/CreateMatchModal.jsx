import React from "react";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Backdrop from '@material-ui/core/Backdrop';
import { Button, Fade, makeStyles, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: "none",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    maxHeight: "45vw",
    outline: "none",
    maxWidth: "90%",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: "15px",
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    marginBottom: "1vw"
  },
  dateField: {
    marginTop: "-0.5vw",
    marginBottom: "1vw"
  }
}));

export default function CreateMatchModal({modal, setModal}) {
  const classes = useStyles();

  const [options, setOptions] = React.useState({
    homeBoxerOptions: [],
    awayBoxerOptions: [],
    yesNoOptions: [],
    winnerBoxerOptions: [],
  });
  const [matchProps, setMatchProps] = React.useState({
    homeBoxer: null,
    awayBoxer: null,
    matchTime: null,
    isFinished: null,
    winnerBoxer: null
  });
  const [errors, setErrors] = React.useState({
    homeBoxerError: null,
    awayBoxerError: null,
    matchTimeError: null,
  });

  const handleCloseModal = () => {
    setModal(false);
    setMatchProps({
      homeBoxer: null,
      awayBoxer: null,
      matchTime: null,
      isFinished: null,
      winnerBoxer: null
    });
  }

  const submitMatch = () => {

  }

  return (
    <React.Fragment>
      <Modal
        className={classes.modal}
        open={modal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={modal}>
          <div className={classes.paper}>
            <div>
              <FormControl noValidate autoComplete="off" variant="filled">
                <TextField
                  required
                  select
                  className={classes.textField}
                  InputLabelProps={{ shrink: !!matchProps.homeBoxer }}
                  fullWidth
                  error={errors.homeBoxerError}
                  helperText={errors.homeBoxerError}
                  label="Home Boxer"
                  variant="outlined"
                  value={matchProps.homeBoxer}
                  onChange={value => {
                    if(value.target.value  ) {
                      setErrors({...errors, homeBoxerError: "Home boxer cannot be the same as away boxer."});
                    } else {
                      errors.homeBoxerError && setErrors({...errors, homeBoxerError: null});
                      setMatchProps({...matchProps, homeBoxer: value.target.value});
                    }
                  }}
                >
                  {options.homeBoxerOptions}
                </TextField>

                <TextField
                  required
                  select
                  className={classes.textField}
                  InputLabelProps={{ shrink: !!matchProps.awayBoxer }}
                  fullWidth
                  error={errors.awayBoxerError}
                  helperText={errors.awayBoxerError}
                  label="Away Boxer"
                  variant="outlined"
                  value={matchProps.awayBoxer}
                  onChange={value => {
                    if(value.target.value  ) {
                      setErrors({...errors, awayBoxerError: "Away boxer cannot be the same as home boxer."});
                    } else {
                      errors.awayBoxerError && setErrors({...errors, awayBoxerError: null});
                      setMatchProps({...matchProps, awayBoxer: value.target.value});
                    }
                  }}
                >
                  {options.awayBoxerOptions}
                </TextField>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Match Time"
                    required
                    openTo="seconds"
                    ampm={false}
                    format="HH:mm:ss"
                    views={["hours", "minutes", "seconds"]}
                    InputLabelProps={{ shrink: !!matchProps.matchTime }}
                    fullWidth
                    variant="outlined"
                    error={errors.matchTimeError}
                    helperText={errors.matchTimeError}
                    value={matchProps.matchTime}
                    onChange={value => {
                      /* if(value ) {
                        setErrors({...errors, matchTimeError: "Match time cannot be longer than 8 hours."});
                      } else {
                        errors.matchTimeError && setErrors({...errors, matchTimeError: null})
                        setMatchProps({...matchProps, birthdate: value});
                      } */
                      setMatchProps({...matchProps, matchTime: value});
                    }}
                    className={classes.timeField}
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  required
                  select
                  className={classes.textField}
                  InputLabelProps={{ shrink: !!matchProps.isFinished }}
                  fullWidth
                  label="Is The Match Finished?"
                  variant="outlined"
                  value={matchProps.isFinished}
                  onChange={value => setMatchProps({...matchProps, isFinished: value.target.value})}
                >
                  {options.winnerBoxerOptions}
                </TextField>

                <TextField    
                  required
                  select
                  className={classes.textField}
                  InputLabelProps={{ shrink: !!matchProps.winnerBoxer }}
                  fullWidth
                  label="Winner Boxer"
                  variant="outlined"
                  disabled={!matchProps.isFinished}
                  value={matchProps.winnerBoxer}
                  onChange={value => setMatchProps({...matchProps, winnerBoxer: value.target.value})}
                >
                  {options.winnerBoxerOptions}
                </TextField>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => submitMatch()}>
                  {"Create"}
                </Button>
              </FormControl>
            </div>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}