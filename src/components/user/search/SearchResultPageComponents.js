import React, { Component } from 'react';
import TopBarComponents from '../TopBarComponents';
import FooterComponents from '../UserFooterComponents';
import QuickViewProfileComponents from '../profile/QuickViewProfileComponents';
import Paginations from './Paginations';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,Redirect,useHistory,
  } from "react-router-dom";
class SearchResultPageComponents extends Component{
	constructor(props,context) {
		super(props,context);
		  this.state = {
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
			pageOfItems: [],userID:'',
			searchCriteria:[],
		  };	
		  this.onChangePage = this.onChangePage.bind(this);
		}
		onChangePage(pageOfItems) {
			// update state with new page of items
			this.setState({ pageOfItems: pageOfItems });
		}
		
		componentDidMount()
		{
			this.state.searchresult=this.props.history.location.state.searchresult;
			
		}
		
    render() {
		const { ageFrom,ageTo,gender,searchresult,userID,searchCriteria} = (this.props.location && this.props.location.state) || {};		
        return (
        <div>
		<TopBarComponents/>
    
<article>
<section className="search">
	<div className="container">
		<div className="row">
		
		
			<div className="col-md-12">
				<div className="search-heading">
					<Link to="/user/search" style={{color:"#8f0247",display:"inline-block",float:"left",background: "#8f0247",border: "transparent",color: "#ffffff",padding: "8px 30px",margin: "20px 0",width: "auto",textAlign: "center"}}>Back</Link>
					<h2 style={{display:"inline-block",marginLeft:"0px",padding:"0"}}>Your search results for :&nbsp; 
					<span style={{fontSize:"20px"}}>
					{this.props.location.state.searchCriteria} ( {this.state.searchresult.length} Records Found ) 
					</span>
					</h2>
				</div>
				
				<div className="Spotlight-Profile" style={{display:"none"}}>
					<h2>× Spotlight Profile</h2>
					<p>Blue Header profile is are spotlight profile which was showing top of the search result.Its gives 10 times faster results. 0 Profiles found : Age- 33 to 35 ,height- 71 to 73</p>
				</div>				
			<div className="row">
				{this.state.pageOfItems.map(item =>
                            {
								
									return (	<div key={item.userID} className="column col-6" data-id={item.userID}>
									<div className="our-lifeparterner">
										<div className="row">
										<div className="col-md-12">
										  <a href="#" className="our-thump" style={{padding:"5px 0 0 0",margin:"0"}}>
											  <div className="row">
											  <div className="col-md-4 text-center gridFullWidth">																						
											<h4 className="Anand">{item.firstName} {item.middleName} {item.lastName}
											</h4>
										  </div>
										  <div className="col-md-4 gridHidden">
										{/*	<h5 className="Register">
											  Register On1: {item.registeredOn.split('T')[0].trim()}</h5> */}
										  </div>
										  
										  <div className="col-md-4 text-center gridHidden">
											{/* <h5 className="Online"> Online  </h5> */}
											<QuickViewProfileComponents showuserid={item.userID}  />
										  </div>
											  </div>
										  </a>
										  </div>
										  </div>
										  
										  
										<div className="row p-3">
											  <div className="col-md-2 gridFullWidth p-0">
											
												<div className="thumbnail gt-margin-bottom-0 m-0">
													<img src={item.s3ImagePath || "/images/male.png"} title={item.firstName}  alt="IN8" className="img-responsive gtFullWidth" />	
												</div>
											  </div>
											  <div className="col-md-10 gridFullWidth">
												<div className="col">
												  <div className="redirect row m-0">
													<div className="col-md-6 gridFullWidth p-0">
													  <p className="row m-0" style={{marginBottom:"0px"}}>
														<label className="col-md-6  p-0 ">Age :</label>
														<span className="col-md-6  p-0">{item.age}</span>
													  </p>
													</div>
													<div className="col-md-6 gridFullWidth p-0">
													  <p className="row m-0 gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-5  p-0">Height :</label>
														<span className="col-md-7 p-0">{item.heightDescription}</span>
													  </p>
													</div>
													
												  </div>
												</div>
												
												<div className="row m-0">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0" style={{marginBottom:"0px"}}>
													  <label className="col-md-5 p-0">Occupation :</label>
														<span className="col-md-7 p-0">  {item.occupation}  </span>
													{/*	<label className="col-md-6  p-0">Religion1 :</label>
														<span className="col-md-6  p-0"> {item.castName}</span> */}
													  </p>
													</div>
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0 gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-5  p-0">Caste :</label>
														<span className="col-md-7  p-0">{item.castName} </span>
													  </p>
													</div>
													
												  </div>
												</div>							
					
					
												<div className="row m-0">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0" style={{marginBottom:"0px"}}>
														<label className="col-md-6  p-0">Location :</label>
														<span className="col-md-6  p-0 gridFullWidth"> {item.currentCity}</span>
													  </p>
													</div>
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0 gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-5  p-0">Education :</label>
														<span className="col-md-7  p-0">{item.educationName} </span>
													  </p>
													</div>
													
												  </div>
												</div>
												<div className="row m-0">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0" style={{marginBottom:"0px"}}>
														<label className="col-md-6  p-0">Email ID :</label>
														<span className="col-md-6  p-0 gridFullWidth"> {item.emailID}</span>
													  </p>
													</div>
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0 gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-5  p-0"></label>
														<span className="col-md-7  p-0"></span>
													  </p>
													</div>
													
												  </div>
												</div>
												<div className="row m-0">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0" style={{marginBottom:"0px"}}>
													
													  </p>
													</div>
													<div className="col-md-6 gridHidden p-0">
													  <p className="row m-0 gt-margin-bottom-0" style={{marginBottom:"5px"}}>
													{/*<label className="col-md-5 p-0">Occupation :</label>
														<span className="col-md-7 p-0">  {item.occupation}  </span> */}	
													  </p>
													</div>
													
												  </div>
												</div>
											
											  </div>
											</div>					  
											{/* <QuickViewProfileComponents showuserid={item.userID}  /> */}
										</div>
										</div>);
									
		
								
							}
						
                        )}
							</div>
                        <Paginations items={this.props.location.state.searchresult} onChangePage={this.onChangePage} />
					{/* {
						this.props.location.state.searchresult.map((obj) => {
							return (	<div key={obj.userID} className="column" data-id={obj.userID}>
							<div className="our-lifeparterner">
								<div className="row">
								<div className="col-md-12">
								  <a href="#" className="our-thump" style={{padding:"5px 0 0 0"}}>
									  <div className="row">
									  <div className="col-md-4 text-center gridFullWidth">																						
									<h4 className="Anand">{obj.firstName} {obj.middleName} {obj.lastName}
									</h4>
								  </div>
								  <div className="col-md-4 gridHidden">
									<h5 className="Register">
									  Register On: 
									  26 Feb 2020 ,06:44 AM </h5>
								  </div>
								  <div className="col-md-4 text-center gridHidden">
									<h5 className="Online"> Online  </h5>
								  </div>
									  </div>
								  </a>
								  </div>
								  </div>
								  
								  
								<div className="row">
									  <div className="col-md-2 gridFullWidth">
									
										<div className="thumbnail gt-margin-bottom-0" style={{display:"none"}}>
											<img src={obj.memberImage || "images/male.png"} title="Anand Parmar" alt="IN8" className="img-responsive gtFullWidth" />	
										</div>

										<div className="thumbnail gt-margin-bottom-0">
											<img src={obj.s3ImagePath || "images/male.png"} title="Anand Parmar" alt="IN8" className="img-responsive gtFullWidth" />	
										</div>
									  </div>
									  <div className="col-md-10 gridFullWidth">
										<div className="row">
										  <div className="redirect row">
											<div className="col-md-6 gridFullWidth">
											  <p className="row" style={{marginBottom:"0px"}}>
												<label className="col-md-6 ">Age :</label>
												<span className="col-md-6">{obj.caste}</span>
											  </p>
											</div>
											<div className="col-md-6 gridFullWidth">
											  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
												<label className="col-md-6 ">Height :</label>
												<span className="col-md-6">{obj.heightDescription}</span>
											  </p>
											</div>
											
										  </div>
										</div>
										
										<div className="row">
										  <div className="redirect row">
											<div className="col-md-6 gridHidden ">
											  <p className="row" style={{marginBottom:"0px"}}>
												<label className="col-md-6 ">Religion :</label>
												<span className="col-md-6"> {obj.castName}</span>
											  </p>
											</div>
											<div className="col-md-6 gridHidden ">
											  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
												<label className="col-md-6 ">Caste :</label>
												<span className="col-md-6">{obj.castName} </span>
											  </p>
											</div>
											
										  </div>
										</div>							
			
			
										<div className="row">
										  <div className="redirect row">
											<div className="col-md-6 gridHidden ">
											  <p className="row" style={{marginBottom:"0px"}}>
												<label className="col-md-6 ">Location :</label>
												<span className="col-md-6 gridFullWidth"> {obj.currentCity}</span>
											  </p>
											</div>
											<div className="col-md-6 gridHidden ">
											  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
												<label className="col-md-6 ">Education :</label>
												<span className="col-md-6">{obj.educationName} </span>
											  </p>
											</div>
											
										  </div>
										</div>
			
										<div className="row">
										  <div className="redirect row">
											<div className="col-md-6 gridHidden ">
											  <p className="row" style={{marginBottom:"0px"}}>
												<label className="col-md-6 ">Mother Tongue :</label>
												<span className="col-md-6 gridFullWidth">  {obj.motherTongueName}  </span>
											  </p>
											</div>
											<div className="col-md-6 gridHidden ">
											  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
												<label className="col-md-6 ">Occupation :</label>
												<span className="col-md-6">  {obj.occupation}  </span>
											  </p>
											</div>
											
										  </div>
										</div>
										<div className="row">
										<QuickViewProfileComponents/>
										</div>
									  </div>
									</div>					  
								  
								</div>
								</div>);
							

						})
					}
				   */}
					
					
{/* 
						<div className="pagination">
						  <a href="#">&laquo;</a>
						  <a href="#">1</a>
						  <a href="#">2</a>
						  <a href="#">3</a>
						  <a href="#">4</a>
						  <a href="#">5</a>
						  <a href="#">6</a>
						  <a href="#">&raquo;</a>
						</div> */}



					
				</div>
				
				
						
			
		
		</div>
	</div>
	</section>
</article>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default withRouter(SearchResultPageComponents);