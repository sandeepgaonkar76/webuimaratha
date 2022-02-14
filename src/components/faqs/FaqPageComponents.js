import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/AccordionBody';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionItem from 'react-bootstrap/AccordionItem';
class FaqPageComponents extends Component{
    render() {
        return (
        <div>
        <HeaderComponents/>
<article>
<section className="faq text-center">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
  
<h1>Understand MyMarathaLagna Better</h1>
<Accordion defaultActiveKey="0"  className="accordion">
  <AccordionItem eventKey="0">
    <AccordionHeader>What is MyMarathaLagna.com</AccordionHeader>
    <AccordionBody>
    Mymarathalagna.com is the Hindu Religion Subcaste Portal dedicated to all Indian to find their life Partners in india or around the World.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem eventKey="1">
    <AccordionHeader>What does MyMarathaLagna.com do?</AccordionHeader>
    <AccordionBody>
	We offer a superior match-making experience for prospective brides and grooms to meet and communicate with each other by expanding the opportunities available to meet potential life partners and build lifelong relationships.
    </AccordionBody>
  </AccordionItem>

  <AccordionItem eventKey="2">
    <AccordionHeader>Why is MyMarathaLagna.com useful?</AccordionHeader>
    <AccordionBody>
	It is one genuine platform which is working towards uniting like-minded souls by providing them one common stage where they can speak their heart out FREELY and know more about their prospective matches. On MyMarathaLagna, the process of finding your someone special is simple and quick. All you need to do is register your profile on our site, specify your preferred partner criteria and begin with your life partner search.
    </AccordionBody>
  </AccordionItem>

  <AccordionItem eventKey="3">
    <AccordionHeader>How can I register on MyMarathaLagna.com?</AccordionHeader>
    <AccordionBody>
	<p>Making a profile on MyMarathaLagna is a very simple process. Follow below steps. <br></br>
  Step 1:  Fill the basic details in home page with your login id and password. Click on "Register Now" button create your profile. <br></br>
    Step 2: OTP is generated and sent to your registered mobile.<br></br>
		Step 3: Provide OTP Details on the screen and click Proceed.<br></br>
		Step 4: Your profile is created. Our team will verify your details and enable your account.<br></br>
		Step 5: Please write to support@myamarathalagna.com or mymarathalagna@gmail.com if you have any queries.</p>
	
    </AccordionBody>
  </AccordionItem>
  <AccordionItem eventKey="4">
    <AccordionHeader>How can I search for profile on MyMarathaLagna.com?</AccordionHeader>
    <AccordionBody>
	<p>For Searching Profile, you need to register in mymarathalagna.com. Follow the steps for searching profiles.<br></br>
  Step 1:  Click on Login link and enter your username and password . <br></br>
    Step 2: Dashboard screen appears after login.<br></br>
		Step 3: In Dashboard page there is link to search profiles.<br></br>
		Step 4: In Search Profile > Quick Search Option will be there.<br></br>
		Step 5: In Quick Search , select gender, age and caste to search for profile. <br></br> Please write to support@myamarathalagna.com or mymarathalagna@gmail.com if you have any queries.</p>
	
    </AccordionBody>
  </AccordionItem>
</Accordion> 
			</div>			
		</div>
	</div>
</section>

</article>

      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default FaqPageComponents;