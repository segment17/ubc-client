import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import { Button, Fade, makeStyles, MenuItem, Modal } from "@material-ui/core";
import moment from "moment";
import { AddMatch, GetAllBoxers, UpdateMatch } from "../common/Requests";
import Session from "../common/Session";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: "1vw",
  },
  timeField: {
    marginTop: "-0.1vw",
    marginBottom: "1vw",
  },
}));

export default function MatchModal({ modal, setModal, oldMatchProps, requestClient }) {
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
    matchTime: moment(),
    isFinished: null,
    winnerBoxer: null,
  });
  const [errors, setErrors] = React.useState({
    homeBoxerError: null,
    awayBoxerError: null,
  });

  const handleCloseModal = () => {
    setModal(false);
    setMatchProps({
      homeBoxer: null,
      awayBoxer: null,
      matchTime: moment(),
      isFinished: null,
      winnerBoxer: null,
    });
  };

  const submitMatch = async () => {
    const resp = await requestClient.AddMatch(
      matchProps.homeBoxer,
      matchProps.awayBoxer,
      matchProps.matchTime,
      matchProps.isFinished,
      matchProps.winnerBoxer,
      Session.getUser().token
    );
    //SNACKBAR
  };

  const updateMatch = async () => {
    const resp = await requestClient.UpdateMatch(
      oldMatchProps.id,
      matchProps.homeBoxer,
      matchProps.awayBoxer,
      matchProps.matchTime,
      matchProps.isFinished,
      matchProps.winnerBoxer,
      Session.getUser().token
    );
    //SNACKBAR
  };

  const getOptions = async () => {
    const boxers = (await requestClient.GetAllBoxers()).boxers;
    let boxerOptions = [];
    for (let index in boxers) {
      const boxer = boxers[index];
      boxerOptions.push(<MenuItem key={boxer.id} value={boxer.id}>{boxer.fullName}</MenuItem>);
    }
    const yesNo = [
      <MenuItem key={1} value={true}>{"Yes"}</MenuItem>,
      <MenuItem key={2} value={false}>{"No"}</MenuItem>,
    ];
    return {
      homeBoxerOptions: boxerOptions,
      awayBoxerOptions: boxerOptions,
      yesNoOptions: yesNo,
      winnerBoxerOptions: [],
    };
  };

  const init = React.useCallback(async () => {
    setOptions(await getOptions());
    oldMatchProps &&
      setMatchProps({
        homeBoxer: oldMatchProps.homeBoxer.id,
        awayBoxer: oldMatchProps.awayBoxer.id,
        matchTime: moment.unix(oldMatchProps.matchTime).format(),
        isFinished: oldMatchProps.isFinished,
        winnerBoxer: oldMatchProps.winnerBoxer.id,
      });
  }, [oldMatchProps]);
  React.useEffect(() => {
    init();
  }, [init]);

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
        }}
      >
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
                  value={matchProps.homeBoxer || ""}
                  onChange={(value) => {
                    if (value.target.value === matchProps.awayBoxer) {
                      setErrors({
                        ...errors,
                        homeBoxerError:
                          "Home boxer cannot be the same as away boxer.",
                      });
                    } else {
                      errors.homeBoxerError &&
                        setErrors({ ...errors, homeBoxerError: null });
                      /* setOptions({
                        ...options,
                        winnerBoxerOptions: [
                          ...options.winnerBoxerOptions,
                          <MenuItem value={value.target.value}>
                            {"ok"}
                          </MenuItem>,
                        ],
                      }); */
                      setMatchProps({
                        ...matchProps,
                        homeBoxer: value.target.value,
                      });
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
                  value={matchProps.awayBoxer || ""}
                  onChange={(value) => {
                    if (value.target.value === matchProps.homeBoxer) {
                      setErrors({
                        ...errors,
                        awayBoxerError:
                          "Away boxer cannot be the same as home boxer.",
                      });
                    } else {
                      errors.awayBoxerError &&
                        setErrors({ ...errors, awayBoxerError: null });
                      setMatchProps({
                        ...matchProps,
                        awayBoxer: value.target.value,
                      });
                    }
                  }}
                >
                  {options.awayBoxerOptions}
                </TextField>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="time-picker"
                    label="Match Time"
                    required
                    format="dd/MM/yyyy"
                    InputLabelProps={{ shrink: !!matchProps.matchTime }}
                    fullWidth
                    inputVariant="outlined"
                    value={matchProps.matchTime || ""}
                    onChange={(value) =>
                      setMatchProps({ ...matchProps, matchTime: value })
                    }
                    className={classes.timeField}
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  required
                  select
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: !(
                      matchProps.isFinished === null ||
                      matchProps.isFinished === undefined
                    ),
                  }}
                  fullWidth
                  label="Is The Match Finished?"
                  variant="outlined"
                  value={
                    matchProps.isFinished === null ||
                    matchProps.isFinished === undefined
                      ? ""
                      : matchProps.isFinished
                  }
                  onChange={(value) =>
                    setMatchProps({
                      ...matchProps,
                      isFinished: value.target.value,
                    })
                  }
                >
                  {options.yesNoOptions}
                </TextField>

                <TextField
                  required
                  select
                  className={classes.textField}
                  InputLabelProps={{ shrink: !!matchProps.winnerBoxer }}
                  fullWidth
                  label="Winner Boxer"
                  variant="outlined"
                  disabled={
                    !matchProps.isFinished ||
                    !matchProps.homeBoxer ||
                    !matchProps.awayBoxer
                  }
                  value={matchProps.winnerBoxer || ""}
                  onChange={(value) =>
                    setMatchProps({
                      ...matchProps,
                      winnerBoxer: value.target.value,
                    })
                  }
                >
                  {options.homeBoxerOptions}
                </TextField>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    oldMatchProps ? updateMatch() : submitMatch()
                  }
                >
                  {oldMatchProps ? "Update" : "Create"}
                </Button>
              </FormControl>
            </div>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
