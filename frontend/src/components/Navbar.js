import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={`${classes.root} main-navbar`}>
      <AppBar position="static" style={{ color: "white" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chat
          </Typography>
          <Button color="inherit">Logout</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;