import React, { Component } from 'react';
import mainLogo from'../images/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class FooterComponents extends Component{
    render() {
        return (
        <div>
     <footer>
	<div className="top-footer">
	<div className="container">
		<div className="row">
			<div className="col-md-3">
					<h2></h2>
					<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About us</Link></li>
					<li><Link to="/terms-and-conditions">Terms &amp; Condition</Link></li>
					
					</ul>
			</div>	

			<div className="col-md-3">
					<h2></h2>
					<ul>
					<li><Link to="/feedback">Feedback</Link></li>
						<li><Link to="/privacy-policy">Privacy Policy</Link></li>						
						<li><Link to="/faq">FAQs</Link></li>
						
					</ul>
			</div>	

			<div className="col-md-3">
					<h2></h2>
					<ul>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/signup">Register</Link></li>
						<li><Link to="/success-story">Success Story</Link></li>
					</ul>
			</div>	

			<div className="col-md-3">
					<h2></h2>
					<ul>
					<li><img src="https://www.elitematrimony.com/revamp-images/footer-call-icon.png" /></li>
									
						
						<li><Link to="/contact">Contact Us</Link></li>
						
					</ul>
			</div>				
			
		</div>
	</div>
	</div>

	<div className="bottom-footer">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
					<p>Copyright © 2022 MyMarathaLagna.com . All Rights Reserved</p>
			</div>				
			
		</div>
	</div>
	</div>	
	
</footer>



<div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <img src="images/logo.png" />
		<h2>Welcome back! Please Login</h2>
		<div className="login-popup">
			<form>
			
			
				<div className="form-group">
				<label className="label1">User ID</label>
				<input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User Id" />
				</div>
				
				<div className="form-group">
				<label className="label1">Password</label>
				<input type="password" className="input_txt" id="password_page" name="password"  placeholder="Enter password" />
				</div>
				
				<div className="form-group">
					<button id="btnLogin">Login</button>
				</div>
				<p className="or text-center">Or</p>
				<div className="form-group">
				<Link to="/" className="loginWithOtp">Login with OTP</Link>
				</div>
			<div className="right_header">New to Shaadi?<Link to="/" className="signUpFree" type="registration">Sign Up Free <span className="signUpArrow"></span></Link>
                    </div>
			</form>
		</div>
      </div>
    </div>
  </div>
</div>
        </div>)
        
    }

     
      
}
export default FooterComponents;