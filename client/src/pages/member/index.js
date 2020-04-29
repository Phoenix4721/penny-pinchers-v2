import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import API from '../../utils/API'
import { withGlobalState } from 'react-globally'
import "./member.css"
import NavBar from '../../components/NavBar'
import RecentBills from "../../components/RecentBills";




// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:7001');

function Member(props) {
  Cookies.set('url', '/member', { path: '' })
    const [user, setUser] = useState('')
    const [notes, setNotes] = useState()
    
    useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.userId
        })
        .then(res => {
            setUser(res.data[0].username)
        })
    }, [])

    return (
        <div className="main-body">

          <NavBar />
        <div className="member-div">
            <p className="main-div">Welcome, {user}!<span className="name"></span></p>
        </div>
        
        <div className="bills-div">
          <div className="bills-span">
            <h1 className="recent-header">Your Recent Bills</h1>
          </div>
          <RecentBills notes={notes} />
        </div>
        {/* <img className="logo" src={logo}></img> */}
      </div>
    )   
}

export default withGlobalState(Member)