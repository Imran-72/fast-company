import React from "react";
import { Switch, Route, Redirect } from "react-router";
import NavBar from "./components/ui/navBar";
import Users from "./layout/users";
import Main from "./layout/main";
import Login from "./layout/login";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId?" exact component={Users} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
