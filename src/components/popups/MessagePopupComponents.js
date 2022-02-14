import React, { Component } from 'react';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../../style.css';
class MessagePopupComponents extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            
            show: false,
			message: {},
			errors: {},
			
		    };
			this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    }


handleClose(profileid) {
	this.setState({ show: false });
  }

  handleShow(e) {
	  e.preventDefault();
	  const {message}= this.state;
	this.setState({ show: true });
  }
    render() {
        const { profileid } = this.props.match.params;
        const { ageFrom,ageTo,gender,searchresult,quickviewprofileid,userID} = (this.props.location && this.props.location.state) || {};
		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
        <div>

      {/* <button type="button" className="btn btn-primary submit-btn1" onClick={this.handleShow} style={{background:"#fff",color:"#8f0247"}}>More details</button> */}
	  
			
			
			<Modal  show={this.state.show} fullscreen={true} onHide={this.handleClose} id="myModal" className="showprofile">
			  
			   <Modal.Header closeButton>
          <Modal.Title className="col-12">
		  <button type="button" className="btn btn-primary submit-btn1"  onClick={this.handleInterested}>Interested</button>		  	
		  </Modal.Title>
        </Modal.Header>
			  <Modal.Body>
				<div>				
					<div className="row">
					  <h1>Thank You</h1>
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
export default withRouter(MessagePopupComponents);