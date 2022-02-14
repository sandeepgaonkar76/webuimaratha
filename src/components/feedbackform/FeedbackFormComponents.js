import React, { Component } from 'react';
import input from 'react-bootstrap';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import { FormErrors } from '../FormErrors';
import Toast from 'react-bootstrap/Toast';
// import './feedbackform.css';
class FeedbackFormComponents extends Component{
    componentDidMount() {
      this.setState({suggestiontype:"Suggestion"});
    }
	constructor(props, context) {
		super(props, context);	
		this.state = {
      response:"",responsetype:"",
      fname:"",phoneno:"",email:"",suggestiontype:"",
      feedback:"",
      formErrors: {
        fname:"",phoneno:"",email:"",suggestiontype:"",
      feedback:"",
      },
      formValid: false,  
      fnameValid:false,phonenoValid:false,emailValid:false,suggestiontypeValid:false,
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
      let fnameValid=this.state.fnameValid;
      let phonenoValid=this.state.phonenoValid;
      let emailValid=this.state.emailValid;
      let suggestiontypeValid=this.state.suggestiontypeValid;
      let feedbackValid=this.state.feedbackValid;
      switch(fieldName) {
        case 'fname':
          fnameValid = value.length>=1;
          fieldValidationErrors.fname = fnameValid ? '' : 'Full name required';
          break;

          case 'phoneno':
            phonenoValid = value.length>=1;
            fieldValidationErrors.phoneno = phonenoValid ? '' : '10 digit phone no required';
            break;

          case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : 'Please enter valid email';
          break;

          case 'suggestiontype':
          suggestiontypeValid = value.length>1;
          fieldValidationErrors.suggestiontype = suggestiontypeValid ? '' : 'Please select a suggestion type';
          break;

          case 'feedback':
          feedbackValid = value.length>=5;
          fieldValidationErrors.feedback = feedbackValid ? '' : 'Your suggestion should be of min 50 words.';
          break;

        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        fnameValid:fnameValid,
        phonenoValid:phonenoValid,
        emailValid:emailValid,
        suggestiontypeValid:suggestiontypeValid,
        feedbackValid:feedbackValid,
                    }, this.validateForm);
    }      
    validateForm() {
      this.setState({formValid: this.state.aboutMeValid && 
        this.state.fnameValid &&
        this.state.phonenoValid &&
        this.state.emailValid &&
        this.state.suggestiontypeValid &&
        this.state.feedbackValid 
      });
    }      
    errorClass(error) { return(error.length === 0 ? '' : 'has-error');}

	  handleSubmit(e) {		
      const { fname,email,phoneno,suggestiontype,feedback}=this.state;
      e.preventDefault();     
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },			
			body: JSON.stringify({name:fname,email:email,phone: phoneno,type:suggestiontype,details:feedback})
		};
		fetch(`${process.env.REACT_APP_API_KEY}AddFeedback`, requestOptions)
			.then(response => response.json())
			.then(
				 data => {
					 console.log(data);
				if(data==1)
				{
          this.setState({response: "Thank You. Your feedback has been submitted successfully."});    
              this.setState({responsetype: "success"});  
				}
				else{
          this.setState({response: "Sorry, We are unable to submit feedback form."});  
            this.setState({responsetype: "error"});       
					}
				 }	
			);

      setTimeout(()=>{this.setState({fname: "", email: "", phoneno: "",suggestiontype:"Suggestion",feedback:""});},1000);

    }
	  
    render() {
        const { history } = this.props;
		const {userID} = this.state;
		const {sessionid,username} =	(this.props.location && this.props.location.state) || {};
        return (
        <div>
            <HeaderComponents/>

            
    <div className="container">
    <div className="fill-form" style={{position:"relative",margin:"10px auto",float:"none",width:"100%",right:"0"}}>
    <h2>FEED BACK FORM</h2>
    <Toast onClose={() => this.setState({response:''})} onClick={() => this.setState({response:''})} show={this.state.response?true:false} className={this.state.responsetype=="success"?"bg-success":"bg-success"} autohide delay={3000}  style={{position:'relative',left:"0",top:"0",width:"100%",margin:"20px 0",textAlign:"center"}}>          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
        <form className="reg-form" onSubmit={this.handleSubmit}>
            <div className="row">
            <div className="col-25" style={{fontWeight:"bold",margin:"10px 0"}}>
                    <label htmlFor="fname">Full  Name</label>
                </div>
                <div className="col-75"  style={{position:"relative"}}>
                    <input type="text" id="fname" name="fname" required="required" value={this.state.fname || ''} onChange={this.handleUserInput} />
                    <div className={`text-danger tooltip ${this.state.formErrors.fname ? "show":""}`}>{this.state.formErrors.fname}</div>
                </div>
            </div>
            <div className="row">
            <div className="col-25" style={{fontWeight:"bold",margin:"10px 0"}}>
                    <label htmlFor="lname">Phone</label>
                </div>
                <div className="col-75"  style={{position:"relative"}}>
                    <input type="text" id="phoneno" name="phoneno" required="required" value={this.state.phoneno || ''} onChange={this.handleUserInput} />
                    <div className={`text-danger tooltip ${this.state.formErrors.phoneno ? "show":""}`}>{this.state.formErrors.phoneno}</div>
                </div>
            </div>
            <div className="row">
            <div className="col-25" style={{fontWeight:"bold",margin:"10px 0"}}>
                    <label htmlFor="email">Mail Id</label>
                </div>
                <div className="col-75"  style={{position:"relative"}}>
                    <input type="email" id="email" name="email" required="required" value={this.state.email || ''} onChange={this.handleUserInput} />
                    <div className={`text-danger tooltip ${this.state.formErrors.email ? "show":""}`}>{this.state.formErrors.email}</div>
                </div>
            </div>
            <div className="row">
            <div className="col-25" style={{fontWeight:"bold",margin:"10px 0"}}>
                    <label htmlFor="country">Type</label>
                </div>
                <div className="col-75"  style={{position:"relative"}}>
                    <select id="suggestiontype" name="suggestiontype" onChange={this.handleUserInput} required="required">
                    {/* <option value="0">Select suggestion</option> */}
                        <option value="Suggestion" selected={this.state.feedback=="Suggestion"}>Suggestion</option>
                        <option value="Complaint" selected={this.state.feedback=="Complaint"}>Complaint</option>
                        <option value="Opinion" selected={this.state.feedback=="Opinion"}>Opinion</option>                      
                    </select>
                    <div className={`text-danger tooltip ${this.state.formErrors.suggestiontype ? "show":""}`}>{this.state.formErrors.suggestiontype}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-25" style={{fontWeight:"bold",margin:"10px 0"}}>
                    <label htmlFor="feed_back">Feed Back</label>
                </div>
                <div className="col-75"  style={{position:"relative"}}>
                    <textarea id="feedback" name="feedback" style={{height:"100px",width:"100%"}} value={this.state.feedback || ''} required="required" onChange={this.handleUserInput} ></textarea>
                    <div className={`text-danger tooltip ${this.state.formErrors.feedback ? "show":""}`}>{this.state.formErrors.feedback}</div>
                </div>
            </div>
            <div className="row">
            <div className="submit-btn"><button type="submit" name="reg_sub">Submit</button></div>

            </div>
        </form>
        </div>    
    </div>
    <FooterComponents/>
        </div>)
        
    }

     
      
}
export default FeedbackFormComponents;