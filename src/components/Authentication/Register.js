import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { axiosInstance } from "../axios";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "#00b2ff",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submitButton: {
    color: "white",
    margin: theme.spacing(1, 0, 2),
    background: "#00b2ff",
    "&:hover": {
      background: "#00b2ff",
    },
  },
  loginLink: {
    color: "#1976D2",
    marginLeft: 5,
    textDecoration: "none",
  },
}));

const Register = () => {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);

  const [usernameMessageError, setUsernameMessageError] = useState("");
  const [emailMessageError, setEmailMessageError] = useState("");
  const [passwordMessageError, setPasswordMessageError] = useState("");
  const [passwordConfirmMessageError, setPasswordConfirmMessageError] =
    useState("");

  const resetErrorMessages = () => {
    setUsernameMessageError("");
    setEmailMessageError("");
    setPasswordConfirmMessageError("");
    setPasswordConfirmMessageError("");
  };

  const setErrorMessage = (errorMessages) => {
    const { username, email, password1, non_field_errors } = errorMessages;

    resetErrorMessages();

    if (username) {
      const message = username[0].toString();
      setUsernameMessageError(message);
    }
    if (email) {
      const message = email[0].toString();
      setEmailMessageError(message);
    }
    if (password1) {
      const message = password1[0].toString();
      setPasswordMessageError(message);
    }
    if (non_field_errors) {
      const message = non_field_errors[0].toString();
      setPasswordConfirmMessageError(message);
    }
  };

  const register = (e) => {
    e.preventDefault();

    axiosInstance
      .post("users/register/", {
        username,
        email,
        password1: password,
        password2: passwordConfirm,
      })

      .catch((err) => {
        const {
          response: { data },
        } = err;

        setErrorMessage(data);
      })
      .then((res) => {
        if (res) {
          resetErrorMessages();
          history.push("/login");
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={register} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setUsername(e.target.value)}
                error={usernameMessageError !== "" ? true : false}
                helperText={
                  usernameMessageError !== "" ? usernameMessageError : ""
                }
                autoComplete="username"
                name="username"
                variant="outlined"
                id="username"
                label="Username"
                autoFocus
                required
                fullWidth
                InputLabelProps={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                error={emailMessageError !== "" ? true : false}
                helperText={emailMessageError !== "" ? emailMessageError : ""}
                variant="outlined"
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                required
                fullWidth
                InputLabelProps={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                error={passwordMessageError !== "" ? true : false}
                helperText={
                  passwordMessageError !== "" ? passwordMessageError : ""
                }
                type={showPasswords ? "text" : "password"}
                variant="outlined"
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                InputLabelProps={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPasswordConfirm(e.target.value)}
                error={passwordConfirmMessageError !== "" ? true : false}
                helperText={
                  passwordConfirmMessageError !== ""
                    ? passwordConfirmMessageError
                    : ""
                }
                type={showPasswords ? "text" : "password"}
                variant="outlined"
                name="password"
                label="Confirm Password"
                id="confirm-password"
                autoComplete="confirm-password"
                fullWidth
                required
                InputLabelProps={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onClick={() => setShowPasswords(!showPasswords)}
                    value="allowExtraEmails"
                    color="primary"
                  />
                }
                label="Show passwords"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            className={classes.submitButton}
            //disabled={loading}
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Typography color="textSecondary">
            Already have an account?
            <Link to="/login" className={classes.loginLink}>
              Sign In
            </Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
};

export default Register;
