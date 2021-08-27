import React, { useState, useEffect } from "react";
import "./Bootstrap.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { axiosInstance } from "./components/axios";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat/Chat";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      await axiosInstance
        .get("users/current-user/")
        //.catch(() => {})
        .then((res) => {
          if (res) {
            const {
              data: { username },
            } = res;

            setUser(username);
          }
        });
    };
    fetchUser();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00b2ff",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/" component={Chat} exact />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
