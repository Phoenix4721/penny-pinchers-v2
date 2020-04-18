import React, { useState } from 'react'
import API from '../../utils/API'
import { useHistory } from "react-router-dom";
import fakeAuth from '../../utils/authContext'
import { withGlobalState } from 'react-globally'

function Home(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();

    
    function handleSubmit(e) {
        e.preventDefault();

        API.login({
            username: username,
            password: password
        })
        .then(async res => {
            if (res) {
                console.log(res.data)
            props.setGlobalState({
                user: res.data
            })
                 
            } else {
                return 
            }
        })
        .then(() => {
            fakeAuth.authenticate(() => {
                history.replace('/member');
             });
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
                
                <button type='submit'>Log In</button>    
                <a className="signUp" href="/signup">Sign Up</a>
            </form>

        
        </div>
        </div>
       
    )   
}

export default withGlobalState(Home)