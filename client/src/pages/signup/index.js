import React, { useState } from 'react'
import API from '../../utils/API'
import { withGlobalState } from 'react-globally'

function Home() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCon, setPasswordCon] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (password !== passwordCon) {
  
        } else {
            API.createUser({
                username: username,
                email: email,
                password: password
            })
            .then(() => {
                document.getElementById("create-course-form").reset()
            })
        }
    };

    return (
         <div>
  
                <div>
                
                <form id="create-course-form" className="signUpForm" onSubmit={handleSubmit}>
                <h1 className="h3">Sign up</h1>
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required 
                    onChange = {e => setEmail(e.target.value) }
                    />

                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    required 
                    onChange = {e => setUsername(e.target.value) }
                    />

                    <input 
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password-input"
                    required
                    onChange = {e => setPassword(e.target.value) }
                    />   

                    <input 
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                    id="passwordCon-input"
                    name="confirm password"
                    required 
                    onChange = {e => setPasswordCon(e.target.value)}
                    />  

                    <button type="submit" className="subBut" >Sign Up</button>
        
                    <a className="signUp" href="/">Login</a>

                </form>

                </div>
        </div>
    )   
}

export default withGlobalState(Home)