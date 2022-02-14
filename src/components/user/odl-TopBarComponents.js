import React, { Component } from 'react';
import mainLogo from'../../images/logo.png';
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
       {/* <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{background:"#8f0247"}}>
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      
      <button className="nav-link px-3" onClick={this.logOut} style={{background:"transparent",border:"none",color:"#fff"}}>Sign out</button>
    </div>
  </div>
</header> */}
<header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
<div className="col-12">
<div className="top-header col-12">
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="header-login">
                
            
            <div style={{display:"inline-block"}}>
                <p style={{display:"inline-block",float:"left",padding:"0"}}>Hi, {this.props.location.state.username}</p>
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
<Navbar.Brand className="col-md-3 logo1"><Link to="/"><img src={mainLogo} /></Link></Navbar.Brand>
<div className="menulist-item">
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav" className="col-lg-12">
<Nav className="" id="cssmenu">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
                                    {/* <li><Link to="/membership-plan">MemberShip Scheme</Link></li> */}
                                    <li><Link to="/faq">FAQs</Link></li>
                                    {/* <li><Link to="/search">Search</Link></li> */}
                                    {/* <li><Link to="/services"></Link></li>
                                     */}
                                    
                                    <li><Link to="/membership-plan">MemberShip Scheme</Link></li>
                                    <li><Link to="/muhurat">Muhurat</Link></li>

                                    {/* <li><Link to="/search-result">Search Profiles</Link></li> */}
                                    <li><Link to="/contact">Contact</Link></li>
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
        </div>)
        
    }

     
      
}
export default withRouter(TopBarComponents);