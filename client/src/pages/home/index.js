import React, { useState } from 'react'
import API from '../../utils/API'
import { useHistory } from "react-router-dom";
import fakeAuth from '../../utils/authContext'
import { withGlobalState } from 'react-globally'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, FormGroup, Label, Input, FormText, Progress } from 'reactstrap';
import logo from "../logo2.png"
import "./home.css"

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
        .then(res => {
            if (res) {
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
                console.log('noooo')
            }
        })
    };

 return (
    <body className="main-body" >
      <Form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="h3"><img className="logo" src={logo}></img></h1>
             <FormGroup className="form-group">
  
                <Input
                className="form-control username-input"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                required 
                onChange={e => setUsername(e.target.value)}
                />

                <Input
                className="form-control password-input"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required 
                onChange={e => setPassword(e.target.value)}
                />   
            </FormGroup> 
            <div>   
                <button type='submit' className='log-btn'>Log In</button>    
            </div>
                <div className="signup-div">
                    <a className="signUp" href="/signup" >Sign up</a>
                    <a className="github-link" href="https://github.com/Phoenix4721/penny-pinchers-v2">Github</a>
                </div>
            </Form>
    </body>
       
    )   
}

export default withGlobalState(Home)