import React, { Component } from 'react';
import mainLogo from'../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
class UserHeaderComponents extends Component {
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
           <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow top-header">
  
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#" >MyMarathaLagana</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="navbar-nav">
    <div className="nav-item text-nowrap header-login">
    <p className="btn">Hi, {username}</p> 
    <div className="avatar"><img src="../images/avatar.jpg" alt="user" /></div> | 
                        <Button type="button" className="btn" onClick={this.logOut}>Logout</Button>                        
      

    </div>
  </div>
</header>
        {/* <header>        
            <div className="top-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-login">
                        <Link to="/#" className="btn">Hi, {username}</Link> 
                        <div className="avatar"><img src="../images/avatar.jpg" alt="user" /></div>
                           | 
                        <Button type="button" className="btn" onClick={this.logOut}>Logout</Button>                        
                        </div>
                    </div>	
                    </div>
                </div>
            </div>	


            
            <div className="bottom-header">
              <Row>
              <Navbar collapseOnSelect expand="lg" >
  <Container fluid>
  <Navbar.Brand className="col-md-3 logo1"><Link to="/#"><img src={mainLogo} /></Link></Navbar.Brand>
  <div className="menulist-item">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="col-lg-12">
    <Nav className="" id="cssmenu">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
                                                <li><Link to="/membership-plan">MemberShip Scheme</Link></li>
                                                <li><Link to="/faq">FAQs</Link></li>
                                                <li><Link to="/search">Search</Link></li>
                                              
                                                
                                                <li><Link to="/membership-plan">MemberShip Scheme</Link></li>
          
                                                <li><Link to="/search-result">Search Profiles</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                </ul>
     
    </Nav>
  </Navbar.Collapse>
  </div>
  </Container>
</Navbar>
              </Row>
           
            </div>
            
            
        </header> */}
        </div>)
        
    }

     
      
}
export default withRouter(UserHeaderComponents);