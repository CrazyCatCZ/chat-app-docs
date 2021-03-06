import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

import { axiosInstance } from "../axios";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
    marginTop: theme.spacing(1),
  },
  submitButton: {
    color: "white",
    margin: theme.spacing(2, 0, 2),
    background: "#00b2ff",
    "&:hover": {
      background: "#00b2ff",
    },
  },
  formBottom: {
    width: "100%",
  },
  registerLink: {
    color: "#1976D2",
    marginLeft: 5,
    textDecoration: "none",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [failedToLogin, setFailedToLogin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setFailedToLogin(false);

    axiosInstance
      .post("users/token-auth/", {
        username,
        password,
      })
      .catch((err) => {
        const res = err.response;
        setFailedToLogin(true);

        if (res.status === 400) {
          console.log("Unable to log in with provided credentials.");
        } else if (res.status === 401) {
          console.log("Wrong credentials");
        }
      })
      .then((res) => {
        if (res && res.status === 200) {
          const {
            data: { token },
          } = res;

          // Set token
          Cookies.set("token", token);
          axiosInstance.defaults.headers["Authorization"] = "Token " + token;

          // Redirect
          history.push("/");
          window.location.reload();
        } else {
          setFailedToLogin(true);
        }
      });
  };

  return (
    <form onSubmit={login}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            InputLabelProps={{ required: false }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            error={failedToLogin ? true : false}
            helperText={
              /* Handle bad login  */
              failedToLogin ? "Username or password is incorrect" : ""
            }
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            InputLabelProps={{ required: false }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            //disabled={loading}
            className={classes.submitButton}
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <div className={classes.formBottom}>
            <Typography color="textSecondary">
              Don't have an account?
              <Link to="/register" className={classes.registerLink}>
                Sign Up
              </Link>
            </Typography>
          </div>
        </div>
      </Container>
    </form>
  );
};

export default SignIn;
