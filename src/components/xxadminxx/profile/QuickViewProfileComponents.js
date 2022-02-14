import React, { Component } from 'react';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../../style.css';
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
			profiledetails:[],
			userID:'',
		    };
			this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    }
    handleInterested(){}
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

  handleShow() {
	  const {profileid}= this.state;
	this.setState({ show: true });
	// this.setState({ quickviewprofileid: profileid });	
	this.getQuickViewProfileDetails();
  }



componentDidMount(){}
    render() {
        const { profileid } = this.props.match.params;
        const {userID,ageFrom,ageTo,gender,searchresult,quickviewprofileid} = (this.props.location && this.props.location.state) || {};
		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
        <div>

      <button type="button" className="btn btn-primary submit-btn1"  onClick={this.handleShow} style={{background:"#fff",color:"#8f0247"}}>View Profile</button>
	  
			
			
			<Modal  show={this.state.show} fullscreen={true} onHide={this.handleClose} id="myModal" className="showprofile">
			  
			   <Modal.Header closeButton>
          <Modal.Title>
			  <div className="col">
				  <div className="row">
				  <div className="col-2"><img src={this.state.profiledetails.s3ImagePath} title="Test2 Test" alt="IN14" className="img-responsive gtFullWidth" style={{height:"150px",borderRadius:"150px",minWidth:"150px"}} /></div>	
				  <div className="col"><h2 className="exampleModalCenterh2">{this.state.profiledetails.firstName} {this.state.profiledetails.middleName} {this.state.profiledetails.lastName}</h2></div>
				  <div className="col">
				  			
							  <button type="button" className="btn btn-primary submit-btn1"  onClick={this.handleInterested}>Interested</button>
					</div>
				  
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
								<div className="col">Profile Created By</div>
								<div className="col">{this.state.profiledetails.profileCreateBy} </div>
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
									<div className="col"><h4 className="exampleModalCenterh2 m-0 p-0" style={{textAlign:"left"}}>Religion Information</h4></div>
									<div className="row">								
									<div className="col">
										<div className="row">
										<div className="col">Religion </div>
										<div className="col">{this.state.profiledetails.heightDescription} </div>
										</div>
										<div className="row">
										<div className="col">Caste</div>
										<div className="col">{this.state.profiledetails.bodyType} </div>
										</div>
										<div className="row">
										<div className="col">Complexion</div>
										<div className="col">{this.state.profiledetails.complexion} </div>
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
			  			<div className="col"><h4 className="exampleModalCenterh2" style={{textAlign:"left"}}>Education / Profession Information</h4></div>
						<div className="col">
								<div className="row">
									<div className="col">
										<div className="row">
										<div className="col">Education </div>
										<div className="col">{this.state.profiledetails.educationName} </div>
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
										<div className="col">Family Value</div>
										<div className="col">{this.state.profiledetails.familyValueName} </div>
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
    				<Button variant="secondary" >Close</Button>
  			</Modal.Footer>
			</Modal>
			
        </div>)
        
    }

     
      
}
export default withRouter(ProfilePageComponents);