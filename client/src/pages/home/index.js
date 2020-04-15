import React, { useRef, useEffect } from 'react'
import API from '../../utils/API'
import LogBut from '../../components/logBut'
import Cookies from 'js-cookie'


function Home() {

    const username = useRef();
    const password = useRef();

    
    const handleSubmit = e => {
        e.preventDefault();
        API.login({
            username: username.current.value,
            password: password.current.value
        })
        .then(res => {
            Cookies.set('userId', res.data, { path: '' })

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