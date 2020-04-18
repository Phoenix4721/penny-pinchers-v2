import React, { useRef, useContext } from 'react'
import API from '../../utils/API'
import LogBut from '../../components/logBut'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from "../logo2.png"
import "./home.css"



function Home() {

    const username = useRef();
    const password = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        API.login({
            username: username.current.value,
            password: password.current.value
        })

        .catch(err => {
            if (err) {
                throw err
            }
        })
      };

 return (

    
    <body className="main-body" >
    <Form className="loginForm" onSubmit={handleSubmit}>
    <h1 className="h3"><img className="logo" src={logo}></img></h1>
      <FormGroup className="form-group">
        
        <label for="username">
            
        </label>
        <Input className="form-control username-input" type="username" name="username" id="username" placeholder="Enter Username" required ref={username} />
        <Input className="form-control password-input" type="password" name="password" id="password" placeholder="Enter Password" required ref={password} />

      </FormGroup>

      <LogBut />  
      {/* <Button>Submit</Button> */}
      <div className="signup-div">
        <a className="signUp" href="/signup" >Sign up</a>
        <a className="github-link" href="https://github.com/Phoenix4721/penny-pinchers-v2">Github</a>
      </div>
    </Form>
    </body>  
    )   
}

export default Home