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
class MyProfileViewdbyPageComponents extends Component{
	
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

<div>
				
				{/* <UserHeaderComponents/> */}
		 
				<div className="container-fluid">
					   <div className="row">
					   <SideBarComponents />
					   <main className="col-md-9 ms-sm-auto col-lg-10 p-0">
					
		 
		 {/* 1 */}
		 <section className="profile-page py-4">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<div className="ProfileText">
				
					<h2>Update Your Profile</h2>
					<Row>
					
					<Col>
					<div className="form-group">
					<label htmlFor="edit-name">Profile Photo</label>
					<Row>
					<Col>
					<div>
                <input type="file" onChange={this.onFileChange} style={{border:"none"}} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
					</Col>
					<Col>
					<img src={this.state.selectedFile? URL.createObjectURL(this.state.selectedFile) : null} alt={this.state.selectedFile? this.state.selectedFile.name : null} style={{maxHeight:"100px",width:"100px",border:"solid 1px #ccc",borderRadius:"100px"}} />
					</Col>
					</Row>
					
					</div>
					</Col>	
					<Col className="col-8">
					<div className="form-group">
					<label htmlFor="edit-name">About Me</label>
					<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
					</div>
					</Col>
				</Row>
					<form onSubmit={this.handleSubmit}>
						

					{/* <Row>
					
					<Col>
					<div className="form-group">
					<label htmlFor="edit-name">Profile Photo</label>
					<Row>
					<Col>
					<div>
                <input type="file" onChange={this.onFileChange} style={{border:"none"}} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
					</Col>
					<Col>
					<img src={this.state.selectedFile? URL.createObjectURL(this.state.selectedFile) : null} alt={this.state.selectedFile? this.state.selectedFile.name : null} style={{maxHeight:"100px",width:"100px",border:"solid 1px #ccc",borderRadius:"100px"}} />
					</Col>
					</Row>
					
					</div>
					</Col>	
					<Col className="col-8">
					<div className="form-group">
					<label htmlFor="edit-name">About Me</label>
					<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
					</div>
					</Col>
				</Row> */}
					<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">First Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Middle Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Last Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
						</Row>

						<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Date Of Birth</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Current City</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Gender</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
						</Row>

						<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Marital Status</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Height</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Gender</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
						</Row>
						<Row>
					
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Username</label>
							<input type="text" id="userName" name="userName" className="form-text required" onChange={this.handleChange} onBlur={(e) => this.CheckUserName(e)} value ={this.state.userName} />
							<div className={`text-danger tooltip ${this.state.errors.userName ? "show":""}`}>{this.state.errors.userName}</div>                  
							{/* <input type="hidden" id="userID" name="userID" className="form-text required" onChange={this.handleChange} value = {this.state.userID || this.props.location.state.userID} /> */}
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">First Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName} />
							</div>
							</Col>
						</Row>
						
						<Row>
							<Col>
							<div className="form-group">
							<button id="btnLogin" type="submit">Update My Details</button>
							<button id="btnLogin" >Pay Now</button>
							</div>
							</Col>
							
						</Row>
						
					
						
						
					</form>
				</div>
			</div>			
		</div>
	</div>
</section>
			   
			   
		 {/* 1 */}
		 
		 <UserFooterComponents/>
					   </main>
					   </div>
				   </div>	   
			  
			 
				 </div>
  
        </div>)
        
    }

     
      
}
export default withRouter(MyProfileViewdbyPageComponents);
