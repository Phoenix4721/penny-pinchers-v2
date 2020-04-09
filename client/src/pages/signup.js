import React, { useRef } from 'react'
import API from '../utils/API'

function Home() {
    //states for username and password
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordCon = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (password.current.value !== passwordCon.current.value) {
            console.log('no dice')
        } else {
            API.createUser({
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            })
            
        }

      };


    return (
        <div className="signUpWrapper">
            <div className="signUpHeadDiv">
                <h2 className='signUpHead'>Log In</h2>
            </div>
            <form className="signUpForm" onSubmit={handleSubmit}>

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
                required ref={password}
                />   

                <input 
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                name="confirm password"
                required ref={passwordCon}
                />  

                <button className="btn" type="submit">
                Submit
                </button>       

            </form>

                <div className="loginDiv">
                    <a className="login" href="/">Login</a>
                </div>
        </div>
    )   
}

export default Home