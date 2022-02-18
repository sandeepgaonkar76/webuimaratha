import React, { Component } from 'react';
import mainLogo from'../images/logo.png';
import LoginModalComponents from './login/LoginModalComponents';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,Redirect,useHistory,
  } from "react-router-dom";

class HeaderComponent extends Component{
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
componentDidMount(){
    console.log(this.state.sessionid);
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
        <div>
           
        <header>

            <div className="top-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-login">
                            
                        <div className="footer-social" style={{display:"inline-block",float:"left"}}>
                          <a href="https://www.facebook.com/search/top/?q=mymarathalagna" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="https://twitter.com/mymarathalagna" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                          {/*
                          <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                          <a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a> */}
                        </div>
                        
                        <div style={{display:localStorage.getItem("sessionid")?"none":"inline-block"}}>
                          <LoginModalComponents/>
                        </div>
                        <div style={{display: localStorage.getItem("sessionid")?"inline-block":"none"}}>
                            <p style={{display:"inline-block",float:"left"}}></p>
                            <Link to="/user/dashboard" style={{display:"inline-block",float:"left"}}>Hi, {localStorage.getItem("username")}</Link>
                            <button className="nav-link px-3" onClick={this.logOut} style={{background:"transparent",border:"none",color:"#fff",float:"left",padding:"6px 0"}}>Sign out</button>
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


            
            <div className="bottom-header">
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
						<li><Link to="/adminuser">Admin</Link></li>
                                                </ul>
     
    </Nav>
  </Navbar.Collapse>
  </div>
  </Container>
</Navbar>
              </Row>
           
            </div>
            
            
        </header>
        </div>)
        
    }

     
      
}
export default withRouter(HeaderComponent);
