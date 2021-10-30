import React from "react";
import { Switch, Route, Redirect } from "react-router";
import NavBar from "./components/navBar";
import Login from "./components/layout/login";
import Users from "./components/layout/users";
import Main from "./components/layout/main";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Route path="/users/:userId?" exact component={Users} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
