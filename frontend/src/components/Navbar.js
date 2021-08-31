import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { UserContext } from "./Context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
    "&:hover": {
      color: "#fff",
    },
  },
  title: {
    cursor: "pointer",
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useContext(UserContext);

  const logout = () => {
    history.push("/login");
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <div className={`${classes.root} main-navbar`}>
      <AppBar position="fixed" style={{ color: "white" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Chat
            </Link>
          </Typography>
          {user ? (
            <Button onClick={logout} color="inherit">
              <Link className={classes.link} to="/login">
                Logout
              </Link>
            </Button>
          ) : (
            <>
              <Button color="inherit">
                <Link className={classes.link} to="/login">
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={classes.link} to="/register">
                  Register
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
