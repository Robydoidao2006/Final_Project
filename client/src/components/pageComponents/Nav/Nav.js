import React from "react";
import SignOutButton from '../../login/SignOut';
import {Link} from "react-router-dom";
import HomePage from '../../../pages/Home';
import "./Nav.css";



const Nav = () => (

<nav className="navbar navbar-default navbar-fixed-top">
  <div className="navbar-brand">
  </div>
    <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/home">HOME</a></li>
            <li><a href="#memberships">MEMBERSHIP</a></li>
            <li><a href="#newEvents">EVENTS</a></li>
            <li><a href="#boardmembers">LEADERSHIP</a></li>
            <li><a href="#contact">CONTACT</a></li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="">AWARDS
              <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="http://www.endo-nurses.org/2018-ENS-Grant-Awards">ENS Poster Award</a></li>
                  <li><a href="http://www.endo-nurses.org/2018-Betsy-Love-McClung-Award">Betsy Love McClung Award</a></li>
                  <li><a href="http://www.endo-nurses.org/page-1428935">Media</a></li>
                </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">GRANTS
              <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="http://www.endo-nurses.org/ENS-2018">Clinical Project Grant</a></li>
                  <li><a href="http://www.endo-nurses.org/ENS-2018">Clinical Research Grant</a></li>
                  <li><a href="http://www.endo-nurses.org/2018-Travel-Grant-Application">Travel Grant Application</a></li>
                </ul>
            </li>
            <li> <SignOutButton /></li>
          </ul>
        </div>
      </div>
    </div>
</nav>


);

export default Nav;
