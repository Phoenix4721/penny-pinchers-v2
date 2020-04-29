import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Member from "./pages/member"
import fakeAuth from './utils/authContext'
import SetBudget from "./pages/setBudget"
import SetBills from "./pages/setBills"
import ChatApp from './components/ChatApp/ChatApp.js';
import Leaderboard from './pages/Leaderboard/Leaderboard.js';
import Progress from './pages/Progress/index.js';



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
          <PrivateRoute  path="/setBudget">
            <SetBudget />
            
          </PrivateRoute>
          <PrivateRoute  path="/setBills">
            <SetBills />
        
          </PrivateRoute>
          <PrivateRoute  path="/leaderboard">
            <Leaderboard />

          </PrivateRoute>
          <PrivateRoute  path="/progress">
            <Progress />
           
          </PrivateRoute>
          </Switch>
          
        </div>

      </Router>
    
 
  );
  
}

export default App;