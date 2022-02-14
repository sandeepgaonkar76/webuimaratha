import React, { Component } from 'react';
import UserHeaderComponents from './UserHeaderComponents';
import SideBarComponents  from './SideBarComponents';
import UserFooterComponents from './UserFooterComponents';
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
class RecentlyJoinedPageComponents extends Component{
	
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
		userName:'',
		selectedFile: null,
		};
		this.handleChange = this.handleChange.bind(this)
		this.CheckUserName = this.CheckUserName.bind(this)		
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
	// getallallprofilecreateby()
	// {
	// 	fetch(`${process.env.REACT_APP_API_KEY}AllProfileCreatedBy`)
	// 	.then(function(res) {
	// 		return res.json();
	// 	}).then((json)=> {
	// 		this.setState({
	// 			profilecreatedby: json
	// 		})
	// 	});
	// }

	CheckUserName(e)
	{let errors = {};
		let userName="";
		userName=e.target.value;
	const requestOptions = {
		  method: 'GET',
		  headers: { 'Content-Type': 'application/json' }
		};
		fetch(`${process.env.REACT_APP_API_KEY}Member/CheckUserName?username=${userName}`,requestOptions)
		  .then(response => response.json())
		  .then(
			data => {
				//  console.log(data);
			  if(data==1)
			  {     
				errors["userName"] = "User name already exists.";
				this.setState({
					errors: errors
				  });
			  }
			
			}        
		  );
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

	onFileChange = event => {    
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });	  
	  };

	  // On file upload (click the upload button)
	  onFileUpload = (e) => {
    e.preventDefault();
		// Create an object of formData
		const formData = new FormData();
	  
		// Update the formData object
		formData.append(
		  "myFile",
		  this.state.selectedFile,
		  this.state.selectedFile.name
		);
	  
		// Details of the uploaded file
		console.log(this.state.selectedFile);
	  
		// Request made to the backend api
		// Send formData object
		// axios.post("api/uploadfile", formData);
	  };
	  
	  // File content to be displayed after
	  // file upload is complete
	  fileData = () => {
	  
// 		if (this.state.selectedFile) {
		   
// 		  return (
// 			<div>
// 			  <h2>File Details:</h2>
			   
//   <p>File Name: {this.state.selectedFile.name}</p>
   
			   
//   <p>File Type: {this.state.selectedFile.type}</p>
   
			   
//   <p>
// 				Last Modified:{" "}
// 				{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			  </p>
   
// 			</div>
// 		  );
// 		} else {
// 		  return (
// 			<div>
// 			  <br />
// 			  <h4>Choose before Pressing the Upload button</h4>
// 			</div>
// 		  );
// 		}
	  };
	  

	componentDidMount() {
		this.getallmothertounge();
		this.getallallcaste();
		// this.getallallprofilecreateby();
	}

    render() {
		const { phone, otpsessionid,profileCreatedForv,motherTonguev,password,firstName,lastName,emailID,gender,castev,userID,otp } = (this.props.location && this.props.location.state) || {};
        return (
        <div>
            	<div className="col-md-12 px-3">
                <div className="row">
							
			
				
				
				  <div className="column col-lg-4">
				<div className="our-lifeparterner">
					<div className="row">
					<div className="col-md-12">
					  <a href="#" className="our-thump">
					  <div className="col-md-4 text-center gridFullWidth">
																			
						<h4 className="Anand">Anand Parmar	( IN8 )
						</h4>
					  </div>
					  <div className="col-md-4 gridHidden">
						<h5 className="Register">
						  Register On: 
						  26 Feb 2020 ,06:44 AM        </h5>
					  </div>
					  <div className="col-md-4 text-center gridHidden">
						<h5 className="Online"> Online  </h5>
					  </div>
					  </a>
					  </div>
					  </div>
					  
					  
					<div className="row">
						  <div className="col-md-2 gridFullWidth">
						
							<div className="thumbnail gt-margin-bottom-0">
								<img src="images/male.png" title="Anand Parmar1" alt="IN8" className="img-responsive gtFullWidth"/>	
							</div>
						  </div>
						  <div className="col-md-10 gridFullWidth">
							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridFullWidth">
								  <p className="row">
									<label className="col-md-6 ">Age :</label>
									<span className="col-md-6">28 years 0 months  	</span>
								  </p>
								</div>
								<div className="col-md-6 gridFullWidth">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Height :</label>
									<span className="col-md-6">5ft 9in </span>
								  </p>
								</div>
								
							  </div>
							</div>
							
							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Religion :</label>
									<span className="col-md-6"> Hindu</span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Caste :</label>
									<span className="col-md-6">Brethren </span>
								  </p>
								</div>
								
							  </div>
							</div>							


							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Location :</label>
									<span className="col-md-6 gridFullWidth"> Ahmadabad, India</span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Education :</label>
									<span className="col-md-6">BE </span>
								  </p>
								</div>
								
							  </div>
							</div>

							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Mother Tongue :</label>
									<span className="col-md-6 gridFullWidth">  Dogri  </span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Occupation :</label>
									<span className="col-md-6"> Economist </span>
								  </p>
								</div>
								
							  </div>
							</div>
						  </div>
						</div>					  
					  
					</div>
					</div>
					
					
				  <div className="column col-lg-4">
				<div className="our-lifeparterner">
					<div className="row">
					<div className="col-md-12">
					  <a href="#" className="our-thump">
					  <div className="col-md-4 text-center gridFullWidth">
																			
						<h4 className="Anand">Anand Parmar	( IN8 )
						</h4>
					  </div>
					  <div className="col-md-4 gridHidden">
						<h5 className="Register">
						  Register On: 
						  26 Feb 2020 ,06:44 AM        </h5>
					  </div>
					  <div className="col-md-4 text-center gridHidden">
						<h5 className="Online"> Online  </h5>
					  </div>
					  </a>
					  </div>
					  </div>
					  
					  
					<div className="row">
						  <div className="col-md-2 gridFullWidth">
						
							<div className="thumbnail gt-margin-bottom-0">
								<img src="images/male.png" title="Anand Parmar2" alt="IN8" className="img-responsive gtFullWidth"/>	
							</div>
						  </div>
						  <div className="col-md-10 gridFullWidth">
							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridFullWidth">
								  <p className="row">
									<label className="col-md-6 ">Age :</label>
									<span className="col-md-6">28 years 0 months  	</span>
								  </p>
								</div>
								<div className="col-md-6 gridFullWidth">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Height :</label>
									<span className="col-md-6">5ft 9in </span>
								  </p>
								</div>
								
							  </div>
							</div>
							
							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Religion :</label>
									<span className="col-md-6"> Hindu</span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Caste :</label>
									<span className="col-md-6">Brethren </span>
								  </p>
								</div>
								
							  </div>
							</div>							


							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Location :</label>
									<span className="col-md-6 gridFullWidth"> Ahmadabad, India</span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Education :</label>
									<span className="col-md-6">BE </span>
								  </p>
								</div>
								
							  </div>
							</div>

							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Mother Tongue :</label>
									<span className="col-md-6 gridFullWidth">  Dogri  </span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Occupation :</label>
									<span className="col-md-6"> Economist </span>
								  </p>
								</div>
								
							  </div>
							</div>
						  </div>
						</div>					  
					  
					</div>
					</div>
					
				  <div className="column col-lg-4">
				<div className="our-lifeparterner">
					<div className="row">
					<div className="col-md-12">
					  <a href="#" className="our-thump">
					  <div className="col-md-4 text-center gridFullWidth">
																			
						<h4 className="Anand">Anand Parmar	( IN8 )
						</h4>
					  </div>
					  <div className="col-md-4 gridHidden">
						<h5 className="Register">
						  Register On: 
						  26 Feb 2020 ,06:44 AM        </h5>
					  </div>
					  <div className="col-md-4 text-center gridHidden">
						<h5 className="Online"> Online  </h5>
					  </div>
					  </a>
					  </div>
					  </div>
					  
					  
					<div className="row">
						  <div className="col-md-2 gridFullWidth">
						
							<div className="thumbnail gt-margin-bottom-0">
								<img src="images/male.png" title="Anand Parmar" alt="IN8" className="img-responsive gtFullWidth"/>	
							</div>
						  </div>
						  <div className="col-md-10 gridFullWidth">
							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridFullWidth">
								  <p className="row">
									<label className="col-md-6 ">Age :</label>
									<span className="col-md-6">28 years 0 months  	</span>
								  </p>
								</div>
								<div className="col-md-6 gridFullWidth">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Height :</label>
									<span className="col-md-6">5ft 9in </span>
								  </p>
								</div>
								
							  </div>
							</div>
							
							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Religion :</label>
									<span className="col-md-6"> Hindu</span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Caste :</label>
									<span className="col-md-6">Brethren </span>
								  </p>
								</div>
								
							  </div>
							</div>							


							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Location :</label>
									<span className="col-md-6 gridFullWidth"> Ahmadabad, India</span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Education :</label>
									<span className="col-md-6">BE </span>
								  </p>
								</div>
								
							  </div>
							</div>

							<div className="row">
							  <div className="redirect">
								<div className="col-md-6 gridHidden ">
								  <p className="row">
									<label className="col-md-6 ">Mother Tongue :</label>
									<span className="col-md-6 gridFullWidth">  Dogri  </span>
								  </p>
								</div>
								<div className="col-md-6 gridHidden ">
								  <p className="row gt-margin-bottom-0">
									<label className="col-md-6 ">Occupation :</label>
									<span className="col-md-6"> Economist </span>
								  </p>
								</div>
								
							  </div>
							</div>
						  </div>
						</div>					  
					  
					</div>
					</div>

<div className="clearfix">&nbsp;</div>


				</div>	
				</div>
				
        </div>)
        
    }

     
      
}
export default withRouter(RecentlyJoinedPageComponents);
