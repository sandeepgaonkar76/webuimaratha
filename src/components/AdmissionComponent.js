import React, { Component } from 'react';
import HeaderComponents from './HeaderComponents';

import FooterComponents from './FooterComponents';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
class AdmissionComponent extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName:'',
            show: false,
			input: {},
			errors: {},
			ageFrom:'',
			ageTo:'',
			gender:'',
			searchresult:[],
			AllMaritalStatus:[],
			listAllHeight:[],
			listAllEducation:[],
        };
    }
    
componentDidMount()
{

}
    render() {
        const { profileid } = this.props.match.params;
        const { ageFrom,ageTo,gender,searchresult} = (this.props.location && this.props.location.state) || {};
        return (
        <div>
        <HeaderComponents/>
    
<article>
<section className="about-us-page text-center">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
                <div>Profile Id: { profileid }</div>
			</div>			
		</div>
	</div>
</section>

<section className="our-memberplan" style={{display:"none"}}>
	<div className="container">
		<div className="row">
			<div className="col-md-3">
				<div className="memberplan">
					<img src="images/silver.jpg"/>
				</div>		
			</div>		
			<div className="col-md-6">
				<div className="memberplan">
					<img src="images/gold.jpg"/>
					<h2>Gold Plan</h2>
					<h3>Rs. 2000</h3>
					<p>Lifetime Validity</p>
					<h2>Features</h2>
					<a href="index.html">Register Now</a>
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
export default withRouter(AdmissionComponent);