import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import {
    BrowserRouter as Router,
  
    useHistory,
  
  } from "react-router-dom";
  import Cookies from 'js-cookie'

function SetBills() {
    let history = useHistory();
    //console.log(Cookies.get('userId'))
    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
        console.log(history)
      });
    };




    return (
        <div>
            <p>hello Set Your Bills <span className="name"></span></p>
            <button onClick={() => {login('/member')}}>Set Your Bills</button>
            <LogOut />
        </div>
    )   
}

export default SetBills