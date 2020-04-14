import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import {
    BrowserRouter as Router,
  
    useHistory,
  
  } from "react-router-dom";

function SetBills() {



    return (
        <div>
            <p>hello Set Your Bills <span className="name"></span></p>
           
            <LogOut />
        </div>
    )   
}

export default SetBills