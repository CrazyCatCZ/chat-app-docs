import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        user && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
