import React from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
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

export default function CreateBoxerModal({modal, setModal}) {
  const classes = useStyles();

  const [boxerProps, setBoxerProps] = React.useState({
    name: null,
    birthdate: null,
    weight: null,
    height: null
  });
  const [errors, setErrors] = React.useState({
    nameError: null,
    birthdateError: null,
    weightError: null,
    heightError: null
  })

  const handleCloseModal = () => {
    setModal(false);
    setBoxerProps({
      name: null,
      birthdate: null,
      weight: null,
      height: null
    });
  }

  const submitBoxer = () => {

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
                  className={classes.textField}
                  InputLabelProps={{ shrink: !!boxerProps.name }}
                  fullWidth
                  error={errors.nameError}
                  helperText={errors.nameError}
                  label="Name"
                  variant="outlined"
                  value={boxerProps.name}
                  onChange={value => {
                    if(value.target.value.length > 250) {
                      setErrors({...errors, nameError: "Name cannot be longer than 250 characters."});
                    } else {
                      errors.nameError && setErrors({...errors, nameError: null});
                      setBoxerProps({...boxerProps, name: value.target.value});
                    }
                  }}
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    format="dd/MM/yyyy"
                    margin="normal"
                    InputLabelProps={{ shrink: !!boxerProps.birthdate }}
                    required
                    fullWidth
                    error={errors.birthdateError}
                    helperText={errors.birthdateError}
                    variant="outlined"
                    label={"Birthdate"}
                    value={boxerProps.birthdate}
                    onChange={value => {
                      /* if(value ) {
                        setErrors({...errors, birthdateError: "Boxer must be older than 18 years old."});
                      } else {
                        errors.birthdateError && setErrors({...errors, birthdateError: null})
                        setBoxerProps({...boxerProps, birthdate: value});
                      } */
                      setBoxerProps({...boxerProps, birthdate: value});
                    }}
                    className={classes.dateField}
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  className={classes.textField}
                  value={boxerProps.weight}
                  required
                  fullWidth
                  error={errors.weightError}
                  helperText={errors.weightError}
                  variant="outlined"
                  label="Weight"
                  onChange={value => {
                    if(isNaN(value.target.value)) {
                      setErrors({...errors, weightError: "Weight must be a number."});
                    } else if(value.target.value > 200) {
                      setErrors({...errors, weightError: "Weight must be less than 200kgs."});
                    } else {
                      errors.weightError && setErrors({...errors, weightError: null})
                      setBoxerProps({...boxerProps, weight: value.target.value});
                    }
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}
                />

                <TextField
                  className={classes.textField}
                  value={boxerProps.height}
                  fullWidth
                  required
                  error={errors.heightError}
                  helperText={errors.heightError}
                  variant="outlined"
                  label="Height"
                  onChange={value => {
                    if(isNaN(value.target.value)) {
                      setErrors({...errors, heightError: "Height must be a number."});
                    } else if(value.target.value > 250) {
                      setErrors({...errors, heightError: "Height must be less than 250cm."});
                    } else {
                      errors.heightError && setErrors({...errors, heightError: null})
                      setBoxerProps({...boxerProps, height: value.target.value})
                    }
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                  }}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => submitBoxer()}>
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