import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '@/routes/login';
import Register from '@/routes/register/Register';

class TsuiRouter extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route
            component={Login}
            exact
            path="/login"
          >
          </Route>
          <Route
            component={Register}
            path="/regiter"
          >
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default TsuiRouter;