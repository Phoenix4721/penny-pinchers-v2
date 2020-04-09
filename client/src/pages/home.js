import React, { useRef } from 'react'
import API from '../utils/API'


function Home() {
    //states for username and password
    const username = useRef();
    const password = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        API.login({
            username: username.current.value,
            password: password.current.value
        })
      };

 


    return (
        <div className="loginWrapper">
            <div className="loginHeadDiv">
                <h2 className='loginHead'>Log In</h2>
            </div>
            <form className="loginForm" onSubmit={handleSubmit}>
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

                <button className="btn" type="submit">
                Submit
                </button>       

            </form>

                <div className="signUpDiv">
                    <a className="signUp" href="/signup">Sign Up</a>
                </div>
        </div>
    )   
}

export default Home