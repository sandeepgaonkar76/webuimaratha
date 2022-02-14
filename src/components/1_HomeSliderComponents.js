import React, { Component,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from'../images/banner1.jpg';
import TermsAndConditionsComponents from './popups/TermsAndConditionsComponents';
import PrivacyPolicyComponents from './popups/PrivacyPolicyComponents';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
class HomeSliderComponent extends Component{
constructor(props, context) {
  super(props, context);
  this.state = {
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
    sessionid:'',
    termsandconditions:false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  redirectToMobileVerify = (e) => {
    // e.preventDefault();    
    const { history } = this.props;
    history.push('/mobile-verification',this.state);
    }
    
  validate = (e) =>{
    const {aboutMe}=this.state;
		// let input = this.state.input;
		let errors = {};
		let isValid = true;
    if (!aboutMe){
		  isValid = false;
		  errors["aboutMe"] = "About Me required";
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
      }),() => { this.validate() });  
  }

  CheckUserName(e)
    {let errors = {};
      let userName="";
      userName=e.target.value;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      fetch(`${process.env.REACT_APP_API_KEY}Member/CheckUserName?username=${userName}`,requestOptions)
        .then(response => response.json())
        .then(
        data => {
          //  console.log(data);
          if(data==1)
          {     
          errors["userName"] = "User name already exists.";
          this.setState({
            errors: errors
            });
          }
        
        }        
        );
    }
    
  handleSubmit = (e) => {
    const { history } = this.props;  
    e.preventDefault();     
    if(this.validate()){
    const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },      
			body: JSON.stringify({
        profileCreatedFor:parseInt(this.state.profileCreatedForv),
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        gender:parseInt(this.state.gender),
        caste:parseInt(this.state.castev),
        motherTongue:parseInt(this.state.motherTonguev),
        emailID:this.state.emailID,
        username:this.state.userName,
        password:this.state.password,
        phone:this.state.phone,
      })
		};
		fetch(`${process.env.REACT_APP_API_KEY}Member/TempRegisterMember`, requestOptions)
			.then(response => response.json())
			.then(
				 data => {
          //  console.log(data);
            if(data.memberId=='')
            {
              alert("Registration in Failed.");
              // this.getotp();
            }
            else{
              // alert("Registration in successful,Member ID:"+data.userID);
              this.setState({userID:data.userID});   
              this.getotp();
              // this.redirectToMobileVerify()
            }
				 }
			);
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
          alert("OTP in Failed.")
        }
      }
    );
  }
