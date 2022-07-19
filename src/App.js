import React from "react";
import { Redirect, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./Containers/Cart";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} restricted={true} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
