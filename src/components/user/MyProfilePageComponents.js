import React, { Component } from 'react';
import TopBarComponents from './TopBarComponents';
import UserFooterComponents from './UserFooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../style.css';
import { FormErrors } from '../FormErrors';
import { BrowserRouter, Route,withRouter,Redirect,useHistory  } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import Moment from 'moment';


class DashboardComponents extends Component{
	constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},response:"",responsetype:"",
      profilecreatedfor:[],bloodgroup:[],
      myprofiledetails:[],
      mothertounge:[],rashi:[],
      caste:[],nakshatra:[],height:[],education:[],maritalstauss:[],      
      selectedFile:'',
      input: {},
      errors: {},
      aboutMe: '',
      expectation:'',
      emailID:'',
      firstName:'',
      middleName:'',
      fatherName:'',
      motherName:'',
      lastName:'',
      dateOfBirth:'',
      castev:'',
// otherCaste:'',
nakshatrav:'',
rashiv:'',
heightv:'',
nativePlace:'',
currentCity:'',
// country:'',
educationv:'',
otherEducation:'',
occupation:'',
address:'',
address2:'',
phone:'',
marryOtherCaste:'',
maritalStatusv:'',
fatherName:'',
motherName:'',
// handicap:'',
// bloodGroupv:'',
modeofContact:'',
expectation:'',
// familyTypeName:'',
// familyStatusName:'',
// familyValueName:'',
bodyType:'',
complexion:'',
      response:'',
  isLoading: false,
      formErrors: {aboutMe: '', emailID:'',firstName:'',
      middleName:'',
      fatherName:'',
      motherName:'',
      lastName:'',dateOfBirth:'',
      castev:'',
      // upassword: ''
    },
    //aboutMeValid: false,
    emailIDValid:false,
    firstNameValid:false,
      middleNameValid:false,
      fatherName:false,
      lastNameValid:false,
      dateOfBirthValid:false,
      casteValid:false,
      // upasswordValid: false,
      formValid: false,  
    }
  	this.handleUserInput  = this.handleUserInput.bind(this);
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

    getAllrashi()
    {
    fetch(`${process.env.REACT_APP_API_KEY}AllRashi`)
    .then(function(res) {
      return res.json();
    }).then((json)=> {
      this.setState({
        rashi: json
      })
    });
    }

    getmyprofiledetailsonlogin(userid)
    {
      fetch(`${process.env.REACT_APP_API_KEY}Member/${userid}`)
      .then(function(res) {
        return res.json();
      }).then((json)=> {
        // json.dateOfBirth=json.dateOfBirth.split(' ')[0].trim().replace('/','-').replace('/','-');
        this.setState({
          myprofiledetails: json
        });
        
        // this.state.dateOfBirth.split(' ')[0].trim()
        this.setState({userID:json.userID});
        this.setState({aboutMe:json.aboutMe});
        this.setState({emailID:json.emailID});
         this.setState({firstName:json.firstName});
         this.setState({middleName:json.middleName});
         this.setState({fatherName:json.fatherName});
         this.setState({motherName:json.motherName});
         
         this.setState({lastName:json.lastName});
         this.setState({dateOfBirth:json.dateOfBirth});
         this.setState({castev:json.casteID});
       //  this.setState({casteID:json.casteID});
        //  this.setState({otherCaste:json.otherCaste});
         this.setState({nakshatrav:json.nakshatrav});
         this.setState({rashiv:json.rashiv});
         this.setState({heightv:json.heightv});
         this.setState({nativePlace:json.nativePlace});
         this.setState({currentCity:json.currentCity});
        //  this.setState({country:json.country});
         this.setState({educationv:json.education});
         this.setState({otherEducation:json.otherEducation});
         this.setState({occupation:json.occupation});
        this.setState({address:json.address});
        this.setState({address2:json.address2});
        this.setState({phone:json.phone});
        this.setState({marryOtherCaste:json.marryOtherCaste});
        this.setState({maritalStatusv:json.maritalStatus});
       
        // this.setState({handicap:json.handicap});
        // this.setState({bloodGroupv:json.bloodGroupv});
        this.setState({modeofContact:json.modeofContact});
        this.setState({expectation:json.expectation});
        // this.setState({familyTypeName:json.familyTypeName});
        // this.setState({familyStatusName:json.familyStatusName});
        // this.setState({familyValueName:json.familyValueName});
        this.setState({bodyType:json.bodyType});
        this.setState({complexion:json.complexion}); 
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
    handleUserInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      
      this.setState({[name]: value}, () => { this.validateField(name, value) });
      
    }

    validateField(fieldName, value) {
      
      let fieldValidationErrors = this.state.formErrors;
      let expectation = value;
     // let aboutMeValid = this.state.aboutMeValid;
      let emailIDValid = this.state.emailIDValid;
      let firstNameValid = this.state.firstNameValid;
      let middleNameValid = this.state.middleNameValid;
      let fatherNameValid = this.state.fatherNameValid;
      let motherNameValid = this.state.motherNameValid;
      let lastNameValid = this.state.lastNameValid;
      let dateOfBirthValid=this.state.dateOfBirthValid;
      let casteValid=this.state.casteValid;
      // let upasswordValid = this.state.upasswordValid;              
      switch(fieldName) {
        //case 'aboutMe1':
          //aboutMeValid = value.length>=1;
          //fieldValidationErrors.aboutMe = aboutMeValid ? '' : 'About Me Invalid';
         // break;
        case 'expectation':
        expectation = value.length>=1;
        fieldValidationErrors.expectation = expectation ? '' : 'About Me Invalid';
         break;

          case 'emailID':
          emailIDValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.emailID = emailIDValid ? '' : 'Email Invalid';
          break;

          case 'firstName':
          firstNameValid = value.length>=1;
          fieldValidationErrors.firstName = firstNameValid ? '' : 'First name Invalid';
          break;

          case 'middleName':
          middleNameValid = value.length>=1;
          fieldValidationErrors.middleName = middleNameValid ? '' : 'Middle name Invalid';
          break;

          case 'fatherName':
            fatherNameValid = value.length>=1;
            fieldValidationErrors.fatherName = fatherNameValid ? '' : 'Father name Invalid';
            break;

          case 'lastName':
          lastNameValid = value.length>=1;
          fieldValidationErrors.lastName = lastNameValid ? '' : 'Last name Invalid';
          break;

          case 'dateOfBirth':
          dateOfBirthValid = value.length>=1;
          fieldValidationErrors.dateOfBirth = dateOfBirthValid ? '' : 'DOB Invalid';
          break;

          case 'castev':
          casteValid = value>=1;
          fieldValidationErrors.castev = casteValid ? '' : 'Caste Invalid';
          break;
          

          
          
        // case 'upassword':
        //   upasswordValid = value.length >= 6;
        //   fieldValidationErrors.upassword = upasswordValid ? '': ' is too short';
        //   break;

        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      //aboutMeValid: aboutMeValid,
                      emailIDValid: emailIDValid,
                      firstNameValid: firstNameValid,
                      middleNameValid: middleNameValid,
                      fatherNameValid: fatherNameValid,
                      motherNameValid: motherNameValid,
                      lastNameValid: lastNameValid,
                      dateOfBirthValid: dateOfBirthValid,
                      casteValid: casteValid,
                      
                      // upasswordValid: upasswordValid
                      
                    }, this.validateForm);
    }      
    validateForm() {
      this.setState({formValid: this.state.emailIDValid &&
        this.state.firstNameValid &&
        this.state.middleNameValid &&
        this.state.lastNameValid &&
        this.state.dateOfBirthValid &&
        this.state.casteValid 
        
        
        // this.state.upasswordValid
      });
    }      
    errorClass(error) { return(error.length === 0 ? '' : 'has-error');}

    handleSubmit(e)
    {
      const { aboutMe,emailID,firstName,middleName,fatherName,motherName,lastName,dateOfBirth,castev,nakshatrav,rashiv,heightv,nativePlace,currentCity,educationv,otherEducation,occupation,address,address2,phone,marryOtherCaste,maritalStatusv,
        // handicap,bloodGroupv,familyTypeName,familyStatusName,familyValueName,otherCaste,country,
        modeofContact,expectation,bodyType,complexion}=this.state;
    e.preventDefault();     
    // if(this.validate()){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userID:parseInt(e.target.userID.value),
          aboutMe:aboutMe,
          emailID:emailID,
           firstName:firstName,
           middleName:middleName,
           fatherName:fatherName,
           motherName:motherName,
           lastName:lastName,
           dateOfBirth:dateOfBirth,
          // caste:castev,
           casteID:parseInt(castev),
          //  otherCaste:otherCaste,
           nakshatra:nakshatrav,
           rashi:rashiv,
           height:heightv,
           nativePlace:nativePlace,
           currentCity:currentCity,
          //  country:parseInt(country),
           education:educationv,
           educationID:parseInt(educationv),
           otherEducation:otherEducation,
           occupation:occupation,
          address:address,
          address2:address2,
          phone:phone,
          marryOtherCaste:marryOtherCaste,
          maritalStatus:parseInt(maritalStatusv),
          fatherName: fatherName,
          motherName:motherName,
          // handicap:parseInt(handicap),
          // bloodGroup:parseInt(bloodGroupv),
          modeofContact:modeofContact,
          expectation:expectation,
          // familyTypeName:familyTypeName,
          // familyStatusName:familyStatusName,
          // familyValueName:familyValueName,
          bodyType:bodyType,
          complexion:complexion,
        })
      };
      
      fetch(`${process.env.REACT_APP_API_KEY}Member/UpdateMember`, requestOptions)
        .then(response => response.json())
        .then(
           data => {
             console.log(data);
            if(data){
              this.setState({response: "Updated your profile successfully"});    
              this.setState({responsetype: "success"});  
            }
            else{            
            this.setState({response: "Profile Updating Failed."});  
            this.setState({responsetype: "error"});       
          }
        }
        );
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
       this.getAllrashi();

      if(localStorage.getItem('sessionid'))
    {
      let userid=localStorage.getItem('userid');
      this.getmyprofiledetailsonlogin(userid);
      this.setState({userID:userid});   
    }

    }
    
	  
    render() {
		const { history } = this.props;
    const {aboutMe,middleName,fatherName,motherName, userName,phone, otpsessionid,profileCreatedForv,motherTonguev,password,firstName,lastame,emailID,gender,castev,userID,otp } = (this.props.location && this.props.location.state) || {};
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
          <Toast onClose={() => this.setState({response:''})} onClick={() => this.setState({response:''})} show={this.state.response?true:false} className={this.state.responsetype=="success"?"bg-success":"bg-danger"} autohide delay={3000}    style={{position:'relative',left:"0",top:"0",width:"100%",margin:"20px 0",textAlign:"center"}}>          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
          <form onSubmit={this.handleSubmit.bind(this)} style={{padding:"10px"}}>
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
          <input type="textarea" id="aboutMe" name="aboutMe" className="form-text required"   style={{width:"100%",height:"100px"}} onChange={this.handleUserInput} value = {this.state.aboutMe  || ''} />                    
          <div className={`text-danger tooltip ${this.state.formErrors.aboutMe ? "show":""}`}>{this.state.formErrors.aboutMe}</div>                  
					</div>
          
					</Col>
				</Row>
					
						
<div className="col p-0">
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Basic Details</h2>
</div>
<Row>
					
							
          
          

              <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Email</label>
							<input type="text" id="emailID" name="emailID" className="form-text required" required="required" onChange={this.handleUserInput}  value = {this.state.emailID ||this.state.myprofiledetails.emailID|| emailID} />
							<div className={`text-danger tooltip ${this.state.formErrors.emailID ? "show":""}`}>{this.state.formErrors.emailID}</div>                  
							
							</div>
							</Col><Col></Col><Col></Col>
					
        </Row> 
					 <Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">First Name</label>
							<input type="text" id="firstName" name="firstName" className="form-text required" required="required" onChange={this.handleUserInput} value = {this.state.firstName ||this.state.myprofiledetails.firstName|| firstName} />
              <div className={`text-danger tooltip ${this.state.formErrors.firstName ? "show":""}`}>{this.state.formErrors.firstName}</div>                  
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Middle Name</label>
							<input type="text" id="middleName" name="middleName" className="form-text required"  onChange={this.handleUserInput} value = {this.state.middleName ||this.state.myprofiledetails.middleName|| middleName} />
              <div className={`text-danger tooltip ${this.state.formErrors.middleName ? "show":""}`}>{this.state.formErrors.middleName}</div>                  
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Last Name</label>
							<input type="text" id="lastName" name="lastName" className="form-text required" required="required" onChange={this.handleUserInput} value = {this.state.lastName || this.state.myprofiledetails.lastName} />
              <div className={`text-danger tooltip ${this.state.formErrors.lastName ? "show":""}`}>{this.state.formErrors.lastName}</div>                  
							</div>
							</Col>
						{/* </Row>

          <Row>				 */}
          
          <Col>
          <div className="form-group" style={{position:"relative"}}>
          <label htmlFor="edit-name">Date of Birth</label>
          
          
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-text required" required="required" onChange={this.handleUserInput} value = {Moment(this.state.dateOfBirth).format('YYYY-MM-DD')} />
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
							<select name="castev" id="castev" className="region" onChange={this.handleUserInput} required>
                              <option value="0">Select Caste</option>
                                {
                                  this.state.caste.map((obj) => {
                                  return <option key={obj.castID} value={obj.castID} selected={obj.castID == this.state.myprofiledetails.casteID}>{obj.castName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.formErrors.castev ? "show":""}`}>{this.state.formErrors.castev}</div>                  
							</div>
							</Col>

              {/* <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Other Caste</label>
              <input type="text" id="otherCaste" name="otherCaste" className="form-text required" onChange={this.handleUserInput} value = {this.state.otherCaste || this.state.myprofiledetails.otherCaste} />
							</div>
							</Col> */}
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Nakshatra</label>
              <select name="nakshatrav" id="nakshatrav" className="region" onChange={this.handleUserInput} >
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
<h2 style={{color:"#8f0247",background:"transparent",textAlign:"left"}}>Family Details</h2>
</div>                 
					  	<Row>
					
							
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Father Name</label>
              <input type="text" id="fatherName" name="fatherName" className="form-text required"  onChange={this.handleUserInput} value = {this.state.fatherName ||this.state.myprofiledetails.fatherName|| fatherName} />
 
                            <div className={`text-danger tooltip ${this.state.formErrors.castev ? "show":""}`}>{this.state.formErrors.castev}</div>                  
							</div>
							</Col>

              {/* <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Other Caste</label>
              <input type="text" id="otherCaste" name="otherCaste" className="form-text required" onChange={this.handleUserInput} value = {this.state.otherCaste || this.state.myprofiledetails.otherCaste} />
							</div>
							</Col> */}
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Mother Name</label>
              <input type="text" id="motherName" name="motherName" className="form-text required"  onChange={this.handleUserInput} value = {this.state.motherName ||this.state.myprofiledetails.motherName|| motherName} />
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
							<select name="rashiv" id="rashiv" className="region" onChange={this.handleUserInput} >
                              <option value="0">Select Rashi</option>
                                {
                                  this.state.rashi.map((obj) => {
                                  return <option key={obj.rashiID} value={obj.rashiID} selected={obj.rashiID==this.state.myprofiledetails.rashi}>{obj.rashiName}</option>
                                  })
                                }
                            </select>
                            <div className={`text-danger tooltip ${this.state.errors.rashi ? "show":""}`}>{this.state.errors.rashi}</div>                  
							</div>
							</Col>
<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Height</label>
              
              <select name="heightv" id="height" className="region" onChange={this.handleUserInput} >
                              <option value="0">Select Height</option>
                                {
                                  this.state.height.map((obj) => {
                                  return <option key={obj.heightID} value={obj.heightID} selected={obj.heightID==this.state.myprofiledetails.height}>{obj.heightDescription}</option>
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
							<input type="text" id="nativePlace" name="nativePlace" className="form-text required" onChange={this.handleUserInput} value = {this.state.nativePlace || this.state.myprofiledetails.nativePlace} />
							</div>
							</Col>
							<Col>
							<div className="form-group">
							<label htmlFor="edit-name">Current City</label>
							<input type="text" id="currentCity" name="currentCity" className="form-text required" onChange={this.handleUserInput} value = {this.state.currentCity || this.state.myprofiledetails.currentCity} />
							</div>
							</Col>

                
            {/* <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Country</label>
							<input type="text" id="country" name="country" className="form-text required" onChange={this.handleUserInput} value = {this.state.country || this.state.myprofiledetails.country} />
							</div>
							</Col> */}
						
						</Row>


            <Row>
					
            <Col>
							<div className="form-group">
							<label htmlFor="edit-name">Education</label>
              
              <select name="educationv" id="educationv" className="region" onChange={this.handleUserInput} >
                              <option value="0">Select Education</option>
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
          <input type="text" id="otherEducation" name="otherEducation" className="form-text required" onChange={this.handleUserInput} value = {this.state.otherEducation||this.state.myprofiledetails.otherEducation} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Occupation</label>
          
          <input type="text" id="occupation" name="occupation" className="form-text required" onChange={this.handleUserInput} value = {this.state.occupation||this.state.myprofiledetails.occupation} />
                        <div className={`text-danger tooltip ${this.state.errors.occupation ? "show":""}`}>{this.state.errors.occupation}</div>                  
          </div>
          </Col>
         
        </Row>
<Row>
<Col>
          <div className="form-group">
          <label htmlFor="edit-name">Address</label>
          <input type="text" id="address" name="address" className="form-text required" onChange={this.handleUserInput} value = {this.state.address||this.state.myprofiledetails.address} />
          <div className={`text-danger tooltip ${this.state.errors.address ? "show":""}`}>{this.state.errors.address}</div>                  
          </div>
          </Col>

        
  
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">address2</label>
          <input type="text" id="address2" name="address2" className="form-text required" onChange={this.handleUserInput}  />
          
          
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Phone</label>
          <input type="text" id="phone" name="phone" className="form-text required" onChange={this.handleUserInput} value = {this.state.phone||this.state.myprofiledetails.phone} />
          <div className={`text-danger tooltip ${this.state.errors.phone ? "show":""}`}>{this.state.errors.phone}</div>                  
          </div>
          </Col>
</Row>
      

        
        <Row>
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Marry Other Caste</label>
          <input type="text" id="marryOtherCaste" name="marryOtherCaste" className="form-text required" onChange={this.handleUserInput} value = {this.state.marryOtherCaste || this.state.myprofiledetails.marryOtherCaste} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Marital Status</label>
        
    
                        <select name="maritalStatusv" id="maritalStatusv" className="region" onChange={this.handleUserInput} >
                              <option>Select Marital Status</option>
                                {
                                  this.state.maritalstauss.map((obj) => {
                                  return <option key={obj.maritalStatusID} value={obj.maritalStatusID} selected={obj.maritalStatusID==this.state.myprofiledetails.maritalStatus} defaultValue={obj.maritalStatusID == this.state.myprofiledetails.maritalStatus}>{obj.maritalStatusName}</option>
                                  })
                                }
                            </select>
          </div>
          </Col>
       
							
          {/* <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Handicapped</label>
          <input type="text" id="handicap" name="handicap" className="form-text required" onChange={this.handleUserInput} value = {this.state.handicap || this.state.myprofiledetails.handicap} />
          </div>
          </Col> */}
         
         
        </Row>


        
        <Row>
{/*         
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Blood Group</label>
          <select name="bloodGroupv" id="bloodGroupv" className="region" onChange={this.handleUserInput} >
                              <option value="0">Select blood group</option>
                                { 
                                  this.state.bloodgroup.map((obj) => {
                                  return <option key={obj.bloodGroupID} value={obj.bloodGroupID} defaultValue={obj.bloodGroupID == this.state.myprofiledetails.bloodGroup}>{obj.bloodGroupName}</option>
                                  })
                                }
                            </select>
          </div>
          </Col> */}
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Current City</label>
          <input type="text" id="currentCity" name="currentCity" className="form-text required" onChange={this.handleUserInput} value = {this.state.currentCity || this.state.myprofiledetails.currentCity} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Mode of Contact</label>
          <input type="text" id="modeofContact" name="modeofContact" className="form-text required" onChange={this.handleUserInput} value = {this.state.modeofContact || this.state.myprofiledetails.modeofContact} />
          </div>
          </Col>
          
         
        </Row>


        <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Expectation</label>
           <input type="text" id="expectation" name="expectation" className="form-text required" onChange={this.handleUserInput} value = {this.state.expectation} />
          </div>
          </Col>
					
          
         
        </Row>

        {/* <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Family Type</label>
          <input type="text" id="familyTypeName" name="familyTypeName" className="form-text required" onChange={this.handleUserInput} value = {this.state.familyTypeName || this.state.myprofiledetails.familyTypeName} />
          </div>
          </Col>
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Family Status</label>
          <input type="text" id="  familyStatusName" name="  familyStatusName" className="form-text required" onChange={this.handleUserInput} value = {this.state.  familyStatusName || this.state.myprofiledetails.  familyStatusName} />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Family Value</label>
          <input type="text" id="familyValueName" name="familyValueName" className="form-text required" onChange={this.handleUserInput} value = {this.state.familyValueName || this.state.myprofiledetails.familyValueName} />
          </div>
          </Col>
          
         
        </Row> 

        <Row>
        
        <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Body Type</label>
          <input type="text" id="bodyType" name="bodyType" className="form-text required" onChange={this.handleUserInput} value = {this.state.bodyType || this.state.myprofiledetails.bodyType} />
          </div>
          </Col>
							
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">complexion</label>
          <input type="text" id="complexion" name="complexion" className="form-text required" onChange={this.handleUserInput} value = {this.state.complexion || this.state.myprofiledetails.complexion} />
          </div>
          </Col>

         
         
        </Row>*/}
     

       
					
						
						<Row>
            <Toast onClose={() => this.setState({response:''})} onClick={() => this.setState({response:''})} show={this.state.response?true:false} className={this.state.responsetype=="success"?"bg-success":"bg-danger"} autohide delay={3000}    style={{position:'relative',left:"0",top:"0",width:"100%",margin:"20px 0",textAlign:"center"}}>          
          <Toast.Body>{this.state.response}</Toast.Body>
        </Toast>
							<Col>
              
							<div className="form-group">
              <a  onClick={this.editform} ></a>
              <input type="hidden" id="userID" name="userID" className="form-text required" onChange={this.handleUserInput} value = {this.state.userID ||this.state.myprofiledetails.userID|| ""}  />
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
   
 </div>	   
 <UserFooterComponents/>
        </div>
		  </>)
        
    }

     
      
}
export default withRouter(DashboardComponents);