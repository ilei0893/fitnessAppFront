import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Signup, FoodContainer } from '../containers';

const RoutesView = (props) => {
  const { isLoggedIn, username } = props;
  return (
    <Switch>
      <Route exact path="/login" render={() => (
        isLoggedIn ? (
          <Redirect to="/food"/>
        ) : (
          <Login/>
        )
      )}/>

      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
          <Route exact path="/food" component={FoodContainer} />
          </Switch>
      )}
    </Switch>
  );
};

export default RoutesView;
