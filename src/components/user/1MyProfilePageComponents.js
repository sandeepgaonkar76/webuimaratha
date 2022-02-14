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
		  input: {},response:"",responsetype:"",
      profilecreatedfor:[],bloodgroup:[],
      myprofiledetails:[],
      mothertounge:[],
      caste:[],nakshatra:[],height:[],education:[],maritalstauss:[],      
      selectedFile:'',
      profileCreatedForv:"",castev:"",
      aboutMe:"",
      formErrors: {aboutMe:"",castev:"",
    },
    aboutMeValid:false,
    // emailIDValid:false,
    // firstNameValid:false,
    // middleNameValid:false,
    // lastNameValid:false,
    // motherTongueValid:false,
    // dateOfBirthValid:false,
    // casteValid:false,
    // educationValid:false,
    // addressValid:false,
    // phoneValid:false,
    // occupationValid:false,
		};
		this.handleChange = this.handleChange.bind(this);	    
    this.handleSubmit = this.handleSubmit.bind(this);	
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

    getAllHeight()
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

    getAllbloodgroup()
    {
    fetch(`${process.env.REACT_APP_API_KEY}AllBloodGroup`)
    .then(function(res) {
      return res.json();
    }).then((json)=> {
      this.setState({
        bloodgroup: json
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
  
    handleChange (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, () => { this.validateField(name, value) });      
    }
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let aboutMeValid=this.state.aboutMeValid;
      // let emailIDValid=this.state.emailIDValid;
      // let firstNameValid=this.state.firstNameValid;
      // let middleNameValid=this.state.middleNameValid;
      // let lastNameValid=this.state.lastNameValid;
      // let motherTongueValid=this.state.motherTongueValid;
      // let dateOfBirthValid=this.state.dateOfBirthValid;
      // let casteValid=this.state.casteValid;
      // let educationValid=this.state.educationValid;
      // let addressValid=this.state.addressValid;
      // let phoneValid=this.state.phoneValid;
      // let occupationValid=this.state.occupationValid;
      switch(fieldName) {

        
        case 'aboutMe':          
        aboutMeValid=value.length>1;
          fieldValidationErrors.aboutMe= aboutMeValid?'':'About me required';        
          alert(aboutMeValid);
          break;


        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        aboutMeValid:aboutMeValid,
      }, this.validateForm);
    
    }      
    validateForm() {
      this.setState({formValid: 
      this.state.aboutMeValid                                            
      });
    }      
    errorClass(error) { return(error.length === 0 ? '' : 'has-error');}



    handleSubmit(e)
    {const { history } = this.props;  
    e.preventDefault();     
    const name = e.target.name;
      const value = e.target.value;
      const tempPlayer = new FormData(e.target);
      for (let [key, value] of tempPlayer.entries()) {
        this.setState({[key]: value}, () => { this.validateField(key, value) }); 
      }

      
      if(this.state.formValid==true){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userID:parseInt(e.target.userID.value),
          aboutMe:this.state.aboutMe,
          emailID:this.state.emailID,
          firstName:this.state.firstName,
          middleName:this.state.middleName,
          lastName:this.state.lastName,
          motherTongue:parseInt(this.state.motherTonguev),
          // gender:this.state.parseInt(genderv),
          dateOfBirth:this.state.dateOfBirth,
          caste:this.state.castev,
           currentCity:this.state.currentCity,
          education:this.state.educationv,
          address:this.state.address,
          phone:this.state.phone,
          address2:this.state.address2,
          occupation:this.state.occupation,
          currentCity:this.state.currentCity,
          userName:this.state.userName,
          
          otherCaste:this.state.otherCaste,
          nakshatra:this.state.nakshatrav,
          rashi:this.state.rashiv,
          height:this.state.heightv,
          heightValue:this.state.heightv,
          heightDescription:this.state.heightv,
          nativePlace:this.state.nativePlace,
          currentCity:this.state.currentCity,
          education:this.state.educationv,
          educationName:this.state.educationv,
          otherEducation:this.state.otherEducation,
          nadi:this.state.nadiv,
          nadiName:this.state.nadiNamev,
          address2:this.state.address2,
          occupation:this.state.occupation,
          state:this.state.state,
          age:this.state.age,
          country:this.state.country,
          marryOtherCaste:this.state.marryOtherCaste,
          maritalStatus:this.state.maritalStatus,
          maritalStatusName:this.state.maritalStatus,
          handicap:this.state.handicap,
          isHandicap:this.state.handicap,
          castName:this.state.castev,
          nakshatraName:this.state.nakshatrav,
          languageName:this.state.languageID,
          rashiName:this.state.rashiv,
          bloodGroup:this.state.bloodGroup,
          bloodGroupName:this.state.bloodGroup,
          modeofContact:this.state.modeofContact,
          expectation:this.state.expectation,
          familyTypeName:this.state.familyType,
          familyStatusName:this.state.familyStatus,
          familyValueName:this.state.familyValue,
          bodyType:this.state.bodyType,
          complexion:this.state.complexion,

        })
      };
      
      fetch(`${process.env.REACT_APP_API_KEY}Member/UpdateMember`, requestOptions)
        .then(response => response.json())
        .then(
           data => {
                  
          if(data==0)
          {
            
            this.setState({
              response: "Profile Updating Failed."
              });  
              this.setState({
                responsetype: "error"
                });       
            // this.setState({message: "Registration Failed"});  
          }
          else if(data==1){
            // this.setState({message: "Registration in successful,Member ID:"+data.userID});
            this.setState({
              response: "Updated your profile successfully"
              });  

              this.setState({
                responsetype: "success"
                });  
                   
                }
           }
        );
          }else
          {
            this.setState({
              response: "Please fill all the required fields"
              });
              this.setState({
                responsetype: "error"
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
    console.log(result.trim(" "));
    if(result)
    { 
            this.setState({
              response: "profile image uploded"
              });       
              this.setState({
                responsetype: "success"
                });  
    }
    else{
      
            this.setState({
              response: "Upload failed"
              });  
              this.setState({
                responsetype: "error"
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
       this.getAllHeight();
       this.getAllbloodgroup();

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
          {/* {this.state.selectedFile} */}
					<img src={this.state.selectedFile? URL.createObjectURL(this.state.selectedFile) : null || this.state.myprofiledetails.s3ImagePath || 'http://localhost:3000/images/logo.png' } alt={this.state.selectedFile? this.state.selectedFile.name : null} style={{maxHeight:"100px",width:"100px",border:"solid 1px #ccc",borderRadius:"100px",minHeight:"100px"}} />
					</Col>
					</Row>
					
					</div>
					</Col>	
					<Col className="col-8">
					<div className="form-group">
					<label htmlFor="edit-name">About Me</label>
          <input type="textarea" id="aboutMe" name="aboutMe" className="form-text required" onChange={this.handleChange} style={{wiith:"100%",height:"100px"}} value={this.state.aboutMe || this.state.myprofiledetails.aboutMe} />
					</div>
          <div className={`text-danger tooltip ${this.state.formErrors.aboutMe ? "show":""}`}>{this.state.formErrors.aboutMe}</div>
					</Col>
				</Row>
					
						
<div className="col p-0">
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Basic Details</h2>
</div>
<Row>
					
							
          
          
          <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Username</label>
							<input type="text" id="userName" name="userName" className="form-text required" readOnly value ={this.state.userName || this.state.myprofiledetails.userName}   />
							
							</div>
							</Col>

              <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Email</label>
							<input type="text" id="emailID" name="emailID" className="form-text required" onChange={this.handleChange} onBlur={(e) => this.CheckUserName(e)} value ={this.state.emailID || this.state.myprofiledetails.emailID}   />
							<div className={`text-danger tooltip ${this.state.formErrors.emailID ? "show":""}`}>{this.state.formErrors.emailID}</div>                  
							
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
          <div className="form-group"  style={{position:"relative"}}>
          <label htmlFor="edit-name">Mother Tongue</label>
          
          <select name="motherTonguev" id="motherTongue" className="mother" onChange={this.handleChange} value={this.state.myprofiledetails.montherTounge}>
                              <option value="0" >Select Mother Tongue</option>
                                {
                                  this.state.mothertounge.map((obj) => {
                                  return <option key={obj.languageID} value={obj.languageID} defaultValue={obj.languageID == this.state.myprofiledetails.motherTongue}>{obj.languageName}</option>
                                  })
                                }
                            </select>                            
                            <div className={`text-danger tooltip ${this.state.formErrors.motherTonguev ? "show":""}`}>{this.state.formErrors.motherTonguev}</div>                  
          </div>
          </Col>
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Gender</label>
          <div className="row m-0"  style={{position:"relative"}}>                        
          <select className="form-1" name="gender" value={this.state.gender || this.state.myprofiledetails.gender}  onChange={this.handleChange}>
                              <option value="0">Gender</option>
                              <option value="1" defaultValue={"1"==this.state.myprofiledetails.profileCreateBy}>Male</option>
                              <option value="2" defaultValue={"2"==this.state.myprofiledetails.profileCreateBy}>Female</option>
                            </select>
                            <div className={`text-danger tooltip gender ${this.state.formErrors.gender ? "show":""}`}>{this.state.formErrors.gender}</div>                  
                          
                        </div>
          </div>
          </Col>
          <Col>
          <div className="form-group" style={{position:"relative"}}>
          <label htmlFor="edit-name">Date of Birth</label>
          <input type="text" id="dateOfBirth" name="dateOfBirth" className="form-text required" onChange={this.handleChange} value = {this.state.dateOfBirth || this.state.myprofiledetails.dateOfBirth} />
          <div className={`text-danger tooltip gender ${this.state.formErrors.dateOfBirth ? "show":""}`}>{this.state.formErrors.dateOfBirth}</div>                  
          </div>
          </Col>
        </Row>

             <div className="col p-0">
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Religion Details</h2>
</div>                 
						<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Caste</label>
							<select name="castev" id="caste" className="region" onChange={this.handleChange} >
                              <option value="0">Select Caste</option>
                                {
                                  this.state.caste.map((obj) => {
                                  return <option key={obj.castID} value={obj.castID} defaultValue={obj.castID == this.state.myprofiledetails.caste}>{obj.castName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.castev ? "show":""}`}>{this.state.formErrors.castev}</div>                  
							</div>
							</Col>

              <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Other Caste</label>
              
              <input type="text" id="otherCaste" name="otherCaste" className="form-text required" onChange={this.handleChange} value = {this.state.otherCaste || this.state.myprofiledetails.otherCaste} />
							
                            <div className={`text-danger tooltip ${this.state.formErrors.otherCaste ? "show":""}`}>{this.state.formErrors.otherCaste}</div>                  
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Nakshatra</label>
              <select name="nakshatrav" id="nakshatra" className="region" onChange={this.handleChange} >
                              <option value="0">Select Nakshatra</option>
                                {
                                  this.state.nakshatra.map((obj) => {
                                  return <option key={obj.nakshatraID} value={obj.nakshatraID} defaultValue={obj.nakshatraID==this.state.myprofiledetails.nakshatra}>{obj.nakshatraName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.nakshatrav ? "show":""}`}>{this.state.formErrors.nakshatrav}</div>                  

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
							
                            <div className={`text-danger tooltip ${this.state.formErrors.rashi ? "show":""}`}>{this.state.formErrors.rashi}</div>                  
							</div>
							</Col>
<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Height</label>
              
              <select name="heightv" id="height" className="region" onChange={this.handleChange} >
                              <option value="0">Select Height</option>
                                {
                                  this.state.height.map((obj) => {
                                  return <option key={obj.heightID} value={obj.heightID} defaultValue={obj.heightID==this.state.myprofiledetails.nakshatra}>{obj.heightDescription}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.heightv ? "show":""}`}>{this.state.formErrors.nakshatrav}</div>                  
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
              
              <select name="educationv" id="educationv" className="region" onChange={this.handleChange} >
                              <option value="0">Select Education</option>
                                {
                                  this.state.education.map((obj) => {
                                  return <option key={obj.educationID} value={obj.educationID} defaultValue={obj.educationID==this.state.myprofiledetails.education}>{obj.education}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.educationv ? "show":""}`}>{this.state.formErrors.educationv}</div>                  
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
          
          <input type="text" id="occupation" name="occupation" className="form-text required" onChange={this.handleChange}  />
                        <div className={`text-danger tooltip ${this.state.formErrors.occupation ? "show":""}`}>{this.state.formErrors.occupation}</div>                  
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
          <div className={`text-danger tooltip ${this.state.formErrors.address2 ? "show":""}`}>{this.state.formErrors.address2||this.state.myprofiledetails.address2}</div>                  
          
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
                                  return <option key={obj.maritalStatusID} value={obj.maritalStatusID} defaultValue={obj.maritalStatusID == this.state.myprofiledetails.maritalStatus}>{obj.maritalStatusName}</option>
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
          <select name="bloodGroupv" id="bloodGroupv" className="region" onChange={this.handleChange} >
                              <option value="0">Select blood group</option>
                                { 
                                  this.state.bloodgroup.map((obj) => {
                                  return <option key={obj.bloodGroupID} value={obj.bloodGroupID} defaultValue={obj.bloodGroupID == this.state.myprofiledetails.bloodGroup}>{obj.bloodGroupName}</option>
                                  })
                                }
                            </select>
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
   <Toast onClose={() => this.setState({reponse:''})} show={this.state.response?true:false} className={this.state.responsetype=="success"?"bg-success":"bg-danger"} delay={3000} autohide>
          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
 </div>	   
 <UserFooterComponents/>
        </div>
		  </>)
        
    }

     
      
}
export default withRouter(DashboardComponents);