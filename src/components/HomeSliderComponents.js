import React, { Component,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from'../images/banner1.jpg';
import TermsAndConditionsComponents from './popups/TermsAndConditionsComponents';
import PrivacyPolicyComponents  from './popups/PrivacyPolicyComponents';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
import { FormErrors } from './FormErrors';
import Toast from 'react-bootstrap/Toast';
class HomeSliderComponent extends Component{
constructor(props, context) {
  super(props, context);
  this.state = {
    profileCreatedForv:0,
    motherTonguev:'',
    userName:'',
    password:'',
    phone:'',
    firstName:'',
    lastName:'',
    gender:0,
    castev:'',
    country:'',
    countrycode:'',
    show: false,
    // input: {},
    // errors: {},
    values: [],
    caste: [],
    // othercaste: [],
    profilecreatedfor:[],
    otpsessionid:'',
    // data:[],
    userID:'',
    sessionid:'',
    termsandconditions:false,
    response:"",
    formErrors: {
      gender:'',
      profileCreatedForv:'',
    motherTonguev:'',
    userName:'',
    password:'',
    phone:'',
    firstName:'',
    lastName:'',
    castev:'',
    country:'',
    countrycode:'',termsandconditions:""
  },
    genderValid:false,
    profileCreatedForvValid:false,
    motherTonguevValid:false,
    userNameValid:false,
    passwordValid:false,
    phoneValid:false,
    firstNameValid:false,
    lastNameValid:false,
    castevValid:false,
    termsandconditionsValid:false,
    formValid: false,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangecheck = this.handleChangecheck.bind(this)    

  }
  redirectToMobileVerify = (e) => {
    // e.preventDefault();    
    const { history } = this.props;
    history.push('/mobile-verification',this.state);
    }
   
    handleChange (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, () => { this.validateField(name, value) });      
    }
    
    handleChangecheck(e)
    {
      console.log(e.target.checked  );
      this.setState({termsandconditions: e.target.checked},() => { this.validateField("termsandconditions", e.target.checked) });
    }
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let genderValid = this.state.genderValid;
      let firstNameValid = this.state.firstNameValid;
      let userNameValid = this.state.userNameValid;
      let passwordValid = this.state.passwordValid;
      let phoneValid = this.state.phoneValid;
      let profileCreatedForvValid=this.state.profileCreatedForvValid;
      let lastNameValid = this.state.lastNameValid;
      let castevValid = this.state.castevValid;
      let termsandconditionsValid=this.state.termsandconditionsValid;
      let motherTonguevValid=this.state.motherTonguevValid;
      switch(fieldName) {

        
        case 'profileCreatedForv':          
          profileCreatedForvValid= value>=1;
          fieldValidationErrors.profileCreatedForv= profileCreatedForvValid?'':'profile created by required';        
          break;

        case 'firstName':
          firstNameValid= value.length >= 2;
          fieldValidationErrors.firstName= firstNameValid? '' : 'first name required';
          break;
          
          case 'lastName':
          lastNameValid = value.length >= 2;
          fieldValidationErrors.lastName = lastNameValid ? '': 'last name required';
          break;
          
          case 'gender':            
             genderValid = value>0;
          fieldValidationErrors.gender = genderValid ?'': 'gender required';
          break;
          
          case 'castev':
          castevValid = value >=1;
          fieldValidationErrors.castev = castevValid ? '':'caste required' ;
          break;
          
          
          case 'motherTonguev':
          motherTonguevValid = value>=1;
          fieldValidationErrors.motherTonguev = motherTonguevValid ?'':'mother tongue required' ;
          break;
      
          
          case 'phone':
          phoneValid = value.length >= 10;
          fieldValidationErrors.phone = phoneValid ? '': 'phone number not valid';
          break;
          
          
          case 'userName':
            userNameValid = value.length >= 3;
            fieldValidationErrors.userName= userNameValid ? '': 'enter valid username';
            break;
          
          case 'password':
           passwordValid = value.length >= 4;
            fieldValidationErrors.password= passwordValid ? '': 'enter valid password';
            break;

                       
            case 'termsandconditions':           
           termsandconditionsValid = value;
            fieldValidationErrors.termsandconditions= termsandconditionsValid ? '': 'Please accept terms and conditions';           
            break;

        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        genderValid:genderValid,
        profileCreatedForvValid:profileCreatedForvValid,
        userNameValid:userNameValid,
    passwordValid:passwordValid,
    phoneValid:phoneValid,
    firstNameValid:firstNameValid,
    lastNameValid:lastNameValid,
    castevValid:castevValid,
    
    motherTonguevValid:motherTonguevValid,
    termsandconditionsValid:termsandconditionsValid,
    
                    }, this.validateForm);
    
    }      
    validateForm() {
      this.setState({formValid: 
        this.state.profileCreatedForvValid &&
        this.state.genderValid &&
                      this.state.userNameValid &&
                      this.state.passwordValid &&
                      this.state.phoneValid &&
                      this.state.firstNameValid &&
                      this.state.lastNameValid &&                      
                      this.state.castevValid &&                      
                      this.state.motherTonguevValid &&
                      this.state.termsandconditionsValid 
                                           
      });
    }      
    errorClass(error) { return(error.length === 0 ? '' : 'has-error');}

  CheckUserName(e)
    {
      let fieldValidationErrors = this.state.formErrors;
      let userName="";
      userName=e.target.value;
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`${process.env.REACT_APP_API_KEY}Member/CheckUserName?username=${userName}`,requestOptions)
        .then(response => response.json())
        .then(
        data => {
          //  console.log(data);
          if(data==1)
          {     
            fieldValidationErrors.userName= "User name already exists.";
            this.setState({formErrors: fieldValidationErrors,
              userNameValid:false,}, this.validateForm);
          }

        
        }        
        );
    }
    
  handleSubmit = (e) => {
    const { history } = this.props;  
    e.preventDefault();     
    const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, () => { this.validateField(name, value) });

   if(this.state.formValid==true ){
    this.getotp();
    // this.redirectToMobileVerify()
  }
    else
    {
      console.log(e.target.termsandconditions.checked);
      this.validateField("gender", e.target.gender.value)
      this.validateField(e.target.profileCreatedForv.name, e.target.profileCreatedForv.value)
      this.validateField(e.target.firstName.name, e.target.firstName.value)
      this.validateField(e.target.lastName.name, e.target.lastName.value)      
      this.validateField(e.target.castev.name, e.target.castev.value)
      this.validateField(e.target.motherTonguev.name, e.target.motherTonguev.value)
      this.validateField(e.target.emailID.name, e.target.emailID.value)
      this.validateField(e.target.phone.name, e.target.phone.value)
      this.validateField(e.target.code.name, e.target.code.value)
      this.validateField(e.target.userName.name, e.target.userName.value)
      this.validateField(e.target.password.name, e.target.password.value)
      this.validateField(e.target.termsandconditions.name, e.target.termsandconditions.checked)     
    }
  }
  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }
  getotp = () => {
  // e.preventDefault();    
  const {phone}=this.state;  
  fetch(`${process.env.REACT_APP_API_KEY}SendSMS?mobilenumber=${phone}`)
    .then(response => response.json())
    .then(
      data => {
        if(data.status=="Success")
        {
          this.setState({otpsessionid:data.details});          
          // alert("OTP in successful,Redirecting...");
          this.redirectToMobileVerify();  
        }
        else{
          alert("OTP sending Failed.")
        }
      }
    );
  }
