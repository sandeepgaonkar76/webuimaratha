import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import LoginOtpModalComponents from '../login/LoginOtpModalComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../style.css';

class LoginModalComponents extends Component{	
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
		const {userID} = this.state;
		const {sessionid,username} =	(this.props.location && this.props.location.state) || {};
		
		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
			
			<>
			
	
			<a style={{color:"#000000",cusror:"pointer"}} onClick={this.handleShow}>privacy policy</a>
			
			
			<Modal show={this.state.show} onHide={this.handleClose} id="myModalprivacy">
			<Modal.Header closeButton>
				{/* // <Modal.Title>Modal heading</Modal.Title> */}
			  </Modal.Header> 
			  <Modal.Body>
			  <div className="col-md-12">
				<p>Mymarathalagna.com have created this Privacy Statement (Policy) in order to demonstrate our commitment to help our users better understand what information we collect about them and what may happen to that information.

mymarathalagna Matrimonial Services respects and protects the privacy of the individuals that access the information and use the services provided through them. Individually identifiable information about the User is not willfully disclosed to any third party without first receiving the User permission, as covered in this Privacy Policy.
</p><p>
This Privacy Policy describes mymarathalagna Matrimonial Services treatment of personally identifiable information that mymarathalagna Matrimonial Services collects when Useris on the mymarathalagna  Matrimonial Services website. mymarathalagna Matrimonial Services does not collect any unique information about the User (such as User name, email address, age, gender etc.) except when the User specifically and knowingly provide such information on the Website. Like any business interested in offering the highest quality of service to clients, mymarathalagna Matrimonial Services may, from time to time, send email and other communication to the User tell them about the various services, features, functionality and content offered by mymarathalagna Matrimonial Services website or seek voluntary information from you.</p>
			</div>	
			  </Modal.Body>
			
			</Modal>
		  </>)
        
    }

     
      
}

export default withRouter(LoginModalComponents);