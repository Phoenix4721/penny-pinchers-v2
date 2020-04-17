import React from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import {
    BrowserRouter as Router,    useHistory,  } 
    from "react-router-dom";  
    
import { Col, Row, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
  
  function SetBills() {    return (
    <Form>
        <div>
            <h1 className="text-center">Please enter your budgets<span className="name"></span></h1>   
        </div>
      <Row form className="justify-content-md-center">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleNumber">Groceries</Label>
            <Input type="number" name="number" id="exampleNumber" placeholder="Enter your grocery budget" />
            <Button color="secondary" size="sm">Submit</Button>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleNumber">Transportation</Label>
            <Input type="number" name="number" id="exampleNumber" placeholder="Enter your transportation budget" />
            <Button color="secondary" size="sm">Submit</Button>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleNumber">Dining</Label>
            <Input type="number" name="number" id="exampleNumber" placeholder="Enter your dining budget" />
            <Button color="secondary" size="sm">Submit</Button>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleNumber">Shopping</Label>
            <Input type="number" name="number" id="exampleNumber" placeholder="Enter your shopping budget" />
            <Button color="secondary" size="sm">Submit</Button>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="justify-content-md-center">
        <Col md={6}>
        <Label for="exampleNumber">Shopping</Label>
      <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Enter your shopping budget" min={0} max={1000} type="number" step="1" />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <Button color="secondary" size="sm">Submit</Button>
        </Col>
      </Row>
      <LogOut />
    </Form>
    )   
}

export default SetBills