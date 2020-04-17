import React, { useEffect, useState } from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import API from '../../utils/API'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

function Member() {
    const [user, setUser] = useState('')
    
    let history = useHistory();
    
    let cooks = Cookies.get('userId')
    console.log(cooks)
    Cookies.set('url', '/member', { path: '' })
    
    useEffect(() => {

        API.userGreeting({
            id: Number(cooks)
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
        <div>
            <p>hello {user} <span className="name"></span></p>
            <button onClick={() => {login('/setBills')}}>Set Your Bills</button>
            <LogOut />
        </div>
    )   
}

export default Member