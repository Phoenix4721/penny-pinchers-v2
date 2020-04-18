import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import {
    BrowserRouter as Router,   
    useHistory,  } from "react-router-dom";  
    
import { InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './setbill.css'
  
  function SetBills() {    
    
    return (
    <Form>
      <body className="main-body">
        <div>
            <h1 className="text-center">Set Your Budgets<span className="name"></span></h1>   
        </div>
        <Row form className="justify-content-md-center">
        <Col md={6}>
        <Label for="exampleNumber">Groceries</Label>
      <InputGroup className="setbill-input">
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Enter your grocery budget" min={0} max={1000} type="number" step="1" required />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <Button className="setbill-btn" color="secondary" size="sm">Submit</Button>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
        <Label for="exampleNumber">Transportation</Label>
      <InputGroup className="setbill-input">
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Enter your transportation budget" min={0} max={1000} type="number" step="1" required/>
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <Button className="setbill-btn" color="secondary" size="sm">Submit</Button>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
        <Label for="exampleNumber">Dining</Label>
      <InputGroup className="setbill-input">
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Enter your dining budget" min={0} max={1000} type="number" step="1" required/>
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <Button className="setbill-btn" color="secondary" size="sm">Submit</Button>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
        <Label for="exampleNumber">Shopping</Label>
      <InputGroup className="setbill-input">
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Enter your shopping budget" min={0} max={1000} type="number" step="1" required/>
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <Button className="setbill-btn" color="secondary" size="sm">Submit</Button>
        </Col>
      </Row>
      <LogOut />
      </body>
    </Form>
    )   
}export default SetBills