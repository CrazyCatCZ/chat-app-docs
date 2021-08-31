import React, { useState, useEffect, useMemo } from "react";
import "./Bootstrap.css";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { axiosInstance } from "./components/axios";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import { UserContext } from "./components/Context/UserContext";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat/Chat";

function App() {
  const [user, setUser] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [loading, setLoading] = useState(false);

  const redirectLink = user && loading === false ? "/" : "/login";

  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
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
        <UserContext.Provider value={userValue}>
          <Switch>
            {user && loading === false ? (
              <>
                <Navbar />
                <Route path="/" component={Chat} />
              </>
            ) : (
              <>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </>
            )}
          </Switch>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
