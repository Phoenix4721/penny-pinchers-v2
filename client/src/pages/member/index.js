import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import API from '../../utils/API'
import { withGlobalState } from 'react-globally'
import "./member.css"
import logo from "./white-logo.png"
import NavBar from '../../components/NavBar'
import Sidenav from '../../components/SideNav'
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { MDBProgress } from 'mdbreact'
import RecentBills from "../../components/RecentBills";
import ProgressBars from '../../components/ProgressBars'



// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:7001');

function Member(props) {
  Cookies.set('url', '/member', { path: '' })
    const [user, setUser] = useState('')
    const [notes, setNotes] = useState()
    const [groc, setGroc] = useState(0)
    const [trans, setTrans] = useState(0)
    const [dine, setDine] = useState(0)
    const [shop, setShop] = useState(0)

    
    useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.userId
        })
        .then(res => {
            setGroc(res.data[0].groceries/res.data[0].GroceriesBudget * 100)
            setTrans(res.data[0].transportation/res.data[0].TransportationBudget * 100)
            setDine(res.data[0].dining/res.data[0].DiningBudget * 100)
            setShop(res.data[0].shopping/res.data[0].ShoppingBudget * 100)
            setUser(res.data[0].username)
        })
        
    }, [])

    return (
        <body className="main-body">

          <NavBar />
        <div className="member-div">
            <p className="main-div">Welcome, {user}!<span className="name"></span></p>
        </div>
        <ProgressBars groc = {groc} trans = {trans} dine = {dine} shop = {shop} />
        <div className="bills-div">
          <div className="bills-span">
            <h1 className="recent-header">Your Recent Bills</h1>
          </div>
          <RecentBills notes={notes} />
        </div>
        {/* <img className="logo" src={logo}></img> */}
      </body>
    )   
}

export default withGlobalState(Member)