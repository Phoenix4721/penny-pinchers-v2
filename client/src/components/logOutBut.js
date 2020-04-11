import React from "react";
import {
  BrowserRouter as Router,
  
  useHistory,

} from "react-router-dom";
import fakeAuth from '../utils/authContext'

function AuthButton() {
    let history = useHistory();
  
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