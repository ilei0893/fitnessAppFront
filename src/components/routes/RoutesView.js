import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MealPlanContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={MealPlanContainer} />
    </Switch>
  )
}

export default RoutesView;
