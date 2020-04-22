import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import API from '../../utils/API'
import { withGlobalState } from 'react-globally'
import "./member.css"
import logo from "./white-logo.png"
import NavBar from '../../components/NavBar'
import Sidenav from '../../components/SideNav'

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:7001');

function Member(props) {
  Cookies.set('url', '/member', { path: '' })
    const [user, setUser] = useState('')
    
    useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.userId
        })
        .then(res => {
            setUser(res.data[0].username)
        })
    }, [])

    return (
        <body className="main-body">

          <NavBar />

          <Sidenav/>
        <div className="member-div">
            <p className="main-div">Welcome! {user}<span className="name"></span></p>

        </div>
        <img className="logo" src={logo}></img>
      </body>
    )   
}

export default withGlobalState(Member)