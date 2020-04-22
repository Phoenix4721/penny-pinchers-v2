import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { useHistory } from "react-router-dom";
import fakeAuth from '../../utils/authContext'
import { withGlobalState } from 'react-globally'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cookies from 'js-cookie'
import { Form, FormGroup, Input, Alert } from 'reactstrap';
import logo from "../logo2.png"
import "./home.css"

function Home(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let un = Cookies.get('userUn')
    let pw = Cookies.get('userPw')
    let history = useHistory();
    let url = Cookies.get('url')

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
            Cookies.set('userUn', username, { path: '' })
            Cookies.set('userPw', password, { path: '' })   
        })
        .then(() => {
            fakeAuth.authenticate(() => {
                history.replace('/member');
             });
        })
        .catch(err => {
            if (err) {
                setAlert({
                    text:  "Uh oh! Email or Password is Incorrect!",
                    there:  true,
                    type: 'danger'
                  })
            }
        })
    };

    useEffect(() => {
        
          if (un && pw) {
            API.login({
                username: un,
                password: pw
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

    const [alertText, setAlert] = useState({
        text: '',
        there: false,
        type: ''
    })



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
            
            <div>   
                <button type='submit' className='log-btn'>Log In</button>    
            </div>
            <Alert color={alertText.type} style={{ opacity: !alertText.there ? 0 : 1}}>
                        {alertText.text}
            </Alert>
            </FormGroup> 
                <div className="signup-div">
                    <a className="signUp" href="/signup" >Sign up</a>
                    <a className="github-link" target="_blank" href="https://github.com/Phoenix4721/penny-pinchers-v2">Github</a>
                </div>
            </Form>
    </body>
       
    )   
}

export default withGlobalState(Home)