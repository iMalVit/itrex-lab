import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  redirectPath,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
};

export default PrivateRoute;
