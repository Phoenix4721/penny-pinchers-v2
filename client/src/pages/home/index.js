import React, { useRef, useEffect, useState } from 'react'
import API from '../../utils/API'
import LogBut from '../../components/logBut'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import fakeAuth from '../../utils/authContext'


function Home() {
    // const username = useRef();
    // const password = useRef();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    let un = Cookies.get('userUn')
    let pw = Cookies.get('userPw')
    let url = Cookies.get('url')
    
    let history = useHistory();
    
    useEffect(() => {
      
        if (un && pw) {
           
            API.login({
                username: un,
                password: pw
            })
            .then(() => {
                fakeAuth.authenticate(() => {
                    history.replace(url);
                 
                  });
            })

            .catch(err => {
                if (err) {
                    throw err
                }
            })
        } else {
            return
        }
        

    }, [])
    
    function handleSubmit(e) {
        e.preventDefault();

        API.login({
            username: username,
            password: password
        })
        .then(res => {
            console.log(res.data)
            Cookies.set('userId', res.data.userId, { path: '' })
            Cookies.set('userUn', res.data.username, { path: '' })
            Cookies.set('userPw', password, { path: '' })
        })
        .catch(err => {
            if (err) {
                throw err
            }
        })
    };

 return (
     <div>

        <div>
            <form className="loginForm" onSubmit={handleSubmit}>
            <h1 className="h3">Sign in</h1>
                <input 
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                required 
                onChange={e => setUsername(e.target.value)}
                />

                <input 
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                required 
                onChange={e => setPassword(e.target.value)}
                />   

                <LogBut />     
                <a className="signUp" href="/signup">Sign Up</a>
            </form>

        
        </div>
        </div>
       
    )   
}

export default Home