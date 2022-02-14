import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,
  } from "react-router-dom";
class CompleteProfilePageComponents extends Component{
	
	constructor(props, context) {
		super(props, context);
		this.state = {
		show: false,
		input: {},
		errors: {},
		mothertounge: [],
		caste: [],
		othercaste: [],
		profilecreatedby:[]  ,
		message: [],
		userID:'',
		};
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		}

	getallmothertounge()
	{
		fetch(`${process.env.REACT_APP_API_KEY}AllMotherTongues`)
		.then(function(res) {
			return res.json();
		}).then((json)=> {
			this.setState({
			   mothertounge: json
			})
		});
	}

	getallallcaste()
	{
		fetch(`${process.env.REACT_APP_API_KEY}AllCastes`)
		.then(function(res) {
			return res.json();
		}).then((json)=> {
			this.setState({
				caste: json
			})
		});
	}
	getallallprofilecreateby()
	{
		fetch(`${process.env.REACT_APP_API_KEY}AllProfileCreatedBy`)
		.then(function(res) {
			return res.json();
		}).then((json)=> {
			this.setState({
				profilecreatedby: json
			})
		});
	}
	handleChange(e){
		this.setState((prevState) => ({
		  ...prevState,
		  [e.target.name]: e.target.value
		}));
	  }
	handleSubmit(e)
	{
	let profileCreatedFor,motherTongue,userName,password,phone,firstName,lastName,emailID,gender,createdOn,caste,otherCaste,active,paidMember,bloodGroup,userID='';
    e.preventDefault();    
    userName=e.target.userName.value;
    firstName=e.target.firstName.value;
	userID=this.props.location.state.userID;
	console.log(userName);
	console.log(firstName);
	

    
    const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			mode: 'no-cors',
			body: JSON.stringify({
        userName: userName,
        firstName: firstName,
		userID:userID
      })
		};
		fetch(`${process.env.REACT_APP_API_KEY}Member/UpdaterMember`, requestOptions)
			.then(response => response.json())
			.then(
				 data => {
           		 console.log(data);
				if(data.userID==0)
				{
					alert("Profile Updating Failed.")
					
					// this.setState({message: "Registration Failed"});

				}
				else{
					// this.setState({message: "Registration in successful,Member ID:"+data.userID});
					alert("Updated your profile successfully");
			        }
				 }
			);
	}
	componentDidMount() {
		this.getallmothertounge();
		this.getallallcaste();
		this.getallallprofilecreateby();
	}

    render() {
		const { phone, otpsessionid,profileCreatedForv,motherTonguev,password,firstName,lastName,emailID,gender,castev,userID,otp } = (this.props.location && this.props.location.state) || {};
        return (
        <div>
        <HeaderComponents/>
    
<section className="login-page">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<div className="SignupText">
				
					<h2>Complete Your Profile</h2>
					<form onSubmit={this.handleSubmit}>
						
					
						<Row>
						
							<Col>
							<div className="form-group">
							<label for="edit-name">Username</label>
							<input type="text" id="userName" name="userName" className="form-text required" onChange={this.handleChange} value = {this.state.userName} />
							<input type="hidden" id="userID" name="userID" className="form-text required" onChange={this.handleChange} value = {this.state.userID || this.props.location.state.userID} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label for="edit-name">First Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
						</Row>
						
						<Row>
							<Col>
							<div className="form-group">
							<button id="btnLogin" type="submit">Update My Details</button>
							</div>
							</Col>
							
						</Row>
						
					
						
						
					</form>
				</div>
			</div>			
		</div>
	</div>
</section>

      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default withRouter(CompleteProfilePageComponents);
