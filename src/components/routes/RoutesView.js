import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Signup, MealPlanContainer } from '../containers';

const RoutesView = (props) => {
  const { isLoggedIn } = props;
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
          <Route exact path="/" component={MealPlanContainer} />
          </Switch>
      )}

      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  );
};

export default RoutesView;
