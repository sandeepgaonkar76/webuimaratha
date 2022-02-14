import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,Redirect,useHistory,
  } from "react-router-dom";
class MembershipComponent extends Component{
    render() {
        return (
        <div>
        <HeaderComponents/>
    
<article>
<section className="about-us-page text-center">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<h2>MemberShip Plan</h2>
			</div>			
		</div>
	</div>
</section>
{/*
<section className="about-us-page text-center">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<h2>Free Registration till 31st December 2021 </h2>
				<div className="right_header text-center"> <Link to="/signup" className="signUpFree" type="registration">Sign Up Free<span className="signUpArrow"></span></Link>
				</div>
			
			</div>			
		</div>
	</div>
</section>

<section className="about-us-page text-center">
<img src="images/reducedplan.png"/>
</section>

*/}
 
<section className="our-memberplan">
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<div className="memberplan">
					<img src="images/silver.jpg"/>
					<h2>Basic Plan</h2>
					<h3>Rs. 500</h3>
					
					<h2>Features</h2>		
					<p>
						<div>
						<ul>
							<li>Validity of 12 Months</li>
							<li>Basic Search Option</li>
							<p></p>
							
						</ul>
					</div>
					</p>			
					<Link to="/signup">Register Now</Link>
				</div>		
			</div>		
			<div className="col-md-6">
				<div className="memberplan">
					<img src="images/gold.jpg"/>
					<h2>Gold Plan</h2>
					<h3>Rs. 2000</h3>				
					<h2>Features</h2>
					<p>
					<ul>
						<li>Lifetime Validity</li>
						<li>Custom Search Option</li>
						<li>Mymarathalagna Gift bag</li>
						<li>Support for Horoscope Matching.</li>
						<li>Recommendation Mails</li>
					</ul>
						
					</p>
					<Link to="/signup">Register Now</Link>
				</div>		
			</div>				
		</div>
	</div>
</section>
</article>

      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default MembershipComponent;