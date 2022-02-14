import React, { Component } from 'react';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../../style.css';
import { Alert } from 'bootstrap';
import Toast from 'react-bootstrap/Toast';
class ProfilePageComponents extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName:'',
            show: false,
			input: {},
			errors: {},
			ageFrom:'',
			ageTo:'',
			gender:'',
			searchresult:[],
			AllMaritalStatus:[],
			listAllHeight:[],
			listAllEducation:[],
			quickviewprofileid:"",
			profiledetails:[],userID:'',response:'',responsetype:''
		    };
			this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		

		//this.showuserid= this.props.showuserid;
		//localStorage.setItem('showuserid',this.props.showuserid);
		
    }
handleInterested(){
	
	let viewedUser=localStorage.getItem('vieweduser');
	
	let myid=localStorage.getItem('userid');
	
	const requestOptions = { 
		method: 'POSt',
		headers: { 'Content-Type': 'application/json' }
	  };
	  fetch(`${process.env.REACT_APP_API_KEY}Member/${myid}/${viewedUser}`,requestOptions)
		.then(response => response.json())
		.then(
		  data => {
			  console.log("Profile Interested Marked");
			  //this.setState({response: "Thank You. Your request has been sent successfully."});   
			 // this.setState({responsetype: "success"});  
			  alert("Thank you for Showing Interest.  Your request has been sent successfully.")
			// this.setState({ profiledetails: data });
		  }        
		);	
}
updatedataforview()
{
	
	localStorage.setItem('vieweduser',this.props.showuserid);
	
	let myid=localStorage.getItem('userid');
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	  };
	  fetch(`${process.env.REACT_APP_API_KEY}Member/InsertMemberDetailViewed?ViewedBy=${myid}&ViewedProfile=${this.props.showuserid}`,requestOptions)
		.then(response => response.json())
		.then(
		  data => {
			  console.log("Profile Viewed");
			// this.setState({ profiledetails: data });
		  }        
		);	
}
	
getQuickViewProfileDetails()
{

  const requestOptions = {
	method: 'GET',
	headers: { 'Content-Type': 'application/json' }
  };
  fetch(`${process.env.REACT_APP_API_KEY}Member/${this.props.showuserid}`,requestOptions)
	.then(response => response.json())
	.then(
	  data => {
		this.setState({ profiledetails: data });
	  }        
	);
}

handleClose(profileid) {
	this.setState({ show: false });
  }

  handleShow(e) {
	  e.preventDefault();
	  const {profileid}= this.state;
	this.setState({ show: true });
	// this.setState({ quickviewprofileid: profileid });	
	this.getQuickViewProfileDetails();
	this.updatedataforview();
  }



