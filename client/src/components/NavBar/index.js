import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Collapse, NavItem, NavLink, NavbarBrand, NavbarToggler } from 'reactstrap';
import fakeAuth from '../../utils/authContext'
import { useHistory } from "react-router-dom";
import './nav.css'
import SideNav from '../SideNav'
import Logout from '../logOutBut'
function NavbarTop() {
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
        <NavbarToggler onClick={toggle} ><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></NavbarToggler>
       { show ? <Collapse isOpen={isOpen} navbar>
       <Nav className="mdr-auto" navbar>
            <NavItem>
              <NavLink onClick={() => {login('/setBudget')}}>Budgets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => {login('/setBills')}}>Bills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => {login('/leaderboard')}}>Leader Board</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => {login('/progress')}}>Progress</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Logout /></NavLink>
            </NavItem>
          </Nav>
  </Collapse> : undefined}
      </Navbar>
    {show ? <div /> : <SideNav /> }
</div>
  );
}
export default NavbarTop;