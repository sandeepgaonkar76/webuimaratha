import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import LoginOtpModalComponents from '../login/LoginOtpModalComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../style.css';

class LatestEventsModalComponents extends Component{	

	constructor(props, context) {
		super(props, context);	
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
		};	
	  }
	
	  handleClose() {
		this.setState({ show: false });
	  }
	
	  handleShow() {
		this.setState({ show: true });
	  }
	  componentDidMount()
	  {
		  this.handleShow();
	  }

    render() {
		const { history } = this.props;
		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
			
			<>
			
	
			{/* <button type="button" className="btn btn-primary"  onClick={this.handleShow}>Login</button> */}
			
			
			<Modal show={this.state.show} onHide={this.handleClose} id="myModal" dialogClassName="latestevents">
			   <Modal.Header closeButton>
				{/* // <Modal.Title>Modal heading</Modal.Title> */}
			  </Modal.Header> 
			  <Modal.Body style={{padding:"0"}}>
				   <Row className="justify-content-center"><img src="images/logo.png" /></Row>
			  
			  <h2 className="exampleModalCenterh2">Happy Diwali</h2>
			  	<img src="images/diwali.jpg" style={{width:"100%"}}/>
			
			  </Modal.Body>
			
			</Modal>
		  </>)
        
    }

     
      
}

export default withRouter(LatestEventsModalComponents);