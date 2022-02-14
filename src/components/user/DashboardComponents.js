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
import '../../style.css';



import TopBarComponents from './TopBarComponents';
class DashboardComponents extends Component{

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
        <h1 className="h2">Dashboard</h1>
		<Link to="/user/myprofile" style={{ fontSize:"21px",color: "#8f0247",fontWeight: "900"}}>View My Profile</Link>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            {/* <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button> */}
          </div>
		 
		 
		  <Link to="/user/search" style={{ fontSize:"21px",color: "#8f0247",fontWeight: "900"}}>Search Profile</Link>
        </div>
      </div>
      
    
{/* 1 */}

<MyProfileInterestedPageComponents_fd/>
<MyProfileViewdbyPageComponents_fd/>

</div>
			  </main>
			  </div>
        
  		</div>	   
      <UserFooterComponents/>
    
        </div>
		  </>)
        
    }

     
      
}
export default withRouter(DashboardComponents);