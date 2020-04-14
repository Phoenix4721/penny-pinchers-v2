import React from "react";
import {
  BrowserRouter as Router,

  useHistory,

} from "react-router-dom";
import fakeAuth from '../utils/authContext'


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
        <button onClick={login} type="submit">Log in</button>
      </div>
    );
  }

  export default LoginPage