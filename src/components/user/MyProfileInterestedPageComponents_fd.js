import React, { Component } from 'react';
import TopBarComponents from './TopBarComponents';
import UserFooterComponents from './UserFooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import QuickViewProfileComponents from '../profile/QuickViewProfileComponents';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,
  } from "react-router-dom";
class MyProfileViewdbyPageComponents extends Component{
	
	constructor(props, context) {
		super(props, context);
		this.state = {
		show: false,
		input: {},
		errors: {},
		mothertounge: [],
		caste: [],
		othercaste: [],
		profilecreatedby:[]  ,
		message: [],
		userID:'',
		userName:'',
		selectedFile: null,
		interestedarray:[],
		};
		}

		whoInterested()
		{		let myid=localStorage.getItem('userid');
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },      
		};
			fetch(`${process.env.REACT_APP_API_KEY}Member/MemberInterested?memberid=${myid}`,requestOptions)
			.then(function(res) {
				return res.json();
			}).then((data)=> {
                // console.log(data);
				this.setState({
					interestedarray: data
				 })
			});
		}

componentDidMount()
{
	this.whoInterested();
}
    render() {
		const { phone, otpsessionid,profileCreatedForv,motherTonguev,password,firstName,lastName,emailID,gender,castev,userID,otp } = (this.props.location && this.props.location.state) || {};
        return (
        <div>

<div>
				
				<div className="container-fluid">
					   <div className="row">
					   
					   <main className="col-md-12 ms-sm-auto col-lg-12 p-0">
					   
					   <div className="container p-0">
					   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-3">
        <h1 className="h2">People Interested in my profile </h1>
   
      </div>
						   <div className="row">
					   {
						this.state.interestedarray.map((obj) => {
							return (	<div key={obj.userID} className="column col-3" data-id={obj.userID}>
							<div className="our-lifeparterner">
								<div className="row">
								<div className="col-md-12">
								  <a href="#" className="our-thump" style={{padding:"5px 0 0 0"}}>
									  <div className="row">
									  <div className="col-md-12 text-center gridFullWidth">																						
									<h4 className="Anand">{obj.firstName} {obj.lastName}
									</h4>
								  </div>
								  
							
									  </div>
								  </a>
								  </div>
								  </div>
								  
								  
								<div className="row">
									
									  <div className="col-md-10 gridFullWidth mx-auto">
										<div className="row">
										  <div className="redirect row">
											<div className="col-md-12 gridFullWidth">
											  <p className="row" style={{marginBottom:"0px"}}>
												<label className="col-md-6 ">Caste :</label>
												<span className="col-md-6">{obj.caste}</span>
											  </p>
											</div>
										
										  </div>
										</div>
										
									
										<div className="row">
										  <div className="redirect row">
											<div className="col-md-12 gridHidden ">
											  <p className="row" style={{marginBottom:"0px"}}>
												<label className="col-md-6 ">Mother Tongue :</label>
												<span className="col-md-6 gridFullWidth"> {obj.motherTongueName}</span>
											  </p>
											</div>
											<div className="col-md-12 gridHidden ">
											  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
												<label className="col-md-6 ">Phone :</label>
												<span className="col-md-6">{obj.phone} </span>
											  </p>
											</div>
											
										  </div>
										</div>
			
									
										
									  </div>
									  <QuickViewProfileComponents showuserid={obj.userID}  />
									</div>					  
									
								</div>
								</div>);
							

						})
					}
				  </div>
						</div>
	
	
		 <div className="clearfix">&nbsp;</div>
	
					   </main>
					   </div>
				   </div>	   
			  
			 
				 </div>
  
        </div>)
        
    }

     
      
}
export default withRouter(MyProfileViewdbyPageComponents);
