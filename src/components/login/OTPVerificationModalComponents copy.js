import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import LoginOtpModalComponents from './LoginOtpModalComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';

import { BrowserRouter, Route,withRouter,Redirect,useHistory  } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../style.css';

 

class LoginModalComponents extends Component{

	
redirectToHome = () => {
	const { history } = this.props;
	if(history) history.push('../user/dashboard');
   }
	componentDidMount() {
		// fetch('https://wm4ivx8142.execute-api.ap-south-1.amazonaws.com/Prod/AllCastes')
		// .then(response => response.json())
		// .then(data => {
		// 	console.log(JSON.stringify(data));
		// 	// this.setState({ fileIdList: data });
		// });
	  }

	constructor(props, context) {
		super(props, context);
	
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
		

		};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

	

	  handleChange(event) {
		let input = this.state.input;
		input[event.target.name] = event.target.value;
	  
		this.setState({
		  input
		});
	  }
	  handleSubmit(event) {

		

		event.preventDefault();
	  
		if(this.validate()){
			// console.log(this.state);
	  
			let input = {};			
			input["email"] = "";
			input["password"] = "";
			this.setState({input:input});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			
			body: JSON.stringify({username: this.state.input.email,password:this.state.input.password})
		};
		fetch('https://wm4ivx8142.execute-api.ap-south-1.amazonaws.com/Prod/Login', requestOptions)
			.then(response => response.json())
			.then(
				 data => {
				if(data.memberId==0)
				{
					alert("Logged in Failed.")
				}
				else{
					// alert("Logged in successful,RedirectingEmail Address:"+data.username+",Member ID:"+data.memberId)
					alert("Logged in successful,Redirecting...");
				this.redirectToHome();
			}
				 }
				// data => 
			// console.log( data )
			// sessionStorage.setItem('resData', JSON.stringify(returnObj));
			
			);
		}
	  }



	  validate(){
		let input = this.state.input;
		let errors = {};
		let isValid = true;
	 
	
	
	
		if (!input["email"]) {
		  isValid = false;
		  errors["email"] = "Please enter your email Address.";
		}
	
		// if (typeof input["email"] !== "undefined") {
			
		//   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		//   if (!pattern.test(input["email"])) {
		// 	isValid = false;
		// 	errors["email"] = "Please enter valid email address.";
		//   }
		// }
	
		if (!input["password"]) {
		  isValid = false;
		  errors["password"] = "Please enter your password.";
		}
	
		if (typeof input["password"] !== "undefined") {
		  if(input["password"].length < 6){
			  isValid = false;
			  errors["password"] = "Please add at least 6 charachter.";
		  }
		}
	
		if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
			
		  if (input["password"] != input["confirm_password"]) {
			isValid = false;
			errors["password"] = "Passwords don't match.";
		  }
		}
	
		this.setState({
		  errors: errors
		});
	
		return isValid;
	}

	
	  handleClose() {
		this.setState({ show: false });
	  }
	
	  handleShow() {
		this.setState({ show: true });
	  }

    render() {
		const { history } = this.props;

		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
			
			<>
			
	
			<button type="button" className="btn btn-primary"  onClick={this.handleShow}>Login</button>
			
			
			<Modal show={this.state.show} onHide={this.handleClose} >
			  {/* <Modal.Header >
				<Modal.Title>Modal heading</Modal.Title>
			  </Modal.Header> */}
			  <Modal.Body closeButton>
				  <Row className="justify-content-center"><img src="images/logo.png" /></Row>
			  
			  <h2 className="exampleModalCenterh2">Welcome back! Please Login</h2>
			  <div className="login-popup">
			  <form onSubmit={this.handleSubmit}>
			
			
			<div className="form-group">
			<label className="label1"  for="email">User ID</label>
			<input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter Mobile no. / Email ID"  value={this.state.input.email}
              onChange={this.handleChange} id="email"  />
			<div className="text-danger">{this.state.errors.email}</div>

			</div>
			
			<div className="form-group">
			<label className="label1">Password</label>
			<input type="password" className="input_txt" id="password_page" name="password" value="" placeholder="Enter password" value={this.state.input.password}
              onChange={this.handleChange} id="password" />
			<div className="text-danger">{this.state.errors.password}</div>
			</div>
			
			<div className="form-group text-center">
				<button id="btnLogin">Login</button>
			</div>
			

			<p className="or text-center">Or</p>
			<div className="form-group text-center">
			<LoginOtpModalComponents/>
			</div>
		<div className="right_header text-center">New to Shaadi?<a  className="signUpFree" type="registration">Sign Up Free <span className="signUpArrow"></span></a>
				</div>
		</form>
		</div>
			  </Modal.Body>
			
			</Modal>
		  </>)
        
    }

     
      
}

export default withRouter(LoginModalComponents);