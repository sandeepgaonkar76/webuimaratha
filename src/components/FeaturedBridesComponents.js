import React, { Component } from 'react';
import mainLogo from'../images/logo.png';

class FeaturedBridesComponent extends Component{
    render() {
        return (
        <div>
     <section className="featured-brides text-center">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="featured-brides-heading">
					<h2>Featured <span>Brides</span></h2>
					<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
				</div>
			</div>
			
			<div className="col-md-4">
				<div className="featured-brides-blog">
					<a href="#">
					<img src="images/bride-img-1.jpg"/>
					<h2>Lorem Ipsum</h2>
					</a>
				</div>
			</div>		

			<div className="col-md-4">
				<div className="featured-brides-blog">
					<a href="#">
					<img src="images/bride-img-2.jpg" />
					<h2>Lorem Ipsum</h2>
					</a>
				</div>
			</div>	

			<div className="col-md-4">
				<div className="featured-brides-blog">
					<a href="#">
					<img src="images/bride-img-3.jpg" />
					<h2>Lorem Ipsum</h2>
					</a>
				</div>
			</div>				
			
		</div>
	</div>
</section>
        </div>)
        
    }

     
      
}
export default FeaturedBridesComponent;