import React from "react";
import {
  BrowserRouter as Router,

  useHistory,

} from "react-router-dom";

import fakeAuth from '../utils/authContext'
import './log-btn.css'



  function LoginPage() {
    let history = useHistory();
 
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace('/member');
        console.log(history)
      });
    };
  
    return (
      <div>
        <button onClick={login} type="submit" className="log-btn">Log in</button>
      </div>
    );
  }

  export default LoginPage