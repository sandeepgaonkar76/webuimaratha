import React, { Component } from 'react';
import input from 'react-bootstrap';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import { FormErrors } from '../FormErrors';
import Toast from 'react-bootstrap/Toast';
//import './forgotpassword.css';
class ForgotPasswordComponents extends Component{
    componentDidMount() {
      //this.setState({suggestiontype:"Suggestion"});
    }
	constructor(props, context) {
		super(props, context);	
		this.state = {
      response:"",responsetype:"",
      username:"",
      formErrors: {
        username:"",
      },
      formValid: false,  
      usernameValid:false,phonenoValid:false,emailValid:false,suggestiontypeValid:false,
      feedbackValid:false,
		};  	
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  
    handleUserInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let usernameValid=this.state.usernameValid;
      let phonenoValid=this.state.phonenoValid;
      let emailValid=this.state.emailValid;
      let suggestiontypeValid=this.state.suggestiontypeValid;
      let feedbackValid=this.state.feedbackValid;
      switch(fieldName) {
        case 'username':
          usernameValid = value.length>=1;
          fieldValidationErrors.username = usernameValid ? '' : 'Full name required';
          break;

        

        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        usernameValid:usernameValid,
        phonenoValid:phonenoValid,
        emailValid:emailValid,
        suggestiontypeValid:suggestiontypeValid,
        feedbackValid:feedbackValid,
                    }, this.validateForm);
    }      
    validateForm() {
      this.setState({formValid: this.state.aboutMeValid && 
        this.state.usernameValid &&
        this.state.phonenoValid &&
        this.state.emailValid &&
        this.state.suggestiontypeValid &&
        this.state.feedbackValid 
      });
    }      
    errorClass(error) { return(error.length === 0 ? '' : 'has-error');}

	  handleSubmit(e) {		
      const { username}=this.state;
      e.preventDefault();     
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }			
		
		};
		fetch(`${process.env.REACT_APP_API_KEY}Member/ForGotPassword?username=${username}`, requestOptions)
			.then(response => response.json())
			.then(
				 data => {
					 console.log(data);
				if(data==0)
				{
          this.setState({response: "Sorry. Your Details not found. Please enter username / phone number / email id."});    
              this.setState({responsetype: "error"});  
				}else if(data==1)
        {
          //alert(data);
          this.setState({responsetype: "success"});
          this.setState({response: "Sent Password details to your Email ID"});    
           
        }
				else{
          this.setState({response: "Error sending details. Please contact 8277089755."});  
            this.setState({responsetype: "error"});       
					}
				 }	
			);

      setTimeout(()=>{this.setState({username: ""});},1000);

    }
	  
    render() {
        const { history } = this.props;
		const {userID} = this.state;
		const {sessionid,username} =	(this.props.location && this.props.location.state) || {};
        return (
        <div>
            <HeaderComponents/>

            
    <div className="container">
    <div className="fill-form" style={{position:"relative",margin:"10px auto",float:"none",width:"50%",right:"0"}}>
    <h2>Forgot Password</h2>
    <Toast onClose={() => this.setState({response:''})} onClick={() => this.setState({response:''})} show={this.state.response?true:false} className={this.state.responsetype=="success"?"bg-success":"bg-danger"} autohide delay={10000}  style={{position:'relative',left:"0",top:"0",width:"100%",margin:"20px 0",textAlign:"center"}}>          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
        <form className="reg-form" onSubmit={this.handleSubmit}>
            <div className="row">
            <div className="col-25" style={{fontWeight:"bold",margin:"10px 0"}}>
                    <label htmlFor="username">Please enter your User Name / Phone / Email ID. Password will be sent to your registered Email ID</label>
                </div>
                <div className="col-75"  style={{position:"relative"}}>
                    <input type="text" id="username" name="username" required="required" value={this.state.username || ''} onChange={this.handleUserInput} />
                    <div className={`text-danger tooltip ${this.state.formErrors.username ? "show":""}`}>{this.state.formErrors.username}</div>
                </div>
            </div>
           
         
            <div className="row" style={{textAlign:"center"}}>
            <div className="submit-btn"><button type="submit" name="reg_sub">Send Password</button></div>

            </div>
        </form>
        </div>    
    </div>
    <FooterComponents/>
        </div>)
        
    }

     
      
}
export default ForgotPasswordComponents;