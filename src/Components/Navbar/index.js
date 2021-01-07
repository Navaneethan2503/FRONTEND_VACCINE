import React from 'react';
import './style.css';
import logo from './logo.png';

const Header = (props) => {
	return(
		<div className ="header">
		<img src={logo} alt="LOGO" />
		<div class="dropdown">
          <button class="dropbtn">MENU
          <i class="fa fa-caret-down"></i>
          </button>
           <div class="dropdown-content">
           <a href="#">PREDICT INDIA BASED VACCINE DELIVERY</a>
          <a href="#">PREDICT STATE BASED VACCINE DELIVERY</a>
          <a href="#">PREDICT DISTRICT BASED CORONA CASES</a>
          <a href="#">PREDICT INDIA BASED CORONA CASES</a>
          <a href="#">PREDICT STATE BASED CORONA CASES</a>
          <a href="#">PREDICT DISTRICT BASED CORONA CASES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
          </div>
        </div>
		</div>
		)
}

export default Header