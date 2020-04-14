import React, { useRef } from 'react'
import API from '../../utils/API'

function Home() {
    //states for username and password
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordCon = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (password.current.value !== passwordCon.current.value) {
  
        } else {
            API.createUser({
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            })
            
        }

      };


    return (
         <div>
  
                <div>
                
                <form className="signUpForm" onSubmit={handleSubmit}>
                <h1 className="h3">Sign up</h1>
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required ref={email}
                    />

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
                    id="password-input"
                    required ref={password}
                    />   

                    <input 
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                    id="passwordCon-input"
                    name="confirm password"
                    required ref={passwordCon}
                    />  

                    <button type="submit" className="subBut" >Sign Up</button>
        
                    <a className="signUp" href="/">Login</a>

                </form>

                </div>
        </div>
    )   
}

export default Home