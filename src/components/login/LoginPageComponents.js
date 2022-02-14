import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class LoginPageComponents extends Component{
	redirectToHome = () => {
		const { history } = this.props;
		if(history) history.push('../user/dashboard',this.state);
		this.handleClose();
	   }
		constructor(props, context) {
			super(props, context);
		
			this.handleShow = this.handleShow.bind(this);
			this.handleClose = this.handleClose.bind(this);
		
			this.state = {
			  show: false,
			  input: {},
			  errors: {},
			  sessionid:'',
			  username:'',
			  userID:'',
			  Mplan:'',
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
			let input = this.state.input;
			let errors = {};
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
			fetch(`${process.env.REACT_APP_API_KEY}Login`, requestOptions)
				.then(response => response.json())
				.then(
					 data => {
						 console.log(data);
					if(data.memberId)
					{
						this.setState({sessionid:data.token});   
						this.setState({username:data.username});   	
						this.setState({userID:data.memberId});   	
						localStorage.setItem('userid', data.memberId);
						localStorage.setItem('username', data.username);
						localStorage.setItem('sessionid', data.token);
						localStorage.setItem('Mplan',data.planID);
						this.redirectToHome();					
					}
					else{
						errors["error"]=data.errorMessage;
						this.setState({
							errors: errors
						  });
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
				  isValid = true;
				  //errors["password"] = "Please add at least 6 charachter.";
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
		const {userID} = this.state;
		const {sessionid,username,Mplan} =	(this.props.location && this.props.location.state) || {};

        return (
        <div>
        <HeaderComponents/>
    
<section className="login-page">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<div className="LoginText" style={{borderRadius:"5px"}}>
				
					{/* <h2>Login</h2>
					<form>
						<div className="form-group">
							<label for="edit-name">Username</label>
							<input type="text" id="UserName" name="username" className="form-text required"/>
						</div>
						<div className="form-group">
							<label for="edit-name">Password</label>
							<input type="password" id="Password" name="Password" className="form-text required"/>
						</div>
						<div className="form-group">
							<button id="btnLogin">Login</button>
						</div>
						<p>Not a Member? <Link to="/signup">Register</Link></p>
						{/* <p>Forgot Password? <a href="/Home/ForgotPassword">Click Here</a></p> */}
					{/* </form>  */}
					
			  
			  <h2 className="exampleModalCenterh2" style={{borderRadius:"0"}}>Welcome back! Please Login</h2>
			  <p className="error text-center">{this.state.errors.error}</p>
			  <div className="login-popup">
			  <form onSubmit={this.handleSubmit}>
			
			
			<div className="form-group">
			<label className="label1"  htmlFor="email">User ID</label>
			<input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User Id"  value={this.state.input.email || ''} onChange={this.handleChange} id="email"  />
			<div className="text-danger">{this.state.errors.email}</div>
			
			</div>
			
			<div className="form-group">
			<label className="label1">Password</label>
			<input type="password" className="input_txt" id="password_page" name="password" value="" placeholder="Enter password" value={this.state.input.password || ''}
              onChange={this.handleChange} id="password" />
			<div className="text-danger">{this.state.errors.password}</div>
			</div>
			
			<div className="form-group text-center">
				<button id="btnLogin">Login</button>
			</div>
			

			{/* <p className="or text-center">Or</p>
			<div className="form-group text-center">
			<LoginOtpModalComponents/>
			</div> */}
		<div className="right_header text-center">New to Mymarathalagana? <Link to="/signup" className="signUpFree" type="registration">Sign Up Free <span className="signUpArrow"></span></Link>
				</div>
		</form>
		</div>
				</div>
			</div>			
		</div>
	</div>
</section>

      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default LoginPageComponents;