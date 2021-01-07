import React from 'react';
import './style.css';
import machine from './machine.png';
import group from './people.png';
import doc from './doc.png';
//import Form from "./form.js";

const Register = (props) => {
	return(
		<div className ="register">
		   <h1>REGISTER FOR VACCINE !</h1><span> 
		   <div>
		    <img id="machine" src={machine} alt="MACHINE LEARNING" />
		   <img id="people" src={group} alt="populations" /></div></span>
		    <button><a href="file:///D:/EY%20COMPANY/website/index.html"> REGISTER NOW!  </a></button>
           <img id="doc" src={doc} alt="doctor with mask" />
         
		</div>		


		);
}

export default Register 