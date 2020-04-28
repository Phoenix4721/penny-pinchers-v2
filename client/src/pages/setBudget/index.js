import React from "react";
import fakeAuth from '../../utils/authContext'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SetBudgetDrop from '../../components/Dropdowns/budgetDrop/setBudgetDrop';
import NavBar from '../../components/NavBar'
import logo from "../member/white-logo.png"


// Dustin Was Here, not anymore
function SetBudget () {
    let history = useHistory();
    
    Cookies.set('url', '/setBudget', { path: '' })
    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
        
      });
    };

  return (
    <body className="main-body">
    <div>
        <NavBar />
      <Form>
        <SetBudgetDrop/>
      </Form>
    </div>
    <img className="logo" style={{marginTop: '160px'}} src={logo}></img>
  </body>
  )   

  }
  
export default SetBudget