import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './views/login';
// import Register from './routes/register';
import Back from './components/layout/Layout';

class TsuiRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route
          component={Login}
          exact
          path="/login"
        >
        </Route>
        {/* <Route
          component={Register}
          path="/register"
        >
        </Route> */}
        <Route
          component={Back}
          path="/back"
        >
        </Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    );
  }
}

export default TsuiRouter;