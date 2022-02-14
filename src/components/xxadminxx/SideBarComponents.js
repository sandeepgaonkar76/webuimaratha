import React, { Component } from 'react';
import mainLogo from'../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import './dashboard.css';
class SideBarComponents extends Component {
  constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
		  sessionid:'',
		  username:'',
		};	
	}

  logOut = () => {
    const { history } = this.props;
    this.setState({sessionid:""});   
    if(history) history.push('/',this.state);
     }
    render() {
      const { history } = this.props;
		const {sessionid,username} =	(this.props.location && this.props.location.state) || {};
        return (
        <div>
         <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link" to="/user/dashboard">Dashboard</Link></li>
       
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-1 mb-1 text-muted">
          <span>My Profile</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
       
        

          <li className="nav-item"><Link className="nav-link" to="/user/view-my-profile">View Profile</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/edit-my-profile">Edit Profile</Link></li>
          

          
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-1 mb-1 text-muted">
          <span>Search</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
       
          <li className="nav-item"><Link className="nav-link" to="/search">Search Profiles</Link></li>
        
       
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-1 mb-1 text-muted">
          <span>Partner Profile</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
       
          
          <li className="nav-item"><Link className="nav-link" to="/user/shortlisted-profile">Shortlisted Profiles</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/blocked-profile">Blocked Profiles</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/myprofile-viewedby">My Profiles Viewed by</Link></li>\
          <li className="nav-item"><Link className="nav-link" to="/user/profiles-ivisited">Profiles I Visited</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/mymobile-viewedby">My Mobile No Viewed by</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/mymatched">My Matches</Link></li>



        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-1 mb-1 text-muted">
          <span>Memership</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">

        <li className="nav-item"><Link className="nav-link" to="/user/membership-plan">Membership Plan</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/user/my-account">My Account</Link></li>
         
        </ul>
      </div>
    </nav>
        </div>)
        
    }

     
      
}
export default withRouter(SideBarComponents);