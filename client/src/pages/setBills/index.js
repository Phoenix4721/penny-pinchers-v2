import React, { useState } from "react";
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'
import { InputGroup, InputGroupAddon, Col, Row, Button, Form, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import './setbill.css'
import NavBar from '../../components/NavBar'
import Sidenav from '../../components/SideNav'

function SetBills () {
  let history = useHistory();
  const [billState, setBill] = useState({
    groceries: 0,
    transportation: 0,
    dining: 0,
    shopping: 0
  })
  Cookies.set('url', '/setBills', { path: '' })

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
  <body className="main-body">
    <NavBar />

    
  <Form>
  <div>
      <h1 className="text-center">Please enter your bills<span className="name"></span></h1>   
  </div>
  <Row form className="justify-content-md-center">
  <Col md={6}>
  <Label for="exampleNumber">Grocery Bills</Label>
<InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input name="groceries" placeholder="Enter the amount of your grocery bills" min={0} max={1000} type="number" step="1" onChange={handleChange} />
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
</InputGroup>
{/* <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit</Button> */}
  </Col>
</Row>
<Row form className="justify-content-md-center">
  <Col md={6}>
  <Label for="exampleNumber">Transportation Bills</Label>
<InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input name="transportation" placeholder="Enter the amount of your transportation bills" min={0} max={1000} type="number" step="1" onChange={handleChange} />
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
</InputGroup>
{/* <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit</Button> */}
  </Col>
</Row>
<Row form className="justify-content-md-center">
  <Col md={6}>
  <Label for="exampleNumber">Dining Bills</Label>
<InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input name="dining" placeholder="Enter the amount of your dining bills" min={0} max={1000} type="number" step="1" onChange={handleChange}/>
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
</InputGroup>
{/* <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit</Button> */}
  </Col>
</Row>
<Row form className="justify-content-md-center">
  <Col md={6}>
  <Label for="exampleNumber">Shopping Bills</Label>
<InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input name="shopping" placeholder="Enter the amount of your shopping bills" min={0} max={1000} type="number" step="1" onChange={handleChange}/>
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
</InputGroup>
<Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Add Bills</Button>
  </Col>
</Row>


</Form>
</body>
)   

}

export default withGlobalState(SetBills)