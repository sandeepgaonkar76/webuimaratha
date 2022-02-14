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
class ChangePasswordComponents extends Component{

	constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
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
      rashi:[],
      height:[],
      education:[],
      occupation:[],

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
  
    handleChange(e){		
      this.setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
      }

    handleSubmit(e)
    {
    let profileCreatedFor,motherTongue,userName,password,phone,firstName,lastName,emailID,gender,createdOn,caste,otherCaste,active,paidMember,bloodGroup,userID='';
      e.preventDefault();    
      userName=e.target.userName.value;
      firstName=e.target.firstName.value;
      userID=e.target.userID.value;
    // userID=this.props.location.state.userID;
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          userID:userID,
          userName: userName,
          firstName: firstName,
        })
      };
      fetch(`${process.env.REACT_APP_API_KEY}Member/UpdaterMember`, requestOptions)
        .then(response => response.json())
        .then(
           data => {
                  console.log(data);
          if(data.userID==0)
          {
            alert("Profile Updating Failed.")
            
            // this.setState({message: "Registration Failed"});
  
          }
          else{
            // this.setState({message: "Registration in successful,Member ID:"+data.userID});
            alert("Updated your profile successfully");
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
  .then(result =>{console.log(result)
    if(result)
    {
      errors["error"]="profile image uploded";
					this.setState({
						errors: errors
					  });
    }
    else{
      errors["error"]="Upload failed";
					this.setState({
						errors: errors
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
   
  
      if(!localStorage.getItem('sessionid'))
      {
        this.setState({userID:localStorage.getItem('userid')});   
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
   <h1 className="h2">Change Password</h1>
 </div>
	 {/* 1 */}
   <section className="profile-page py-4">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<div className="ProfileText">
				
					<h2 >Change Password</h2>
					<Row style={{padding:"10px"}}>
					
					<Col className="col-">
					<div className="form-group">
					<label htmlFor="edit-name">Old Password</label>
          <input type="text" id="aboutMe" name="aboutMe" className="form-text required" onChange={this.handleChange} style={{wdith:"100%",height:"40px"}} value={this.state.aboutMe} />
					</div>
					</Col>
                    	
					<Col className="col-">
					<div className="form-group">
					<label htmlFor="edit-name">New Password</label>
          <input type="text" id="aboutMe" name="aboutMe" className="form-text required" onChange={this.handleChange} style={{wdith:"100%",height:"40px"}} value={this.state.aboutMe} />
					</div>
					</Col>

                    	
					<Col className="col-">
					<div className="form-group">
					<label htmlFor="edit-name">Comfirm New Password</label>
          <input type="text" id="aboutMe" name="aboutMe" className="form-text required" onChange={this.handleChange} style={{wdith:"100%",height:"40px"}} value={this.state.aboutMe} />
					</div>
					</Col>
				</Row>
				
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
export default withRouter(ChangePasswordComponents);