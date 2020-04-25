import React, { useState } from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { InputGroup, InputGroupAddon, Col, Row, Button, Form, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import SetBudgetDrop from '../../components/Dropdowns/budgetDrop/setBudgetDrop'



// Dustin Was Here
function SetBudget (props) {
    let history = useHistory();
    const [groceryState, setGrocery] = useState({
      groceriesBudget: 0,
      transportationBudget: 0,
      diningBudget: 0,
      shoppingBudget: 0
    })
    Cookies.set('url', '/setBudget', { path: '' })
    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
        
      });
    };

   function handleChange (event) {
      setGrocery({ ...groceryState,  ...{ [event.target.name]: Number(event.target.value) } })
    }

   function handleSubmit (event) {
      event.preventDefault()
        var data = {
          groceriesBudget: groceryState.groceriesBudget,
          transportationBudget: groceryState.transportationBudget,
          diningBudget: groceryState.diningBudget,
          shoppingBudget: groceryState.shoppingBudget
        }
        console.log(data)
        API.budget({
          groceriesBudget: groceryState.groceriesBudget,
          transportationBudget: groceryState.transportationBudget,
          diningBudget: groceryState.diningBudget,
          shoppingBudget: groceryState.shoppingBudget
        })
  } 

  return (
    <Form>
      <SetBudgetDrop/>
  <LogOut />
  </Form>
  )   

    }
  
export default SetBudget