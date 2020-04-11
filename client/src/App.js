import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Member from "./pages/member"

import fakeAuth from './utils/authContext'


function App() {
function PrivateRoute({ children, ...rest }) {

    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  return (
   
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route  path="/login">
          <Home />
        </Route>
        <Route  path="/signup">
          <Signup />
        </Route>
        <PrivateRoute  path="/member">
          <Member />
        </PrivateRoute>
        </Switch>
      </div>
    </Router>
 
  );
  
}

export default App;