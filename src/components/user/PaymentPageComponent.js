import React, { Component } from 'react';
import UserHeaderComponents from './UserHeaderComponents';
import SideBarComponents from './SideBarComponents';
import UserFooterComponents from './UserFooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import MyProfileInterestedPageComponents_fd from './MyProfileInterestedPageComponents_fd';
import MyProfileViewdbyPageComponents_fd from './MyProfileViewdbyPageComponents_fd';




import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import TopBarComponents from './TopBarComponents';
class PaymentPageComponent extends Component{

	constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
		  token:"",
		  sessionid:'',
		  username:'',
		  userID:'',
		  planID:'',
		  paidMember:false,
		};
		this.handleChange = this.handleChange.bind(this);	
	  }
	  redirectTo = (e) => {
		const { history } = this.props;
		history.push('/');
		}
	  componentDidMount()
	  {
		
		if(!localStorage.getItem('sessionid'))
		{
		  const { history } = this.props;
		  if(history) history.push('/',this.state);
		}    
		if(localStorage.getItem('sessionid'))
		{
		  let userid=localStorage.getItem('userid');
		this.getmyprofiledetailsonlogin(userid);
		  this.setState({userID:userid});   
		}
  	}
	  getmyprofiledetailsonlogin(userid)
	  {
	   //alert("hi");
		fetch(`${process.env.REACT_APP_API_KEY}Member/${userid}`)
		.then(function(res) {
			
		  return res.json();
		}).then((json)=> {
		  // json.dateOfBirth=json.dateOfBirth.split(' ')[0].trim().replace('/','-').replace('/','-');
		  this.setState({
			myprofiledetails: json
		  });
		  
		  //alert(json.paidMember);
		  this.setState({paidMember:json.paidMember});
		  // this.state.dateOfBirth.split(' ')[0].trim()
		  this.setState({userID:json.userID});
		  this.setState({aboutMe:json.aboutMe});
		  this.setState({emailID:json.emailID});
		   this.setState({firstName:json.firstName});
		   this.setState({middleName:json.middleName});
		   this.setState({lastName:json.lastName});
		   this.setState({dateOfBirth:json.dateOfBirth});
		   this.setState({castev:json.casteID});
		 //  this.setState({casteID:json.casteID});
		  //  this.setState({otherCaste:json.otherCaste});
		   this.setState({nakshatrav:json.nakshatrav});
		   this.setState({rashiv:json.rashiv});
		   this.setState({heightv:json.heightv});
		   this.setState({nativePlace:json.nativePlace});
		   this.setState({currentCity:json.currentCity});
		  //  this.setState({country:json.country});
		   this.setState({educationv:json.education});
		   this.setState({otherEducation:json.otherEducation});
		   this.setState({occupation:json.occupation});
		  this.setState({address:json.address});
		  this.setState({address2:json.address2});
		  this.setState({phone:json.phone});
		  this.setState({marryOtherCaste:json.marryOtherCaste});
		  this.setState({maritalStatusv:json.maritalStatus});
		 
		  this.setState({planID:json.planID});
		  // this.setState({handicap:json.handicap});
		  // this.setState({bloodGroupv:json.bloodGroupv});
		  this.setState({modeofContact:json.modeofContact});
		  this.setState({expectation:json.expectation});
		  // this.setState({familyTypeName:json.familyTypeName});
		  // this.setState({familyStatusName:json.familyStatusName});
		  // this.setState({familyValueName:json.familyValueName});
		  this.setState({bodyType:json.bodyType});
		  this.setState({complexion:json.complexion}); 
		});
	  }
  
	  handleChange(e){
		this.setState((prevState) => ({
		  ...prevState,
		  [e.target.name]: e.target.value
		}));
	  }
	  
    render() {
		const { history } = this.props;
		const {sessionid,username,userID} = (this.props.location && this.props.location.state) || {};  
        return (
			<>
			<div>
				
       <TopBarComponents/>

	   <div className="container-fluid">
  			<div className="row">
			  {/* <SideBarComponents /> */}
			  <main className="col-md-12 ms-sm-auto col-lg-12 p-0">
			 <div className="container p-0">
<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-3">
        <h1 className="h2">My Payment</h1>
        {/* <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div> */}
      </div>
      
    
{/* 1 */}

{this.state.paidMember == true ||
	<div className="row" visible="false" disabled={this.state.paidMember == true} ><div className="col text-center" style={{borderRight:"solid 1px #ccc"}}>
	<h2>Pay Online</h2>
	<p>Pay directly online, using our online payment gateway.</p>
	<Link to="/user/pay-now" className="submit-btn1">Pay Now</Link>
</div>
<div className="col text-center">
	<h2>Pay Offline</h2>
	<p>Pay directly through Bank Transfer, using our bank detailsS.</p>
	<b>State Bank of India </b>
	<p className="mb-1">Name · mymarathalagna.com</p>
	<p className="mb-1">Account Number · 36595929174</p>
	<p className="mt-1">IFSC Code: SBIN0000857</p>
</div>
	</div>
}
{this.state.paidMember == false ||

<div className="row" disabled={this.state.paidMember == false} >
<div className="col text-center" style={{borderRight:"solid 1px #ccc"}}>
		<h2>Thank you for your Payment</h2>
		<p>You have Opted for Plan. {this.state.planID==1?"Basic":"Gold Plan" }</p>
	<br></br>
	</div>
	
</div>
}
{/**
<div className="row">
	<div className="col text-center" style={{borderRight:"solid 1px #ccc"}}>
		<h2>Pay Online</h2>
		<p>Pay directly online, using our online payment gateway.</p>
		<Link to="/user/pay-now" className="submit-btn1">Pay Now</Link>
	</div>
	<div className="col text-center">
		<h2>Pay Offline</h2>
		<p>Pay directly through Bank Transfer, using our bank detailsS.</p>
		<b>State Bank of India </b>
		<p className="mb-1">Name · mymarathalagna.com</p>
		<p className="mb-1">Account Number · 36595929174</p>
		<p className="mt-1">IFSC Code: SBIN0000857</p>
	</div>
</div>
 */}
</div>
			  </main>
			  </div>
        
  		</div>	   
      <UserFooterComponents/>
    
        </div>
		  </>)
        
    }

     
      
}
export default withRouter(PaymentPageComponent);