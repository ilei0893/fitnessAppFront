import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Signup, FoodContainer, NavBarContainer } from '../containers';

const RoutesView = (props) => {
  const { isLoggedIn, username } = props;
  return (
    <Switch>
      <Route exact path="/login" render={() => (
        isLoggedIn ? (
          <div className = "food">
            <Redirect to="/food"/>
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
            <NavBarContainer isLoggedIn = {isLoggedIn}/>
            <Route exact path="/food" component={FoodContainer} />
          </>
          </Switch>
      )}
    </Switch>
  );
};

export default RoutesView;
