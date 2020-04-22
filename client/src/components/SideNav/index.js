import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import Logout from '../logOutBut'
import "./side.css";
import fakeAuth from '../../utils/authContext'
import { useHistory } from "react-router-dom";

function App(props) {

    let history = useHistory();

    let login = (site) => {
        fakeAuth.authenticate(() => {
          history.replace(site);
        });
      };
      

  return (
<div className="mainWrapper">

<div class="row" id="body-row">

    <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">

        <ul class="list-group">

            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
            </li>

            <a onClick={() => {login('/setBudget')}} data-toggle="collapse" aria-expanded="false" class="hii bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-dashboard fa-fw mr-3"></span>
                    <span class="menu-collapsed">Budget</span>
                    
                </div>
            </a>

        
            <a onClick={() => {login('/setBills')}}  data-toggle="collapse" aria-expanded="false" class="hii bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-user fa-fw mr-3"></span>
                    <span class="menu-collapsed">Bills</span>
                    
                </div>
            </a>
  
            
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-tasks fa-fw mr-3"></span>
                    <span class="menu-collapsed">Team</span>
                </div>
            </a>

            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>OPTIONS</small>
            </li>
  
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-calendar fa-fw mr-3"></span>
                    <span class="menu-collapsed">Goals</span>
                </div>
            </a>
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-envelope-o fa-fw mr-3"></span>
                    <span class="menu-collapsed">Messages<span class="badge badge-pill badge-primary ml-2">5</span></span>
                </div>
            </a>

            <li class="list-group-item sidebar-separator menu-collapsed"></li>

            <Logout />

        </ul>
    </div>

</div>
</div>
  );
}

export default App;