componentDidMount() {
  fetch(`${process.env.REACT_APP_API_KEY}AllMotherTongues`)
  .then(function(res) {
      return res.json();
  }).then((json)=> {
      this.setState({
         values: json
      })
  });
  fetch(`${process.env.REACT_APP_API_KEY}AllCastes`)
  .then(function(res) {
      return res.json();
  }).then((json)=> {
      this.setState({
        caste: json
      })
  });
  fetch(`${process.env.REACT_APP_API_KEY}Member/AllProfileCreatedBy`)
  .then(function(res) {
      return res.json();
  }).then((json)=> {
      this.setState({
        profilecreatedfor: json
      })
  });  
  }
    render() {
      
        return (
        <div>
  <div className="home_slider">
<Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src="images/banner.jpg" alt="First slide"/>  
  </Carousel.Item>
  {/* 
  <Carousel.Item><img className="d-block w-100" src="images/banner12.jpg" alt="Second slide" /> 
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src="images/banner12.jpg" alt="Third slide" />  
  </Carousel.Item>*/}
</Carousel>          
            <div className="fill-form">
                 <h2>FREE REGISTER NOW</h2>
                 
                      <form className="reg-form"  onSubmit={this.handleSubmit}>
                        <div className="row">
                          <div className="col-md-12"  style={{position:"relative"}}>
                            <select className="form-1" name="profileCreatedForv" value={this.state.profileCreatedForv}  onChange={this.handleChange}>
                              <option value="0">Profile Created By</option>
                              {
                              this.state.profilecreatedfor.map((obj) => {
                              return <option key={obj.profileCreatedByID} value={obj.profileCreatedByID}>{obj.profileCreatedBy}</option>
                              })
                              }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.profileCreatedForv ? "show":""}`}>{this.state.formErrors.profileCreatedForv}</div>
                          </div>
                        </div>                          
                        <div className="row">
                            <div className="col-md-6" style={{position:"relative"}}>
                              <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" onChange={this.handleChange} value = {this.state.firstName} />
                              <div className={`text-danger tooltip ${this.state.formErrors.firstName ? "show":""}`}>{this.state.formErrors.firstName}</div>
                            </div>
                            <div className="col-md-6" style={{position:"relative"}}>
                              <input type="text" placeholder="Enter Last Name" name="lastName" id="lastName" onChange={this.handleChange} value = {this.state.lastName} />
                              <div className={`text-danger tooltip ${this.state.formErrors.lastName ? "show":""}`}>{this.state.formErrors.lastName}</div>
                            </div>	                          					
                        </div>        
                        <div className="col-md-12">
                        <div className="row">                        
                          <div className="col-md-3 my-2">
                              <b>Gender:</b>
                          </div>                            
                          <div className="col-md-3 my-2">
                            <div className="form-check" style={{display:'inline-block',padding:"0"}}>
                              
                              <input className="form-check-input" type="radio" name="gender" id="male"  value="1" style={{width:"8px",height:"8px",margin:"4px 5px",padding:"7px"}} onChange={this.handleChange} checked={this.state.gender === "1"} />
                              <label className="form-check-label" htmlFor="1">Male</label>
                            </div>
                          </div>	
                          <div className="col-md-4 my-2" style={{position:"relative"}}>
                          <div className="form-check" style={{display:'inline-block',padding:"0"}}>
                              <input className="form-check-input" type="radio" name="gender" id="female" value="2" style={{width:"8px",height:"8px",margin:"4px 5px",padding:"7px"}} onChange={this.handleChange} checked={this.state.gender === "2"} />
                              <label className="form-check-label" htmlFor="2">Female</label>
                            </div>
                            <div className={`text-danger tooltip ${this.state.formErrors.gender ? "show":""}`}>{this.state.formErrors.gender}</div>
                          </div>	
                        </div>
                        </div>                          
                        <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                            <select name="castev" id="caste" className="region" onChange={this.handleChange} >
                              <option value="0">Select Caste</option>
                                {
                                  this.state.caste.map((obj) => {
                                  return <option key={obj.castID} value={obj.castID}>{obj.castName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.castev ? "show":""}`}>{this.state.formErrors.castev}</div>
                          </div>
                        </div> 
                        <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                            <select name="motherTonguev" id="motherTongue" className="mother" onChange={this.handleChange} >
                              <option value="0">Select Mother Tongue</option>
                                {
                                  this.state.values.map((obj) => {
                                  return <option key={obj.languageID} value={obj.languageID}>{obj.languageName}</option>
                                  })
                                }
                            </select>                            
                            <div className={`text-danger tooltip ${this.state.formErrors.motherTonguev ? "show":""}`}>{this.state.formErrors.motherTonguev}</div>
                          </div>	
                        </div> 
                        {/*  
                        <div className="row">
                          <div className="col-md-12">
                            <select name="Country" id="Country1" className="Country" onChange={this.handleChange}>
                              <option value="0">Country Living In</option>
                              <option value="India">India</option>
                            </select>
                             <div className={`text-danger tooltip ${this.state.formErrors.countryValid ? "":"show"}`}>{this.state.formErrors.country}</div> 
                          </div>	 			
                        </div>	*/}		
                        <div className="row">
                          <div className="col-md-12">
                          <input type="text" placeholder="Enter Your Email" name="emailID" value = {this.state.emailID} onChange={this.handleChange} onChange={this.handleChange}  />
                          </div>						
                        </div>	
                        <div className="row">
                          <div className="col-md-4">
                            <select className="country-code" name="code" id="code"  onChange={this.handleChange}  >
                              <option value="+91">+91</option>
                              {/* <option value="+355">+355</option>
                              <option value="+213">+213</option> */}
                            </select>
                          </div>
                          <div className="col-md-8" style={{position:"relative"}}>
                            <input type="number" placeholder="Enter Your 10 Digit No" maxLength = "10" onInput={this.maxLengthCheck} name="phone" id="phone" value = {this.state.phone} onChange={this.handleChange} />                            
                            <div className={`text-danger tooltip ${this.state.formErrors.phone ? "show":""}`}>{this.state.formErrors.phone}</div>
                            {/* <span className="signUpFree" style={{display:"block",float:"right"}}><button onClick={this.getotp} style={{color:"#8f0247",background:"transparent",border:"none"}}>Get OTP</button></span> */}
                          </div>						
                          
                        </div>		
                          
                          <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                          <input type="text" placeholder="Enter Your Username" name="userName" value = {this.state.username} onChange={this.handleChange} onChange={this.handleChange} onBlur={(e) => this.CheckUserName(e)} />
                          <div className={`text-danger tooltip ${this.state.formErrors.userName ? "show":""}`}>{this.state.formErrors.userName}</div>
                          </div>						
                          </div>
                          <div className="col-md-12" style={{position:"relative"}}>
                          <input type="password" placeholder="Password" name="password" value = {this.state.password} onChange={this.handleChange} />                          
                          <div className={`text-danger tooltip ${this.state.formErrors.password ? "show":""}`}>{this.state.formErrors.password}</div>
                          </div>
                          <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                              <div className="code-accept">
                              <input type="checkbox" id="termsandconditions" checked={this.state.termsandconditions} value={this.state.termsandconditions} name="termsandconditions" onChange={this.handleChangecheck} data-validetta="required" style={{display:"inline-block",width:"auto"}} />
                              <span>&nbsp;I accept &nbsp;
                                <TermsAndConditionsComponents/>&nbsp;
                                and &nbsp;
                                <PrivacyPolicyComponents/>
                                </span>
                              </div>	
                              <div className={`text-danger tooltip ${this.state.formErrors.termsandconditions ? "show":""}`}>{this.state.formErrors.termsandconditions}</div>                  					
                          </div>						
                          </div>                          
                          <div className="row">
                          <div className="col-md-12">
                              <div className="submit-btn">                                
                              <button type="submit" name="reg_sub">Register Now</button>                              
                              </div>						
                          </div>					
                          	
                          </div>
                          <div className="row">
                          <div className="col-md-15">
                          <div className="col-md-14 my-1">
                              <b style={{width:"100%",fontSize: "12px",fontFamily: 'Overlock-Black'}}>Facing Challenge? Mail your details to mymarathalagna@gmail.com</b>
                          </div>  		
                          </div>					
                          	
                          </div>
                      </form>
                  </div>
        </div>  
        <Toast onClose={() => this.setState({response:''})} show={this.state.response!=''?true:false} className={this.state.response=="OTP required."?"bg-success":"bg-danger"} delay={3000} autohide>
          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
        </div>)        
    } 
}
export default withRouter(HomeSliderComponent);