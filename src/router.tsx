import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import Login from '@/routes/login';
import App from './routes/app';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history }: any) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {location.pathname.includes('login') && (
          <Route path="/login" component={Login} />
        )}
        <Route path="/dnhyxc/react" component={App} />
        <Route path="/dnhyxc" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  );
};

export default RouterConfig;
