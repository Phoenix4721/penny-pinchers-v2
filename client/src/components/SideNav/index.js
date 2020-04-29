import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Logout from '../logOutBut'
import "./side.css";
import fakeAuth from '../../utils/authContext'
import { useHistory } from "react-router-dom";
import Friends from '../Friends/Friends'
import { Nav, NavbarToggler, Collapse } from 'reactstrap';


function SideNav() {

    let history = useHistory();

    let login = (site) => {
        fakeAuth.authenticate(() => {
          history.replace(site);
        });
      };
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    setShow(!show)
  };

  useEffect(() => {
    let w = window.innerWidth;
    if (w > 768) {
        setIsOpen(true)
    }
  })
      

  return (
<div>
<div className="mainWrapper">

<div className="row" id="body-row">

    <div id="sidebar-container" className="sidebar-expanded  d-md-block">

        <ul className="list-group">

            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
            </li>

            <a onClick={() => {login('/member')}} data-toggle="collapse" aria-expanded="false" className="hii  list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-home fa-fw mr-3"></span>
                    <span className="menu-collapsed">Home</span>
                    
                </div>
            </a>

            <a onClick={() => {login('/setBudget')}} data-toggle="collapse" aria-expanded="false" className="hii  list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-usd fa-fw mr-3"></span>
                    <span className="menu-collapsed">Budget</span>
                    
                </div>
            </a>

        
            <a onClick={() => {login('/setBills')}}  data-toggle="collapse" aria-expanded="false" className="hii  list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-money fa-fw mr-3"></span>
                    <span className="menu-collapsed">Bills</span>
                    
                </div>
            </a>
  
            
            <a onClick={() => {login('/leaderboard')}} className="hii list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-tasks fa-fw mr-3"></span>
                    <span className="menu-collapsed">Team</span>
                </div>
            </a>

            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>OPTIONS</small>
            </li>
  
            <a onClick={() => {login('/progress')}}className="hii list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3"></span>
                    <span className="menu-collapsed">Progress</span>
                </div>
            </a>
 

            <li className="list-group-item sidebar-separator menu-collapsed"></li>

            <Logout />

        </ul>
        </div>

    </div>
</div>
        
        <div className="hiii">
            <NavbarToggler className="toggleMe" onClick={toggle}><i class="fa fa-users" aria-hidden="true"></i><span className="friends"> Friends</span></NavbarToggler>
            <Collapse isOpen={isOpen} >
            <Nav className="mr-auto" navbar>
            <Friends />
            </Nav>
            
            </Collapse> 
        </div>
        
</div> 
  );
}

export default SideNav;
