import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ExerciseView from '../views/ExerciseView';
import ExerciseContainer from '../containers/ExerciseContainer';
import { 
  Login,
  Signup,
  FoodContainer,
  NavBarContainer,
  FoodEntryContainer
} from '../containers';

const RoutesView = (props) => {
  const { isLoggedIn, username, foodEntryView } = props;
  return (
    <Switch>
      <Route exact path="/login" render={() => (
        isLoggedIn ? (
          <div className = "exercises">
            <Redirect to="/exercises"/>
          </div>
        ) : (
          <div className="login">
            <NavBarContainer isLoggedIn = {isLoggedIn}/>
            <Login/>
          </div>
        )
      )}/>

      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
          <>
            <NavBarContainer isLoggedIn = {isLoggedIn} foodEntryView = {foodEntryView}/>
            <Route exact path="/food" component={FoodContainer} />
            <Route exact path="/exercises" component={ExerciseContainer} />
          </>
          </Switch>
      )}
    </Switch>
  );
};

export default RoutesView;
