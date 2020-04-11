import React from "react";
import {
  BrowserRouter as Router,

  useHistory,
  useLocation
} from "react-router-dom";
import fakeAuth from '../utils/authContext'


  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <button onClick={login} type="submit">Log in</button>
      </div>
    );
  }

  export default LoginPage