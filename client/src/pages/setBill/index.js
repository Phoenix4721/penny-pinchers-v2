import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'

function SetBills(props) {
    let history = useHistory();

    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
        
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

export default withGlobalState(SetBills)