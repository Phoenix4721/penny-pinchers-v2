import React from "react";
import { useHistory } from "react-router-dom";
import fakeAuth from '../utils/authContext'
import "./logout-btn.css"

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      {/* Welcome!{" "} */}
      <a className=" list-group-item list-group-item-action logout-btn"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
      <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-sign-out fa-fw mr-3"></span>
          <span class="menu-collapsed">Log out</span>
      </div>
      </a>
    </p>
  ) : (
    undefined
  );
}

export default AuthButton