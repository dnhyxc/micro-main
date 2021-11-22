import React from "react";
import { Route, Switch, routerRedux, Redirect } from "dva/router";
import Login from "@/routes/login";
import App from "./routes/app";

const { ConnectedRouter } = routerRedux;

let cookie = "";

const RouterConfig = ({ history }: any) => {
  if (!cookie) {
    <Redirect to="/login" />;
  }
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dnhyxc/react" component={App} />
        <Route path="/dnhyxc" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  );
};

export default RouterConfig;