componentDidMount() {
  console.log();
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
      const {sessionid}=this.state;
      const { profileCreatedForv,motherTonguev,password,phone,firstName,lastName,userName,emailID,gender,castev,otpsessionid,userID,termsandconditions } = (this.props.location && this.props.location.state) || {};
        return (
        <div>
  <div className="home_slider">
<Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src="images/banner1.jpg" alt="First slide"/>  
  </Carousel.Item>
  <Carousel.Item><img className="d-block w-100" src="images/banner12.jpg" alt="Second slide" /> 
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src="images/banner13.jpg" alt="Third slide" />  
  </Carousel.Item>
</Carousel>          
            <div className="fill-form">
                 <h2>REGISTER NOW</h2>
                      <form className="reg-form"  onSubmit={this.handleSubmit}>
                        <div className="row">
                          <div className="col-md-12"  style={{position:"relative"}}>
                            <select className="form-1" name="profileCreatedForv" value={this.state.profileCreatedForv}  onChange={this.handleChange}>
                              <option>Profile Created By</option>
                              {
                              this.state.profilecreatedfor.map((obj) => {
                              return <option key={obj.profileCreatedByID} value={obj.profileCreatedByID}>{obj.profileCreatedBy}</option>
                              })
                              }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.profileCreatedForv ? "show":""}`}>{this.state.errors.profileCreatedForv}</div>
                          </div>
                        </div>                          
                        <div className="row">
                            <div className="col-md-6" style={{position:"relative"}}>
                              <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" onChange={this.handleChange} value = {this.state.firstName} />
                              <div className={`text-danger tooltip ${this.state.errors.firstName ? "show":""}`}>{this.state.errors.firstName}</div>
                              
                            </div>
                            <div className="col-md-6" style={{position:"relative"}}>
                              <input type="text" placeholder="Enter Last Name" name="lastName" id="lastName" onChange={this.handleChange} value = {this.state.lastName} />
                              <div className={`text-danger tooltip ${this.state.errors.lastName ? "show":""}`}>{this.state.errors.lastName}</div>
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
                              <label className="form-check-label" htmlFor="0">Male</label>
                            </div>
                          </div>	
                          <div className="col-md-4 my-2" style={{position:"relative"}}>
                          <div className="form-check" style={{display:'inline-block',padding:"0"}}>
                              <input className="form-check-input" type="radio" name="gender" id="female" value="2" style={{width:"8px",height:"8px",margin:"4px 5px",padding:"7px"}} onChange={this.handleChange} checked={this.state.gender === "2"} />
                              <label className="form-check-label" htmlFor="1">Female</label>
                            </div>
                            <div className={`text-danger tooltip gender ${this.state.errors.gender ? "show":""}`}>{this.state.errors.gender}</div>                  
                          </div>	
                        </div>
                        </div>                          
                        <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                            <select name="castev" id="caste" className="region" onChange={this.handleChange} >
                              <option>Select Caste</option>
                                {
                                  this.state.caste.map((obj) => {
                                  return <option key={obj.castID} value={obj.castID}>{obj.castName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.castev ? "show":""}`}>{this.state.errors.castev}</div>                  
                          </div>
                        </div> 
                        <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                            <select name="motherTonguev" id="motherTongue" className="mother" onChange={this.handleChange} >
                              <option value="">Select Mother Tongue</option>
                                {
                                  this.state.values.map((obj) => {
                                  return <option key={obj.languageID} value={obj.languageID}>{obj.languageName}</option>
                                  })
                                }
                            </select>                            
                            <div className={`text-danger tooltip ${this.state.errors.motherTonguev ? "show":""}`}>{this.state.errors.motherTonguev}</div>                  
                          </div>	
                        </div>   
                        <div className="row">
                          <div className="col-md-12">
                            <select name="Country" id="Country1" className="Country" onChange={this.handleChange}>
                              <option value="">Country Living In</option>
                              <option value="India">India</option>
                            </select>
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
                            <input type="number" placeholder="Enter Your 10 Digit No" name="phone" id="phone" value = {this.state.phone} onChange={this.handleChange} />
                            <div className={`text-danger tooltip ${this.state.errors.phone ? "show":""}`}>{this.state.errors.phone}</div>                  
                            {/* <span className="signUpFree" style={{display:"block",float:"right"}}><button onClick={this.getotp} style={{color:"#8f0247",background:"transparent",border:"none"}}>Get OTP</button></span> */}
                          </div>						
                          {/* <div className="col-md-3">
                            <input type="number" placeholder="OTP" name="otp" id="otp" value = {this.state.otp} onChange={this.handleChange} />
                            <input type="hidden" placeholder="sessionid" name="sessionid" id="sessionid" value={this.state.otpsessionid} readOnly />
                            <span className="signUpFree" style={{display:"block",float:"right"}}><button onClick={this.VerifyOtp} style={{color:"#8f0247",background:"transparent",border:"none"}}>Verify</button></span>
                          </div>						 */}
                        </div>		
                          
                          <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                          <input type="text" placeholder="Enter Your Username" name="userName" value = {this.state.username} onChange={this.handleChange} onChange={this.handleChange} onBlur={(e) => this.CheckUserName(e)} />
                          <div className={`text-danger tooltip ${this.state.errors.userName ? "show":""}`}>{this.state.errors.userName}</div>                  
                          </div>						
                          </div>
                          <div className="col-md-12" style={{position:"relative"}}>
                          <input type="password" placeholder="Password" name="password" value = {this.state.password} onChange={this.handleChange} />
                          <div className={`text-danger tooltip ${this.state.errors.password ? "show":""}`}>{this.state.errors.password}</div>                  
                          </div>
                          <div className="row">
                          <div className="col-md-12" style={{position:"relative"}}>
                              <div className="code-accept">
                              <input type="checkbox" id="termsandconditions" name="termsandconditions" value = {this.state.termsandconditions} onChange={this.handleChange} data-validetta="required" style={{display:"inline-block",width:"auto"}} />
                              <span>&nbsp;I accept &nbsp;
                                <TermsAndConditionsComponents/>&nbsp;
                                and &nbsp;
                                <PrivacyPolicyComponents/>
                                </span>
                              </div>	
                              <div className={`text-danger tooltip ${this.state.errors.termsandconditions ? "show":""}`}>{this.state.errors.termsandconditions}</div>                  					
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
                              <b style={{fontSize: "14px",fontFamily: 'Overlock-Black'}}>Need help? Contact # 8277089755/mymarathalagna@gmail.com</b>
                          </div>  		
                          </div>					
                          	
                          </div>
                      </form>
                  </div>
        </div>  
        </div>)        
    } 
}
export default withRouter(HomeSliderComponent);