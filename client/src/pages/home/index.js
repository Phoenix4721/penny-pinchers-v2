import React, { useRef, useEffect } from 'react'
import API from '../../utils/API'
import LogBut from '../../components/logBut'
import Cookies from 'js-cookie'
import {
    BrowserRouter as Router,
  
    useHistory,
  
  } from "react-router-dom";
  import fakeAuth from '../../utils/authContext'


function Home() {

    const username = useRef();
    const password = useRef();
    console.log(Cookies.get('userId'))
    let un = Cookies.get('userUn')
    let pw = Cookies.get('userPw')
    let history = useHistory();
    let url = Cookies.get('url')

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
    
    const handleSubmit = e => {
        e.preventDefault();
        API.login({
            username: username.current.value,
            password: password.current.value
        })
        .then(res => {
            Cookies.set('userId', res.data.id, { path: '' })
            Cookies.set('userUn', res.data.username, { path: '' })
            Cookies.set('userPw', password.current.value, { path: '' })


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
                required ref={username}
                />

                <input 
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                required ref={password}
                />   

       

                <LogBut />     
                <a className="signUp" href="/signup">Sign Up</a>
            </form>

        
        </div>
        </div>
       
    )   
}

export default Home