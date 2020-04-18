import React, { useState } from 'react'
import API from '../../utils/API'
import { withGlobalState } from 'react-globally'
import './style.css'

function Home() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCon, setPasswordCon] = useState('')
    const [progress, setProgress] = useState('')
    const [val, setVal] = useState(0)
    const [progBc, setProgBc] = useState('')

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

    function value(leng) {
            console.log(leng * 10)
            setVal(leng * 10)
            console.log(val)
            if(val >= 0) {
                setProgBc('red')
            } 
            if(val >= 40) {
                setProgBc('yellow')
            } 
            if(val >= 70) {
                setProgBc('green')
            } 
    }

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
                    onChange = {e => {
                        setPassword(e.target.value)
                        setProgress(e.target.value.length)
                        value(e.target.value.length)
                    }}
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

                    <div class="progressBar" style={{ opacity: progress > 0 ? 1 : 0}}>
                        <div class="progress" style={{ opacity: progress > 0 ? 1 : 0, width: `${val}%`, backgroundColor: `${progBc}` }}>
                        
                        </div>
                    </div>
                    
       
                    
                    <button type="submit" className="subBut" >Sign Up</button>
        
                    <a className="signUp" href="/">Login</a>

                </form>

                </div>
        </div>
    )   
}

export default withGlobalState(Home)