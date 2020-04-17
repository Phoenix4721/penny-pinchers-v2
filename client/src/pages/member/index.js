import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import "./member.css"
import logo from "./basic-logo.png"

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
      <body className="main-body">
        <div>
            <p className="main-div">Welcome!<span className="name"></span></p>
            <button className="setbills-btn" onClick={() => {login('/setBills')}}>Set Your Bills</button>
            <LogOut />
        </div>
        <img className="logo" src={logo}></img>
      </body>
    )   
}

export default Member