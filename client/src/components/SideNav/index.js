import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import Logout from '../logOutBut'
import "./side.css";
import fakeAuth from '../../utils/authContext'
import { useHistory } from "react-router-dom";
import ChatApp from '../ChatApp/ChatApp'

function SideNav(props) {

    let history = useHistory();

    let login = (site) => {
        fakeAuth.authenticate(() => {
          history.replace(site);
        });
      };
      

  return (
<div className="mainWrapper">

<div className="row" id="body-row">

    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">

        <ul className="list-group">

            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
            </li>

            <a onClick={() => {login('/setBudget')}} data-toggle="collapse" aria-expanded="false" className="hii  list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3"></span>
                    <span className="menu-collapsed">Budget</span>
                    
                </div>
            </a>

        
            <a onClick={() => {login('/setBills')}}  data-toggle="collapse" aria-expanded="false" className="hii  list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-user fa-fw mr-3"></span>
                    <span className="menu-collapsed">Bills</span>
                    
                </div>
            </a>
  
            
            <a href="#" className=" list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-tasks fa-fw mr-3"></span>
                    <span className="menu-collapsed">Team</span>
                </div>
            </a>

            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>OPTIONS</small>
            </li>
  
            <a href="#" className=" list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-calendar fa-fw mr-3"></span>
                    <span className="menu-collapsed">Goals</span>
                </div>
            </a>
            <a href="#" className=" list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-envelope-o fa-fw mr-3"></span>
                    <span className="menu-collapsed">Messages<span className="badge badge-pill badge-primary ml-2">5</span></span>
                </div>
            </a>

            <li className="list-group-item sidebar-separator menu-collapsed"></li>

            <Logout />

        </ul>
        <ChatApp />
    </div>

</div>
</div>
  );
}

export default SideNav;
