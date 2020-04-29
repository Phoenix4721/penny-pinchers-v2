import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Col, Row, Button, Label, Input, InputGroup, InputGroupAddon, } from 'reactstrap';
import API from '../../utils/API';
import { withGlobalState } from 'react-globally'


const setBillsDrop = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [val, setVal] = useState('') //holds the value for the dropdown menu 
  const [show, setShow] = useState(false)
  const [bill, setBill] = useState('')
  const [billDesc, setBillDesc] = useState('')
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
    onClick2()
  }

  function onClick2() {
        API.addBills({
      billType: val,
      billAmount: bill,
      billDesc: billDesc,
      date: new Date(Date.now()).toLocaleString().split(',')[0],
      userId: props.globalState.user.userId
    })
    setBillDesc('')
  }

  function onChange(event) {
    setBill (Number(event.target.value))
  }

  function onChangeDesc(event) {
    setBillDesc (event.target.value)
  } 


  return (
      <Form>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
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
    {show ?  
    <div>
    <Row form className="justify-content-md-center">
            <Col md={6}>
              <Label for="exampleNumber"></Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input name={lowerProp} placeholder="Enter the amount" min={0} max={1000} type="number" step="1" value={bill} onChange={(event) => onChange(event)} />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <div>
                    <textarea style={{width:'300px', height:'60px'}} value={billDesc} onChange={(event) => onChangeDesc(event)}></textarea>
                </div>
                <Button color="secondary" size="sm" onClick={() => onClick()} method="user" className="right">Add Bill</Button>
            </Col>
          </Row>
          
          </div>
    : undefined}
    </Form>
  );
}

export default withGlobalState(setBillsDrop);
