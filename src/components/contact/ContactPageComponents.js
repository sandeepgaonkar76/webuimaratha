import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
class ContactPageComponents extends Component{
    render() {
        return (
        <div>
        <HeaderComponents/>
    
<article>
<section className="contact-now">
	<div className="container">
	<div className="row">
	
			<div className="col-md-12">
				<div className="address-heading">
					<h2>Address :</h2>
				</div>		
			</div>		

			<div className="col-md-12">
				<div className="address-p">
			 	<a href="tel: +91 8277089755 "><i className="fa fa-mobile" aria-hidden="true"></i>+91 8277089755</a> 
					<a href="mailto:support@mymarathalagna.com"><i className="fa fa-envelope" aria-hidden="true"></i>support@mymarathalagna.com</a>
					<a href="mailto:mymarathalagna@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>mymarathalagna@gmail.com</a>
				</div>		
			</div>	
			
			<div className="col-md-6">

				<div className="contact-form">
					<h3>Karwar</h3>
					<p>Maruti Galli Near City Bus Stand, KARWAR, KARNATAKA 581 301.</p>
				</div>	

				<div className="contact-form">
					<h3>Pune</h3>
					<p>Sadashiv Peth, Near Vitthal Mandar PUNE, MAHARASTRA. 411 030</p>
				</div>

				<div className="contact-form">
					<h3>Bangalore</h3>
					<p>5th Cross, JP Nagar 6th Phase Bangalore. 560076</p>
				</div>				
				
				
			</div>				
			
	
			<div className="col-md-6">
				<div className="iframe-map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3857.3398045663957!2d74.128723!3d14.806175000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe60d40a1e4b79%3A0x946460e2b3fb0d8b!2sMaruti%20Galli%2C%20Karwar%2C%20Karnataka%20581301!5e0!3m2!1sen!2sin!4v1632312421956!5m2!1sen!2sin" width="600" height="540"></iframe>
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
export default ContactPageComponents;