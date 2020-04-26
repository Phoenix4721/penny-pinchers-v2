import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Col, Row, Button, Label, Input, InputGroup, InputGroupAddon, } from 'reactstrap';
import API from '../../../utils/API'
import { withGlobalState } from 'react-globally'

const setBudgetDrop = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const [val, setVal] = useState('')
    const [show, setShow] = useState(false)
    const [budget, setBudget] = useState('')
    let lowerProp = val.replace(/ /g,'')
    
   

const toggle = () => setOpen(!dropdownOpen);

function clicked(val) {
  
    setVal(val)
    setShow(true)
}

function onClick() {
    console.log(budget)
    API.budget({
        val: lowerProp, budget: budget, user: props.globalState.user.userId
    })
    setBudget('')
}

function onChange(event) {
    setBudget (Number(event.target.value,))
}

return (
    <Form>
  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
    {show ? val : 'Set Your Budgets'}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem onClick={() => clicked('Groceries Budget')}>Grocery </DropdownItem>
      <DropdownItem onClick={() => clicked('Transportation Budget')}>Transportation </DropdownItem>
      <DropdownItem onClick={() => clicked('Dining Budget')}>Dining </DropdownItem>
      <DropdownItem onClick={() => clicked('Shopping Budget')}>Shopping </DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
  {show ?  
      
      <Row form className="justify-content-md-center">
              <Col md={6}>
                <Label for="exampleNumber"></Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      <Input name={lowerProp} placeholder="Enter the amount" min={0} max={1000} type="number" step="1" value={budget} onChange={(event) => onChange(event)} />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                  <Button  id="submit" color="secondary" size="sm" onClick={() => onClick()} method="user" className="right">Add Budget</Button>
              </Col>
            </Row>
      
    : undefined}
  </Form>
);
}

export default withGlobalState(setBudgetDrop);