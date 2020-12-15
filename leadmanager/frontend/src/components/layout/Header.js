import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {Row} from 'antd'
// import Wgner from "../../images/Wgner.png";

import { Image } from 'antd';
var headerstyles={

  backgroundColor: "2A4C7D",
  color: "#333"

}

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
       
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <li className="nav-item">
          <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      {/* <Image src={Wgner}></Image> */}
        <Row style={{display:"flex",  position: "relative", right: 324}} className="dropwndown_all">
         <li><div className="Test_Menu" class="nav-item dropdown">
           <a href= "#" class="nav-link dropdown-toggle" data-toggle= "dropdown">Training</a>
           <div class="dropdown-menu">
             <a href="#" class="dropdown-item">Workouts</a>
             <a href="#" class="dropdown-item">Workshedules</a>
             <a href="#" class="dropdown-item">Categories</a>
             </div>
             </div>
             </li>
             <li><div className="Test_Menu" class="nav-item dropdown">
           <a href= "#" class="nav-link dropdown-toggle" data-toggle= "dropdown">Nutrition</a>
           <div class="dropdown-menu">
             <a href="#" class="dropdown-item">BMI Calculator</a>
             <a href="#" class="dropdown-item">Nutrition Plans</a>
             <a href="#" class="dropdown-item">Daily Calories calculator</a>
             </div>
             </div>
             </li>
             <li><div className="Test_Menu" class="nav-item dropdown">
           <a href= "#" class="nav-link dropdown-toggle" data-toggle= "dropdown">About this software</a>
           <div class="dropdown-menu">
             <a href="#" class="dropdown-item">Contribute</a>
             <a href="#" class="dropdown-item">Problems and wishes</a>
             <a href="#" class="dropdown-item">Get in Touch</a>
             </div>
             </div>
             </li>
         </Row>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div style={{backgroundColor: "#2A4C7D"}} className= "Header">
      <nav style={{backgroundColor: "#2A4C7D"}} className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              WGER
              {/* <img src={wgner}/> */}
            </a>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
