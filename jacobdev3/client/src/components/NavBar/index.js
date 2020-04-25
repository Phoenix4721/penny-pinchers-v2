import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, NavbarToggler, NavbarText } from 'reactstrap';
import fakeAuth from '../../utils/authContext'
import { useHistory } from "react-router-dom";
import './nav.css'
import SideNav from '../SideNav'
import ChatApp from '../ChatApp/ChatApp'


function NavbarTop(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    setShow(!show)
  };

  let history = useHistory();

    let login = (site) => {
        fakeAuth.authenticate(() => {
          history.replace(site);
        });
      };


  return (
<div>
    <Navbar expand="md">
        <NavbarBrand onClick={() => {login('/member')}} className="hii">Penny Pinchers</NavbarBrand>
        <NavbarToggler onClick={toggle} />
       { show ? <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
  </Collapse> : undefined}
      </Navbar>


    {show ? <div /> : <SideNav /> }
</div>
  );
}

export default NavbarTop;
