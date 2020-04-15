import React from "react";
import {
  BrowserRouter as Router,
  
  useHistory,

} from "react-router-dom";
import fakeAuth from '../utils/authContext'
import Cookies from 'js-cookie'
function AuthButton() {
    let history = useHistory();

    Cookies.set('userId', undefined)
  
    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }

  export default AuthButton