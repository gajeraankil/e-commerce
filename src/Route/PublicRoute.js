import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../Utils/index";

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isLogin() && restricted ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </>
  );
};

export default PublicRoute;
