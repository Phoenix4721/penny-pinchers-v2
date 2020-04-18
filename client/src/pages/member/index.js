import React, { useEffect, useState } from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import API from '../../utils/API'
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'
import "./member.css"
import logo from "./white-logo.png"


function Member(props) {

    const [user, setUser] = useState('')
    
    let history = useHistory();
    
    useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.userId
        })
        .then(res => {
            setUser(res.data[0].username)
        })
    }, [])

    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
      });
    };

    return (
        <body className="main-body">
        <div className="member-div">
            <p className="main-div">Welcome! {user}<span className="name"></span></p>
            <button className="setbills-btn" onClick={() => {login('/setBills')}}>Set Your Bills</button>
            <LogOut />
        </div>
        <img className="logo" src={logo}></img>
      </body>
    )   
}

export default withGlobalState(Member)