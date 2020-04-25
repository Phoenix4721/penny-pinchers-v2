import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Col, Row, Button, Label, Input, InputGroup, InputGroupAddon, } from 'reactstrap';
import API from '../../utils/API';
import { withGlobalState } from 'react-globally'


const setBillsDrop = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [val, setVal] = useState('') //holds the value for the dropdown menu 
  const [show, setShow] = useState(false)
  const [bill, setBill] = useState('')
  let lowerProp = val.toLowerCase()

  const toggle = () => setOpen(!dropdownOpen);

  function clicked(val) {
        setVal(val)
        setShow(true)
  }

  function onClick() {
    console.log(bill)
    API.bills({
      val: lowerProp, bill: bill, user: props.globalState.user.userId
  })
    setBill('')
  }

  function onChange(event) {
    setBill (Number(event.target.value))
  }

  return (
      <Form>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {show ? val : 'Set Your Bills'}
       
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => clicked('Groceries')}>Grocery</DropdownItem>
        <DropdownItem onClick={() => clicked('Transportation')}>Transportation</DropdownItem>
        <DropdownItem onClick={() => clicked('Dining')}>Dining</DropdownItem>
        <DropdownItem onClick={() => clicked('Shopping')}>Shopping</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    <Row form className="justify-content-md-center">
            <Col md={6}>
              <Label for="exampleNumber">{val} Bills</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input name={lowerProp} placeholder="Enter the amount" min={0} max={1000} type="number" step="1" value={bill} onChange={(event) => onChange(event)} />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <Button color="secondary" size="sm" onClick={() => onClick()} method="user" className="right">Add Bill</Button>
            </Col>
          </Row>
    </Form>
  );
}

export default withGlobalState(setBillsDrop);
