import React, { useState } from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'
import { InputGroup, InputGroupAddon, Col, Row, Button, Form, Label, Input,  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import './setbill.css'
import SetBillsDrop from '../../components/Dropdowns/setBillsDrop';



function SetBills (props) {
  let history = useHistory();
  const [billState, setBill] = useState({
    groceries: 0,
    transportation: 0,
    dining: 0,
    shopping: 0
  })
  Cookies.set('url', '/setBills', { path: '' })
  let login = (site) => {
    fakeAuth.authenticate(() => {
      history.replace(site);
      
    });
  };

  function handleChange (event) {
      setBill({ ...billState,  ...{ [event.target.name]: Number(event.target.value) } })
    }

    function handleSubmit (event) {
      event.preventDefault()
        var data
         = {
          groceries: billState.groceries,
          transportation: billState.transportation,
          dining: billState.dining,
          shopping: billState.shopping
        }
        console.log(data)
      API.bills({
          groceries: billState.groceries,
          transportation: billState.transportation,
          dining: billState.dining,
          shopping: billState.shopping
      })
} 

return (
  <Form>
    <SetBillsDrop/>
<LogOut />
</Form>
)   

}

export default withGlobalState(SetBills)
