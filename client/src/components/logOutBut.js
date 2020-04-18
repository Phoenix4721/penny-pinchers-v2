import React from "react";
import { useHistory } from "react-router-dom";
import fakeAuth from '../utils/authContext'
import "./logout-btn.css"

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      {/* Welcome!{" "} */}
      <button className="logout-btn"
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