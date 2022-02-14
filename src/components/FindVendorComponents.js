import React, { Component } from 'react';
import mainLogo from'../images/logo.png';

class FindVendorComponents extends Component{
    render() {
        return (
        <div>
     <section className="vendor text-center">
	<div className="container">
		<div className="row">

			<div className="col-md-3">
				<div className="vendor-heading">
					<img src="images/icon-1.png" />
					<h2><a href="#">Find Vendors</a></h2>
				</div>			
			</div>

			<div className="col-md-3">
				<div className="vendor-heading">
					<img src="images/icon-2.png"/>
					<h2><a href="#">Get Inspired</a></h2>
				</div>			
			</div>	

			<div className="col-md-3">
				<div className="vendor-heading">
					<img src="images/icon-3.png"/>
					<h2><a href="#">View Profiles and Learn</a></h2>
				</div>			
			</div>	

			<div className="col-md-3">
				<div className="vendor-heading">
					<img src="images/icon-4.png"/>
					<h2><a href="#">Hire with confidence</a></h2>
				</div>			
			</div>	
			
			
		</div>
	</div>
</section>
        </div>)
        
    }

     
      
}
export default FindVendorComponents;