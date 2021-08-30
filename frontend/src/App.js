import React, { useState, useEffect, useMemo } from "react";
import "./Bootstrap.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { axiosInstance } from "./components/axios";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import { UserContext } from "./components/Contexts/UserContexts";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat/Chat";

function App() {
  const [user, setUser] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

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

  console.log(user);

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
        <UserContext.Provider value={userValue}>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/" component={Chat} exact />
          </Switch>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
