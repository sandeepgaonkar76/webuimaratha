import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel,NavDropdown} from "react-bootstrap";
import { BrowserRouter, Route,withRouter,Redirect,useHistory  } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
class MobileOtpPageComponents extends Component {	
	constructor(props, context) {
		super(props, context);	
		this.state = {
            phone:"",
			profileCreatedForv:'',
			motherTonguev:'',
			userName:'',
			password:'',
			phone:'',
			firstName:'',
			lastName:'',
			emailID:'',
			gender:'',
			createdOn:'',
			castev:'',
			country:'',
			countrycode:'',
			otpsessionid:'',
			otp:'',
			disabledregisterbutton:true,
			show: false,
			input: {},
			errors: {},
			values: [],
			caste: [],
			othercaste: [],
			profilecreatedfor:[],
			data:[],
			userID:'',
			response:'',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }


	  registeruser()
	  {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },      
			body: JSON.stringify({
        profileCreatedFor:parseInt(this.props.history.location.state.profileCreatedForv),
        firstName:this.props.history.location.state.firstName,
        lastName:this.props.history.location.state.lastName,
        gender:parseInt(this.props.history.location.state.gender),
        caste:parseInt(this.props.history.location.state.castev),
        phone:this.props.history.location.state.phone,
        motherTongue:parseInt(this.props.history.location.state.motherTonguev),
        emailID:this.props.history.location.state.emailID,
        username:this.props.history.location.state.userName,
        password:this.props.history.location.state.password
      }),
		};
		fetch(`${process.env.REACT_APP_API_KEY}Member/TempRegisterMember`, requestOptions)
			.then(response => response.json())
			.then(
				 data => {
          //  console.log(data);
            if(data.memberId=='')
            {
			  this.setState({response:"Registration in Failed."});   				
              // this.getotp();
            }
            else{
              // alert("Registration in successful,Member ID:"+data.userID);
              this.setState({userID:data.userID});  
				 setTimeout(()=>{this.redirectToCompleteProfile()},5000);
              
            }
				 }
			);
	  }
	  validate = (e) =>{
		const {profileCreatedForv,motherTonguev,password,phone,firstName,lastName,emailID,gender,castev,otpsessionid,otp,userID}=this.state;
			// let input = this.state.input;
			let errors = {};
			let isValid = true;
		if (!otp) {
			  isValid = false;
			  this.setState({response:"OTP required."});   				
			}		
			this.setState({
			  errors: errors
			});	
			return isValid;
		}
		handleChange(e){
			this.setState((prevState) => ({
			  ...prevState,
			  [e.target.name]: e.target.value
			}));
		  }
	  VerifyOtp = (e) => {
		// e.preventDefault();    
		const {otp,otpsessionid}=this.state;
		const requestOptions = {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' }
		};
		fetch(`${process.env.REACT_APP_API_KEY}VerifyOTP?sessionid=${this.props.location.state.otpsessionid}&otp=${otp}`,requestOptions)
		  .then(response => response.json())
		  .then(
			data => {
				console.log(data);
			  if(data.status=="Success")
			  {     

				this.setState({userID:this.props.location.state.userID});   				
				this.setState({response:data.details+". You are Registered Successfully. You will be redirected to login after 5 seconds."});   				
				// this.autoLoginToUserDashboard();
				//this.redirectToCompleteProfile();					
				 this.registeruser();				
			  }
			  else{
				this.setState({response:data.details});   				
			  }
			}        
		  );
		}
		autoLoginToUserDashboard = () => {
			let input = this.state.input;
		let errors = {};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },			
				body: JSON.stringify({username: this.props.history.location.state.userName,password:this.props.history.location.password})
			};
			fetch(`${process.env.REACT_APP_API_KEY}Login`, requestOptions)
				.then(response => response.json())
				.then(
					 data => {
						 console.log(data);
					if(data.memberId)
					{
						this.setState({sessionid:data.token});   
						this.setState({username:data.username});   	
						this.setState({userID:data.memberId});   								
					//	this.redirectToCompleteProfile();					
					}
					else{
						this.setState({response:data.errorMessage});   				
						}
					 });
		}		
		resendOTP = () => {
			// e.preventDefault();    
			const {phone}=this.props.location.state;  
			fetch(`${process.env.REACT_APP_API_KEY}SendSMS?mobilenumber=${phone}`)
			  .then(response => response.json())
			  .then(
				data => {
				  if(data.status=="Success")
				  {
					this.setState({otpsessionid:data.details});      
					this.props.location.state.otpsessionid= data.details;  

					// alert("OTP in successful,Redirecting...");
				  }
				  else{
					this.setState({response:"OTP in Failed."});   				
				  }
				}
			  );
			}

		handleSubmit = (e) => {
			e.preventDefault();  			
			if(this.validate()){
				this.VerifyOtp();
			}
		  }
		  redirectToCompleteProfile = (e) => {
			const { history } = this.props;
			history.push('/login',this.state);
			}
    render() {		
		const { phone,userName, otpsessionid,profileCreatedForv,motherTonguev,password,firstName,lastName,emailID,gender,castev,userID,otp } = (this.props.location && this.props.location.state) || {};
        return (
        <div> 
        <HeaderComponents/>    
<section className="login-page">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<div className="LoginText" style={{borderRadius:"10px"}}>
				<h2 style={{borderRadius:"0"}}>OTP Verification</h2>	
					<Row>
						<Col className="px-4">
						<p>We have sent you an <b>One Time Password</b> on your mobile number.</p>
						</Col>
					</Row>					
					<form className="otp-form" onSubmit={this.handleSubmit}>
						<Row>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Phone</label>
							<input type="text" id="phone" name="phone" className="form-text required" value={phone} onChange={this.handleChange} />
							
							<input type="hidden" id="userID" name="userID" className="form-text required" value={this.state.userID || userID} onChange={this.handleChange} />
							<input type="hidden" id="otpsessionid" name="otpsessionid" className="form-text required" value={this.state.otpsessionid  ||otpsessionid} onChange={this.handleChange} />
							</div>
							</Col>
						</Row>
						<Row>
						<Col>
							<div className="form-group">
							<label htmlFor="edit-name">OTP</label>
							<input type="text" id="otp" name="otp" className="form-text required" value={this.state.otp} onChange={this.handleChange} />
							</div>
							
							</Col>
						</Row>
						<Row>
							<Col>
							<Toast onClose={() => this.setState({response:''})} show={this.state.response!=''?true:false} className={this.state.response=="OTP required."?"bg-danger":"bg-success"} style={{position:"relative",bottom:"0",right:"0",marginBottom:"10px"}} delay={5000} autohide>
          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
							<div className="form-group">
							<button id="btnLogin" type="submit">Verify &amp; Complete</button>
							</div>
							<div className="form-group">
								<p style={{display:"inline-block"}}>Didn't receive otp ?</p>&nbsp;&nbsp;&nbsp;
							<button id="btnLogin" onClick={this.resendOTP} style={{background:"transparent",color:"#8f0247",padding:"0"}}>Resend again</button>
							</div>
							</Col>
						</Row>
					</form>
				</div>
			</div>			
		</div>
	</div>
</section>
{/* <Toast onClose={() => this.setState({response:''})} show={this.state.response!=''?true:false} className={this.state.response=="OTP required."?"bg-success":"bg-danger"} delay={3000} autohide>
          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast> */}
      <FooterComponents/>
        </div>)        
    }
}
export default withRouter(MobileOtpPageComponents);
