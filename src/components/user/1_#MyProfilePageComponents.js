import React, { Component } from 'react';
import TopBarComponents from './TopBarComponents';
import UserFooterComponents from './UserFooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../style.css';

import { BrowserRouter, Route,withRouter,Redirect,useHistory  } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';

class DashboardComponents extends Component{
	constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},
      maritalstauss:[],
		  errors: {},
      response:"",
		  token:"",
		  sessionid:'',
		  username:'',
		  userID:'',
      aboutMe:'',
      middleName:"",
      profilecreatedfor:[],
      values:[],
      caste:[],
      nakshatra:[],
      mothertounge:[],
      castev:'',
      nakshatrav:'',
      rashi:[],
      height:[],
      education:[],
      occupation:[],
      myprofiledetails:[],
      editformv:false,
      dateOfBirth:'',
            emailID: "",
      otherCaste: "",
      
rashi: "",

heightValue: "",
nativePlace: "",
currentCity: "",

educationName: "",
otherEducation: "",
nadi: "",
nadiName: "",
address2: "",

occupationDetails: "",
state: 0,
age: 0,
country: 0,
marryOtherCaste: "",
maritalStatus: 0,
maritalStatusName: "",
handicap: 0,
isHandicap: "",
heightDescription: "",
castName: "",
nakshatraName: "",
languageName: "",
rashiName: "",
bloodGroup: 0,
bloodGroupName: "",
modeofContact: "",
expectation: "",
familyTypeName: "",
familyStatusName: "",
familyValueName: "",
bodyType: "",
complexion: "",
profileCreatedForValid:false,
motherTongueValid:false,
aboutMeValid:false,
passwordValid:false,
phoneValid:false,
firstNameValid:false,
lastNameValid:false,
middleNameValid:false,
currentCityValid:false,
educationValid:false,
addressValid:false,
address2Valid:false,
occupationValid:false,
userNameValid:false,
dateOfBirthValid:false,
emailIDValid:false,
genderValid:false,
casteValid:false,
userIDValid:false,
nakshatraValid:false,
otherCasteValid:false,
rashiValid:false,
heightValid:false,
heightValueValid:false,
nativePlaceValid:false,
educationNameValid:false,
otherEducationValid:false,
occupationDetailsValid:false,
stateValid:false,
ageValid:false,
countryValid:false,
marryOtherCasteValid:false,
maritalStatusValid:false,
maritalStatusNameValid:false,
handicapValid:false,
isHandicapValid:false,
heightDescriptionValid:false,
castNameValid:false,
nakshatraNameValid:false,
languageNameValid:false,
rashiNameValid:false,
bloodGroupValid:false,
bloodGroupNameValid:false,
modeofContactValid:false,
expectationValid:false,
familyTypeNameValid:false,
familyStatusNameValid:false,
familyValueNameValid:false,
bodyTypeValid:false,
complexion:false,
formValid: false,
formErrors: {
  profileCreatedFor:'',
motherTongue:'',
aboutMe:'',
password:'',
phone:'',
firstName:'',
lastName:'',
middleName:'',
currentCity:'',
education:'',
address:'',
address2:'',
occupation:'',
userName:'',
dateOfBirth:'',
emailID:'',
gender:'',
caste:'',
userID:'',
nakshatra:'',
otherCaste:'',
rashi:'',
height:'',
heightValue:'',
nativePlace:'',
educationName:'',
otherEducation:'',
occupationDetails:'',
state:'',
age:'',
country:'',
marryOtherCaste:'',
maritalStatus:'',
maritalStatusName:'',
handicap:'',
isHandicap:'',
heightDescription:'',
castName:'',
nakshatraName:'',
languageName:'',
rashiName:'',
bloodGroup:'',
bloodGroupName:'',
modeofContact:'',
expectation:'',
familyTypeName:'',
familyStatusName:'',
familyValueName:'',
bodyType:'',
complexion:'',
},
		};
		this.handleChange = this.handleChange.bind(this);	
    
	  }
    getallmothertounge()
    {
      fetch(`${process.env.REACT_APP_API_KEY}AllMotherTongues`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
           mothertounge: json
        })
      });
    }

    getalloccupation()
    {
      fetch(`${process.env.REACT_APP_API_KEY}AllMotherTongues`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
           occupation: json
        })
      });
    }


    getallmaritalstatus()
    {
      fetch(`${process.env.REACT_APP_API_KEY}AllMaritalStatus`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
           maritalstauss: json
        })
      });
    }
    

    getalleducation()
    {
      fetch(`${process.env.REACT_APP_API_KEY}AllEducation`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
          education: json
        })
      });
    }

    getallheight()
    {
      fetch(`${process.env.REACT_APP_API_KEY}AllHeights`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
          height: json
        })
      });
    }

    getmyprofiledetailsonlogin(userid)
    {
      fetch(`${process.env.REACT_APP_API_KEY}Member/${userid}`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
          myprofiledetails: json
        });
      });
    }

    getallnaskshatra()
    {
      // fetch(`${process.env.REACT_APP_API_KEY}AllNakshatra`)
      fetch("http://webapimaratha-dev.ap-south-1.elasticbeanstalk.com/AllNakshatra")
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        
        this.setState({
           nakshatra: json
        })
      });
    }
  
    getallallcaste()
    {
      fetch(`${process.env.REACT_APP_API_KEY}AllCastes`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        this.setState({
          caste: json
        })
      });
    }
    getallallprofilecreateby()
    {
      fetch(`${process.env.REACT_APP_API_KEY}Member/AllProfileCreatedBy`)
      .then(function(res) {
          return res.json();
      }).then((json)=> {
          this.setState({
            profilecreatedfor: json
          })
      });  
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

            this.setState({
              reponse: "User name already exists."
              });
          }
        
        }        
        );
    }
  
    handleChange(e){		
      const name = e.target.name;
      const value = e.target.value;

      // this.setState((prevState) => ({
      //   ...prevState,
      //   [name]: value
      // }), () => { this.validateField(name, value) });
      this.setState({[name]: value}, () => { this.validateField(name, value) });
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let userNameValid = this.state.userNameValid;
        let passwordValid = this.state.passwordValid;
        let phoneValid = this.state.phoneValid;
        let profileCreatedForvValid=this.state.profileCreatedForvValid;
        let lastNameValid = this.state.lastNameValid;
        let genderValid = this.state.genderValid;
        let castevValid = this.state.castevValid;
        
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
            genderValid = value >=1;
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
  
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
          profileCreatedForvValid:profileCreatedForvValid,
          userNameValid:userNameValid,
      passwordValid:passwordValid,
      phoneValid:phoneValid,
      firstNameValid:firstNameValid,
      lastNameValid:lastNameValid,
      genderValid:genderValid,
      castevValid:castevValid,
      
      motherTonguevValid:motherTonguevValid,
                      }, this.validateForm);
      
      }      
      validateForm() {
        this.setState({formValid: 
          this.state.profileCreatedForvValid &&
                        this.state.userNameValid &&
                        this.state.passwordValid &&
                        this.state.phoneValid &&
                        this.state.firstNameValid &&
                        this.state.lastNameValid &&                      
                        this.state.genderValid &&                      
                        this.state.castevValid &&                      
                        this.state.motherTonguevValid                      
        });
      }      
      errorClass(error) { return(error.length === 0 ? '' : 'has-error');}

    handleSubmit(e)
    {e.preventDefault();    
   const {profileCreatedFor,motherTongue,aboutMe,password,phone,firstName,currentCity,education,nadiName,address,address2,occupation,userName,lastName,middleName,dateOfBirth,emailID,gender,caste,userID,nakshatra,
        otherCaste,rashi,height,
    heightValue,
    nativePlace,    
    educationName,
    otherEducation,
    nadi,
    occupationDetails,
    state,
    age,
    country,
    marryOtherCaste,
    maritalStatus,
    maritalStatusName,
    handicap,
    isHandicap,
    heightDescription,
    castName,
    nakshatraName,
    languageName,
    rashiName,
    bloodGroup,
    bloodGroupName,
    modeofContact,
    expectation,
    familyTypeName,
    familyStatusName,
    familyValueName,
    bodyType,
    complexion}=this.state;
      

      if(this.state.formValid==true){
      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     userID:parseInt(userID),
      //     aboutMe:aboutMe,
      //     firstName:firstName,
      //     middleName:middleName,
      //     lastName:lastName,
      //     motherTongue:parseInt(motherTongue),
      //     gender:parseInt(gender),
      //     dateOfBirth:dateOfBirth,
      //     caste:caste,
      //     currentCity:currentCity,
      //     education:education,
      //     nadiName:nadiName,
      //     address:address,
      //     phone:phone,
      //     address2:address2,
      //     // occupation:occupation,
      //     currentCity:currentCity,
      //     userName:userName,
      //     emailID:emailID,
      //     otherCaste:otherCaste,
      //     nakshatra:nakshatra,
      //     rashi:rashi,
      //     height:height,
      //     heightValue:heightValue,
      //     nativePlace:nativePlace,
      //     currentCity:currentCity,
      //     education:education,
      //     educationName:educationName,
      //     otherEducation:otherEducation,
      //     nadi:nadi,
      //     nadiName:nadiName,
      //     address2:address2,
      //     occupation:occupation,
      //     occupationDetails:occupationDetails,
      //     state:state,
      //     age:age,
      //     country:country,
      //     marryOtherCaste:marryOtherCaste,
      //     maritalStatus:maritalStatus,
      //     maritalStatusName:maritalStatusName,
      //     handicap:handicap,
      //     isHandicap:isHandicap,
      //     heightDescription:heightDescription,
      //     castName:castName,
      //     nakshatraName:nakshatraName,
      //     languageName:languageName,
      //     rashiName:rashiName,
      //     bloodGroup:bloodGroup,
      //     bloodGroupName:bloodGroupName,
      //     modeofContact:modeofContact,
      //     expectation:expectation,
      //     familyTypeName:familyTypeName,
      //     familyStatusName:familyStatusName,
      //     familyValueName:familyValueName,
      //     bodyType:bodyType,
      //     complexion:complexion,

      //   })
      // };
      
      // fetch(`${process.env.REACT_APP_API_KEY}Member/UpdateMember`, requestOptions)
      //   .then(response => response.json())
      //   .then(
      //      data => {
                  
      //     if(data==0)
      //     {
            
      //       this.setState({
      //         reponse: "Profile Updating Failed."
      //         });       
      //       // this.setState({message: "Registration Failed"});  
      //     }
      //     else if(data==1){
      //       // this.setState({message: "Registration in successful,Member ID:"+data.userID});
      //       this.setState({
      //         reponse: "Updated your profile successfully"
      //         });       
        //         }
        //    }
        // );
          }else
          {
            this.setState({
              response: "Please fill all the required fields"
              });
          }
    }  
  
    onFileChange = event => {    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });	  
      };
  
      // On file upload (click the upload button)
      onFileUpload = (e) => {
        let errors = {};
        const {userID,FileUpload} =this.state;
      e.preventDefault();
      // Create an object of formData
      const formData = new FormData();
      
      // Update the formData object
      // formData.append(
      //   "FileUpload ",
      //   this.state.selectedFile,
      //   this.state.selectedFile.name
      // );

      var formdata = new FormData();
formdata.append("FileUpload",this.state.selectedFile,this.state.selectedFile.name);

var requestOptions = {
  method: 'PUT',
  body: formdata,
  redirect: 'follow'
};

fetch(`${process.env.REACT_APP_API_KEY}Member/UploadPhoto?memberid=${this.state.userID}`,requestOptions)
  .then(response => response.text())
  .then(result =>{
    if(result)
    {
      errors["error"]="profile image uploded";
					this.setState({
						errors: errors
					  });
            this.setState({
              reponse: "profile image uploded"
              });       
    }
    else{
      errors["error"]="Upload failed";
					this.setState({
						errors: errors
					  });
            this.setState({
              reponse: "Upload failed"
              });  
    }
  }
    )
  .catch(error => console.log('error', error));
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      
  // 		if (this.state.selectedFile) {
         
  // 		  return (
  // 			<div>
  // 			  <h2>File Details:</h2>
           
  //   <p>File Name: {this.state.selectedFile.name}</p>
     
           
  //   <p>File Type: {this.state.selectedFile.type}</p>
     
           
  //   <p>
  // 				Last Modified:{" "}
  // 				{this.state.selectedFile.lastModifiedDate.toDateString()}
  // 			  </p>
     
  // 			</div>
  // 		  );
  // 		} else {
  // 		  return (
  // 			<div>
  // 			  <br />
  // 			  <h4>Choose before Pressing the Upload button</h4>
  // 			</div>
  // 		  );
  // 		}
      };
      
  
    componentDidMount() {
      this.getallmothertounge();
      this.getallallcaste();
       this.getallallprofilecreateby();
       this.getallnaskshatra();
       this.getalleducation(); 
       this.getallmaritalstatus();

      if(localStorage.getItem('sessionid'))
    {
      let userid=localStorage.getItem('userid');
      this.getmyprofiledetailsonlogin(userid);
      this.setState({userID:userid});   
    }

    }
	  
    render() {
		const { history } = this.props;
    const {aboutMe,middleName, userName,phone, otpsessionid,profileCreatedForv,motherTonguev,password,firstName,lastName,emailID,gender,castev,userID,otp } = (this.props.location && this.props.location.state) || {};
        return (
			<>
			<div>
      <TopBarComponents/>

<div className="container-fluid">
   <div className="row">
   {/* <SideBarComponents /> */}
   <main className="col-md-12 ms-sm-auto col-lg-12 p-0">
  <div className="container p-0">
<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-3">
   <h1 className="h2">My Profile</h1>
 </div>
	 {/* 1 */}
   <section className="profile-page py-4">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<div className="ProfileText">
				
					<h2 >Update Your Profile</h2>
          <form onSubmit={this.handleSubmit} style={{padding:"10px"}}>
					<Row style={{padding:"10px"}}>
					
					<Col>
					<div className="form-group">
					<label htmlFor="edit-name">Profile Photo</label>
					<Row>
					<Col>
					<div>
                <input type="file" onChange={this.onFileChange} style={{border:"none"}} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
					</Col>
					<Col>
					<img src={this.state.selectedFile? URL.createObjectURL(this.state.selectedFile) : null || this.state.myprofiledetails.s3ImagePath } alt={this.state.selectedFile? this.state.selectedFile.name : null} style={{maxHeight:"100px",width:"100px",border:"solid 1px #ccc",borderRadius:"100px",minHeight:"100px"}} />
					</Col>
					</Row>
					
					</div>
					</Col>	
					<Col className="col-8">
					<div className="form-group">
					<label htmlFor="edit-name">About Me</label>
          <input type="textarea" id="aboutMe" name="aboutMe" className="form-text required" onChange={this.handleChange} style={{wiith:"100%",height:"100px"}} value={this.state.aboutMe || this.state.myprofiledetails.aboutMe} />
					</div>
					</Col>
				</Row>
					
						
<div className="col p-0">
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Basic Details</h2>
</div>
<Row>
					
							
          
          <Col className='col-4'>
          <div className="form-group">
          <label htmlFor="edit-name">Profile Created For</label>
          <select className="form-1" name="profileCreatedForv" value={this.state.profileCreatedForv || this.state.myprofiledetails.profileCreatedBy}  onChange={this.handleChange}>
                              <option>Profile Created By</option>
                              {
                              this.state.profilecreatedfor.map((obj) => {
                              return <option key={obj.profileCreatedByID} value={obj.profileCreatedByID} selected={obj.profileCreatedByID===this.state.myprofiledetails.profileCreateBy}>{obj.profileCreatedBy}</option>
                              })
                              }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.profileCreatedForv ? "show":""}`}>{this.state.errors.profileCreatedForv}</div>
          </div>
          </Col>
          <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Username</label>
							<input type="text" id="userName" name="userName" className="form-text required" onChange={this.handleChange} onBlur={(e) => this.CheckUserName(e)} value ={this.state.userName || this.state.myprofiledetails.userName}  onBlur={(e) => this.CheckUserName(e)}  />
							<div className={`text-danger tooltip ${this.state.errors.userName ? "show":""}`}>{this.state.errors.userName}</div>                  
							
							</div>
							</Col>

              <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Email</label>
							<input type="text" id="emailID" name="emailID" className="form-text required" onChange={this.handleChange} onBlur={(e) => this.CheckUserName(e)} value ={this.state.emailID || this.state.myprofiledetails.emailID}   />
							<div className={`text-danger tooltip ${this.state.errors.emailID ? "show":""}`}>{this.state.errors.emailID}</div>                  
							
							</div>
							</Col>
							
        </Row>
					<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">First Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" onChange={this.handleChange} value = {this.state.firstName ||this.state.myprofiledetails.firstName|| firstName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Middle Name</label>
							<input type="text" id="middleName" name="middleName" className="form-text required" onChange={this.handleChange} value = {this.state.middleName ||this.state.myprofiledetails.middleName|| middleName} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Last Name</label>
							<input type="text" id="lastName" name="lastName" className="form-text required" onChange={this.handleChange} value = {this.state.lastName || this.state.myprofiledetails.lastName} />
							</div>
							</Col>
						</Row>

            <Row>
					
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Mother Tongue</label>
          
          <select name="motherTonguev" id="motherTongue" className="mother" onChange={this.handleChange} value={this.state.myprofiledetails.montherTounge}>
                              <option defaultChecked>Select Mother Tongue</option>
                                {
                                  this.state.mothertounge.map((obj) => {
                                  return <option key={obj.languageID} value={obj.languageID} selected={obj.languageID == this.state.myprofiledetails.motherTongue}>{obj.languageName}</option>
                                  })
                                }
                            </select>                            
                            <div className={`text-danger tooltip ${this.state.errors.motherTonguev ? "show":""}`}>{this.state.errors.motherTonguev}</div>                  
          </div>
          </Col>
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Gender</label>
          <div className="row m-0">                        
          <select className="form-1" name="gender" value={this.state.gender || this.state.myprofiledetails.gender}  onChange={this.handleChange}>
                              <option value="0">Gender</option>
                              <option value="1" selected={"1"==this.state.myprofiledetails.profileCreateBy}>Male</option>
                              <option value="2" selected={"2"==this.state.myprofiledetails.profileCreateBy}>Female</option>
                            </select>
                            <div className={`text-danger tooltip gender ${this.state.errors.gender ? "show":""}`}>{this.state.errors.gender}</div>                  
                          
                        </div>
          </div>
          </Col>
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Date of Birth</label>
          <input type="text" id="dateOfBirth" name="dateOfBirth" className="form-text required" onChange={this.handleChange} value = {this.state.dateOfBirth || this.state.myprofiledetails.dateOfBirth} />
          </div>
          </Col>
        </Row>

             <div className="col p-0">
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Religional Details</h2>
</div>                 
						<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Caste</label>
							<select name="castev" id="caste" className="region" onChange={this.handleChange} >
                              <option>Select Caste</option>
                                {
                                  this.state.caste.map((obj) => {
                                  return <option key={obj.castID} value={obj.castID} selected={obj.castID == this.state.myprofiledetails.caste}>{obj.castName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.castev ? "show":""}`}>{this.state.errors.castev}</div>                  
							</div>
							</Col>

              <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Other Caste</label>
              
              <input type="text" id="otherCaste" name="otherCaste" className="form-text required" onChange={this.handleChange} value = {this.state.otherCaste || this.state.myprofiledetails.otherCaste} />
							
                            <div className={`text-danger tooltip ${this.state.errors.otherCaste ? "show":""}`}>{this.state.errors.otherCaste}</div>                  
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Nakshatra</label>
              <select name="nakshatrav" id="nakshatra" className="region" onChange={this.handleChange} >
                              <option value="0">Select Nakshatra</option>
                                {
                                  this.state.nakshatra.map((obj) => {
                                  return <option key={obj.nakshatraID} value={obj.nakshatraID} selected={obj.nakshatraID==this.state.myprofiledetails.nakshatra}>{obj.nakshatraName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.nakshatrav ? "show":""}`}>{this.state.errors.nakshatrav}</div>                  

							</div>
							</Col>
							
						</Row>

            <div className="col p-0">
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Other Details</h2>
</div>
<Row>

              <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Rashi</label>
              
              <input type="text" id="rashi" name="rashi" className="form-text required" onChange={this.handleChange} value = {this.state.rashi || this.state.myprofiledetails.rashi} />
							
                            <div className={`text-danger tooltip ${this.state.errors.rashi ? "show":""}`}>{this.state.errors.rashi}</div>                  
							</div>
							</Col>
<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Height</label>
              
              <select name="heightv" id="height" className="region" onChange={this.handleChange} >
                              <option>Select Height</option>
                                {
                                  this.state.height.map((obj) => {
                                  return <option key={obj.heightID} value={obj.heightID} selected={obj.heightID==this.state.myprofiledetails.nakshatra}>{obj.heightDescription}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.heightv ? "show":""}`}>{this.state.errors.nakshatrav}</div>                  
							</div>
							</Col>
             
            
</Row>
						<Row>
					
           
            <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Native Place</label>
							<input type="text" id="nativePlace" name="nativePlace" className="form-text required" onChange={this.handleChange} value = {this.state.nativePlace || this.state.myprofiledetails.nativePlace} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Current City</label>
							<input type="text" id="currentCity" name="currentCity" className="form-text required" onChange={this.handleChange} value = {this.state.currentCity || this.state.myprofiledetails.currentCity} />
							</div>
							</Col>

                
            <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Country</label>
							<input type="text" id="country" name="country" className="form-text required" onChange={this.handleChange} value = {this.state.country || this.state.myprofiledetails.country} />
							</div>
							</Col>
						
						</Row>


            <Row>
					
            <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Education</label>
              
              <select name="educationv" id="education" className="region" onChange={this.handleChange} >
                              <option>Select Education</option>
                                {
                                  this.state.education.map((obj) => {
                                  return <option key={obj.educationID} value={obj.educationID} selected={obj.educationID==this.state.myprofiledetails.education}>{obj.education}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.educationv ? "show":""}`}>{this.state.errors.educationv}</div>                  
							</div>
							</Col>

              <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Other Education</label>
          <input type="text" id="otherEducation" name="otherEducation" className="form-text required" onChange={this.handleChange} value = {this.state.otherEducation||this.state.myprofiledetails.otherEducation} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Occupation</label>
          
          <select name="occupationv" id="occupation" className="region" onChange={this.handleChange} >
                          <option>Select Occupation</option>
                            {
                              this.state.occupation.map((obj) => {
                              return <option key={obj.occupationID} value={obj.occupationID}>{obj.occupationDescription || this.state.myprofiledetails.occupation}</option>
                              })
                            }
                        </select>
                        <div className={`text-danger tooltip ${this.state.errors.occupationv ? "show":""}`}>{this.state.errors.occupationv}</div>                  
          </div>
          </Col>
         
        </Row>
<Row>
<Col>
          <div className="form-group">
          <label htmlFor="edit-name">Address</label>
          <input type="text" id="address" name="address" className="form-text required" onChange={this.handleChange} value = {this.state.address||this.state.myprofiledetails.address} />
          </div>
          </Col>

        
  
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">address2</label>
          <input type="text" id="address2" name="address2" className="form-text required" onChange={this.handleChange}  />
          <div className={`text-danger tooltip ${this.state.errors.address2 ? "show":""}`}>{this.state.errors.address2||this.state.myprofiledetails.address2}</div>                  
          
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Phone</label>
          <input type="text" id="phone" name="phone" className="form-text required" onChange={this.handleChange} value = {this.state.phone||this.state.myprofiledetails.phone} />
          </div>
          </Col>
</Row>
      

        
        <Row>
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Marry Other Caste</label>
          <input type="text" id="marryOtherCaste" name="marryOtherCaste" className="form-text required" onChange={this.handleChange} value = {this.state.marryOtherCaste || this.state.myprofiledetails.marryOtherCaste} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Marital Status</label>
        
    
                        <select name="maritalStatus" id="maritalStatus" className="region" onChange={this.handleChange} >
                              <option>Select Marital Status</option>
                                {
                                  this.state.maritalstauss.map((obj) => {
                                  return <option key={obj.maritalStatusID} value={obj.maritalStatusID} selected={obj.maritalStatusID == this.state.myprofiledetails.maritalStatus}>{obj.maritalStatusName}</option>
                                  })
                                }
                            </select>
          </div>
          </Col>
       
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Handicapped</label>
          <input type="text" id="handicap" name="handicap" className="form-text required" onChange={this.handleChange} value = {this.state.handicap || this.state.myprofiledetails.handicap} />
          </div>
          </Col>
         
         
        </Row>


        
        <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Blood Group</label>
          <input type="text" id="bloodGroup" name="bloodGroup" className="form-text required" onChange={this.handleChange} value = {this.state.bloodGroup || this.state.myprofiledetails.bloodGroup} />
          </div>
          </Col>
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Current City</label>
          <input type="text" id="currentCity" name="currentCity" className="form-text required" onChange={this.handleChange} value = {this.state.currentCity || this.state.myprofiledetails.currentCity} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Mode of Contact</label>
          <input type="text" id="modeofContact" name="modeofContact" className="form-text required" onChange={this.handleChange} value = {this.state.modeofContact || this.state.myprofiledetails.modeofContact} />
          </div>
          </Col>
          
         
        </Row>


        <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Expectation</label>
          <input type="text" id="expectation" name="expectation" className="form-text required" onChange={this.handleChange} value = {this.state.expectation || this.state.myprofiledetails.expectation} />
          </div>
          </Col>
					
          
         
        </Row>

        <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Family Type</label>
          <input type="text" id="familyTypeName" name="familyTypeName" className="form-text required" onChange={this.handleChange} value = {this.state.familyTypeName || this.state.myprofiledetails.familyTypeName} />
          </div>
          </Col>
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Family Status</label>
          <input type="text" id="  familyStatusName" name="  familyStatusName" className="form-text required" onChange={this.handleChange} value = {this.state.  familyStatusName || this.state.myprofiledetails.  familyStatusName} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Family Value</label>
          <input type="text" id="familyValueName" name="familyValueName" className="form-text required" onChange={this.handleChange} value = {this.state.familyValueName || this.state.myprofiledetails.familyValueName} />
          </div>
          </Col>
          
         
        </Row>

        <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Body Type</label>
          <input type="text" id="bodyType" name="bodyType" className="form-text required" onChange={this.handleChange} value = {this.state.bodyType || this.state.myprofiledetails.bodyType} />
          </div>
          </Col>
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">complexion</label>
          <input type="text" id="complexion" name="complexion" className="form-text required" onChange={this.handleChange} value = {this.state.complexion || this.state.myprofiledetails.complexion} />
          </div>
          </Col>

         
         
        </Row>
    

       
					
						
						<Row>
							<Col>
							<div className="form-group">
              <a  onClick={this.editform} >Edit My Details</a>
              <input type="hidden" id="userID" name="userID" className="form-text required" onChange={this.handleChange} value = {this.state.userID ||this.state.myprofiledetails.userID|| ""}  />
							<button id="btnLogin" type="submit">Update My Details</button>
							</div>
							</Col>
							
						</Row>
						
					
						
						
					</form>
				</div>
			</div>			
		</div>
	</div>
</section>
			   
			   
		 {/* 1 */}


</div>
   </main>
   </div>
   <Toast onClose={() => this.setState({response:''})} show={this.state.response!=''?true:false} className={this.state.response=="OTP required."?"bg-success":"bg-danger"} delay={3000} autohide>
          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
 </div>	   
 <UserFooterComponents/>
        </div>
		  </>)
        
    }

     
      
}
export default withRouter(DashboardComponents);