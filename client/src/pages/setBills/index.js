import React from "react";
import fakeAuth from '../../utils/authContext'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'
import { Form  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './setbill.css'
import SetBillsDrop from '../../components/Dropdowns/setBillsDrop';
import NavBar from '../../components/NavBar'
import logo from "../member/white-logo.png"


function SetBills () {
  let history = useHistory();
  
  Cookies.set('url', '/setBills', { path: '' })
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
        <SetBillsDrop/>
      </Form>
      <img className="logo" style={{marginTop: '160px'}} src={logo}></img> 
    </div>
  </body>
)   

}

export default withGlobalState(SetBills)
