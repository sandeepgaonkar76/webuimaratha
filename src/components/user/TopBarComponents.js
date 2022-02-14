import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import './dashboard.css';
class TopBarComponents extends Component {
  constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
		  sessionid:'',
		  username:'',
      avatar:'',
		};	
	}

  getUseravatar()
  {
    let myid=localStorage.getItem('userid');
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      };
      fetch(`${process.env.REACT_APP_API_KEY}Member/${myid}`,requestOptions)
      .then(response => response.json())
      .then(
        data => {
        this.setState({avatar:data.s3ImagePath});  
        }        
      );
  }
  componentDidMount()
  {    
    if(!localStorage.getItem('sessionid'))
    {
      const { history } = this.props;
      if(history) history.push('/',this.state);
    }   
    else{
      this.getUseravatar();
    }
    
  }

  logOut = () => {
    const { history } = this.props;
    this.setState({sessionid:""});   
    if(history) history.push('/',this.state);
    localStorage.removeItem("username");
    localStorage.removeItem("sessionid");
    localStorage.removeItem("userid");
     }
    render() {
      const { history } = this.props;
		const {sessionid,username} =	(this.props.location && this.props.location.state) || {};
        return (
        <>
     
<header className="navbar sticky-top flex-md-nowrap p-0 shadow" style={{background:"#fff"}}>
<div className="col-12">
<div className="top-header col-12">
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="header-login">
            <div style={{display:"inline-block"}}>
                <p style={{display:"inline-block",float:"left",padding:"5px 10px"}}>Hi, {localStorage.getItem('username')}</p>
                <div style={{display:"inline-block",float:"left"}}>
                  <div className="avatar"><img src={this.state.avatar} alt="user" /></div> | 
                </div>                
                <button className="nav-link px-3" onClick={this.logOut} style={{background:"transparent",border:"none",color:"#fff",display:"inline-block",float:"left",padding:"2px 0"}}>Sign out</button>
            </div>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style={{paddingRight:"0"}}>Hi, Gagan</button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Logout</button> */}
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Login</button> */}
                   {/* |   <Link to="/signup">signup</Link> */}
            </div>
        </div>	
        </div>
    </div>
</div>

<div className="bottom-header col-12">
  <Row>
  <Navbar collapseOnSelect expand="lg" className="py-0" >
<Container fluid>
<Navbar.Brand className="col-md-2 logo1"><Link to="/"><img src='../images/logo.png' /></Link></Navbar.Brand>
<div className="menulist-item">
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav" className="col-lg-12">
<Nav className="" id="cssmenu">
<ul>
<li><Link to="/user/dashboard">Dashboard</Link></li>
<li><Link to="/user/myprofile">My Profile</Link></li>
<li><Link to="/user/mypayments">My Payments</Link></li>
<li><Link to="/user/search">Search Profile</Link></li>
                                    <li><Link to="/user/my-profile-viewedby">My profile viewed by</Link></li>
                                    <li><Link to="/user/my-profile-interested">My profile Interested in</Link></li>
                                   {/** <li><Link to="/user/my-profile-interested">Settings</Link></li>  */}
                                    </ul>

</Nav>
</Navbar.Collapse>
</div>
</Container>
</Navbar>
  </Row>

</div>
</div>
	






</header>
        </>)
        
    }

     
      
}
export default withRouter(TopBarComponents);