componentDidMount(){}
    render() {
        const { profileid } = this.props.match.params;
        const { ageFrom,ageTo,gender,searchresult,quickviewprofileid,userID,showuserid} = (this.props.location && this.props.location.state) || {};
		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
        <div>

      <button type="button" className="btn btn-primary submit-btn1" onClick={this.handleShow} style={{background:"#fff",color:"#8f0247"}}>More details</button>
	  
			
			
			<Modal  show={this.state.show} fullscreen={true} onHide={this.handleClose} id="myModal" className="showprofile">
			  
			   <Modal.Header closeButton>
          <Modal.Title className="col-12">
			  <div className="col">
				  <div className="row">
				  <div className="col-2"><img src={this.state.profiledetails.s3ImagePath} title="Test2 Test" alt="IN14" className="img-responsive gtFullWidth" style={{height:"150px",borderRadius:"150px",minWidth:"150px"}} /></div>	
				  <div className="col"><h2 className="exampleModalCenterh2">{this.state.profiledetails.firstName} {this.state.profiledetails.middleName} {this.state.profiledetails.lastName}</h2></div>
				  <div className="col">
				  			
							  <button type="button" className="btn btn-primary submit-btn1"  onClick={this.handleInterested}>Interested</button>
					</div>
					<Toast onClose={() => this.setState({response:''})} onClick={() => this.setState({response:''})} show={this.state.response?true:false} className={this.state.responsetype=="success"?"bg-success":"bg-success"} autohide delay={3000}  style={{position:'relative',left:"0",top:"0",width:"100%",margin:"20px 0",textAlign:"center"}}>          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
				  </div>
			  </div>
			
		  	
		  </Modal.Title>
        </Modal.Header>
			  <Modal.Body>
				  {/* <Row className="justify-content-center"><img src="images/logo.png" /></Row>
			   */}
			  {/* {JSON.stringify(this.state.profiledetails)} */}
			  
			<div>
				<div className="row">			  		
					<div className="col">	
					
			  		
						  <div className="col">
						  <div className="row">
						  	<div className="col">
							  <div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>Basic Details</h4></div>
							  	<div className="row">
									<div className="col">Name:</div>
									<div className="col">{this.state.profiledetails.firstName} {this.state.profiledetails.middleName} {this.state.profiledetails.lastName}</div>
								</div>
								<div className="row">
									<div className="col">Mother Tongue:</div>
									<div className="col">{this.state.profiledetails.motherTongueName}</div>
								</div>
								<div className="row">
								<div className="col">Phone Number</div>
								<div className="col">{this.state.profiledetails.phone} </div>
								</div>
								
							  </div>
							<div className="col">
									<div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>About Me</h4></div>
								<div className="col">
								{this.state.profiledetails.aboutMe} 
								</div>
							</div>
						  </div>
							  </div>
							 
					</div>
					
					</div>	
					<div className="row">	
					<div className="col">	</div>
					</div>
					<div className="row">	
					<div className="col">	 </div>
					</div>
					<div className="form-group" >
					<div className="form-group">Expectation</div><div className="col">{this.state.profiledetails.expectation}</div>
								<div className="col"> </div> <div className="col"> </div>
					</div>
					<div className="row">
				
					
					<div className="col">	
					<hr/>
			  			
						<div className="col">
								<div className="row">
									<div className="col">
									<div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>Physical Attributes</h4></div>
										<div className="row">
										<div className="col">Height</div>
										<div className="col">{this.state.profiledetails.heightDescription} </div>
										</div>
										<div className="row">
										<div className="col">Body Type</div>
										<div className="col">{this.state.profiledetails.bodyType} </div>
										</div>
										<div className="row">
										<div className="col">Complexion</div>
										<div className="col">{this.state.profiledetails.complexion} </div>
										</div>
									</div>
									<div className="col">
								{/** 	<div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>Other Information</h4></div>*/}
									<div className="row">								
									<div className="col">
										<div className="row">									
										
										</div>
										<div className="row">
										
										</div>
										<div className="row">
										
										</div>
									</div>
									
								</div>
									</div>
								</div>
						</div>
					</div>
					</div>
				
					<div className="row">
					
					<div className="col">	
					<hr/>
			  			<div className="col"><h4 className="exampleModalCenterh2" style={{textAlign:"left"}}>Education / Profession Information </h4></div>
						<div className="col">
								<div className="row">
									<div className="col">
										<div className="row">
										<div className="col">Education </div>
										<div className="col">{this.state.profiledetails.educationName} </div>
										</div>
										<div className="row">
										<div className="col">Other Education </div>
										<div className="col">{this.state.profiledetails.othereducation} </div>
										</div>
										{/* <div className="row">
										<div className="col">Caste</div>
										<div className="col">{this.state.profiledetails.bodyType} </div>
										</div> */}
										
									</div>
									{/* <div className="col">
									<div className="row">
										<div className="col">Complexion</div>
										<div className="col">{this.state.profiledetails.complexion} </div>
										</div>
									</div> */}
								</div>
						</div>
					</div>
					</div>
					<div className="row">
					
					<div className="col">	
					<hr/>
			  			
						<div className="col">
						
								<div className="row">
									<div className="col">
									<div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>Family Information</h4></div>
										<div className="row">
										<div className="col">Family Type </div>
										<div className="col">{this.state.profiledetails.familyTypeName} </div>
										</div>
										<div className="row">
										<div className="col">Family Value</div>
										<div className="col">{this.state.profiledetails.familyValueName} </div>
										</div>
										<div className="row">
										<div className="col">Family Status</div>
										<div className="col">{this.state.profiledetails.familyStatusName} </div>
										</div>
										
									</div>
									<div className="col">
									<div className="col">
						<div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>Location Information</h4></div>
								<div className="row">
									<div className="col">
										<div className="row">
										<div className="col">Location </div>
										<div className="col">{this.state.profiledetails.currentCity} </div>
										</div>
										<div className="row">
										<div className="col">Address</div>
										<div className="col">{this.state.profiledetails.address} </div>
										</div>
										<div className="row">
										<div className="col">OtherAddress</div>
										<div className="col">{this.state.profiledetails.address2} </div>
										</div>
									</div>
								
								</div>
						</div>
									</div>
								</div>
						</div>
					</div>
					</div>
							  
			</div>			  
			  </Modal.Body>
			  <Modal.Footer>
    				<Button variant="secondary" onClick={this.handleClose}>Close</Button>
  			</Modal.Footer>
			</Modal>
			
        </div>)
        
    }

     
      
}
export default withRouter(ProfilePageComponents);