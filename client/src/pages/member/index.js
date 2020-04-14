import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import {
    BrowserRouter as Router,
  
    useHistory,
  
  } from "react-router-dom";

function Member() {
    let history = useHistory();
 
    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
        console.log(history)
      });
    };


    return (
        <div>
            <p>hello <span className="name"></span></p>
            <button onClick={() => {login('/setBills')}}>Set Your Bills</button>
            <LogOut />
        </div>
    )   
}

export default Member