import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import { withRouter } from 'react-router';
import QuickViewProfileComponents from '../profile/QuickViewProfileComponents';
import Paginations from './Paginations';

class SearchResultPageComponents extends Component{
	constructor(props) {
		super(props);
		//   this.handleChange = this.handleChange.bind(this)
		//   this.handlequicksearch = this.handlequicksearch.bind(this)
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
			pageOfItems: []

		  };	
		  this.onChangePage = this.onChangePage.bind(this);

		}

		onChangePage(pageOfItems) {
			// update state with new page of items
			this.setState({ pageOfItems: pageOfItems });
		}
getAllMaritalStatus()
{
fetch(`${process.env.REACT_APP_API_KEY}AllMaritalStatus`)
  .then(function(res) {
      return res.json();
  }).then((json)=> {
      this.setState({
		AllMaritalStatus: json
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
		listAllHeight: json
      })
  });
}

getAllHeight()
{
fetch(`${process.env.REACT_APP_API_KEY}AllEducation`)
  .then(function(res) {
      return res.json();
  }).then((json)=> {
      this.setState({
		listAllEducation: json
      })
  });
}



componentDidMount()
{
	this.getAllMaritalStatus();
	this.getAllHeight();
	// console.log(this.props.location.state.searchresult)
}
    render() {
		const { ageFrom,ageTo,gender,searchresult} = (this.props.location && this.props.location.state) || {};
		
        return (
        <div>

        <HeaderComponents/>
    
<article>
<section className="search">
	<div className="container">
		<div className="row">
		
			<div className="col-md-4">
				<div className="left-search">
				
					
					<a data-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseExample" className="gt-refine">
                    <i className="fa fa-filter gt-margin-right-10">
                    </i>Refine Search 
                    <i className="fa fa-caret-down gt-margin-left-10">
                    </i>
                  </a>
					<div className="gt-filter-result collapse in" id="collapseExample" aria-expanded="true" >
						<form>
							<div className="search-gender">
							<div className="reli">
								<h4>Gender</h4>
							</div>	
							<div className="filter-form">
							<label htmlFor="filter-1">
							  <input type="radio" id="filter-1" name="gender" value="0" className="male-cursor"/> 
							  <span className="gt-margin-left-10 gt-cursor">Male
							  </span>
							</label>
							<label htmlFor="filter-2">
							  <input type="radio" id="filter-2" name="gender" value="1" className="male-cursor"/> 
							  <span className="gt-margin-left-10 gt-cursor">Female
							  </span>
							</label>
							
							</div>
							</div>
							
							{/* <div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Religion</h4>
								<a className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							<ul className="Aggarwal">
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Aggarwal </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Aggarwal </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">barahsaini vaishy </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">barahsaini vaishy    </span>
							<span className="badge"> 0  </span>
							</li>

							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Buddhist </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Christian </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">  Hindu </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Jain - Digambar </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Jain - Shwetambar </span>
							<span className="badge"> 0  </span>
							</li>

							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Jewish </span>
							<span className="badge"> 0  </span>
							</li>
							
							<li className="filter-chk">
							<input type="checkbox" id="filter-3" name="religion" className="pull-left"/>
							<span className="gt-cursor col-xs-10">Mahajan vaishy  </span>
							<span className="badge"> 0  </span>
							</li>							
							</ul>
							
							</div>
							</div>	 */}

							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Latest Register Profile</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							
							<label htmlFor="filter-22">
							  <input type="radio" name="profile_latest_register" id="filter-22" value="1" defaultChecked/>
							  <span className="gt-cursor">Today Register Profile</span>
							</label>
							
							<label htmlFor="filter-23">
							  <input type="radio" name="profile_latest_register" id="filter-23" value="1" defaultChecked/>
							  <span className="gt-cursor">Last Three Days Register Profile</span>
							</label>							
							
							<label htmlFor="filter-24">
							  <input type="radio" name="profile_latest_register" id="filter-24" value="1" defaultChecked/>
							  <span className="gt-cursor">Last Week Register Profile</span>
							</label>							
							
							<label htmlFor="filter-25">
							  <input type="radio" name="profile_latest_register" id="filter-25" value="1" defaultChecked/>
							  <span className="gt-cursor">Last Month Register Profile</span>
							</label>
							</div>
							</div>

							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Profile Type</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							
							<label htmlFor="filter-6">
							  <input type="radio" name="profile_photo" id="filter-36" value="1" />
							  <span className="gt-cursor">With Photo</span>
							</label>
							
							<label htmlFor="filter-4">
							  <input type="radio" name="profile_photo" id="filter-4" value="1" />
							  <span className="gt-cursor">Profile With Horoscope</span>
							</label>							
							
							<label htmlFor="filter-5">
							  <input type="radio" name="profile_photo" id="filter-5" value="1"/>
							  <span className="gt-cursor">Does not matter</span>
							</label>
							
							</div>
							</div>	

							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Marital Status</h4>
								<a className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							{
                                  this.state.AllMaritalStatus.map((obj) => {
                                  return (<div  key={obj.maritalStatusID} className="filter-chk">
								  <input type="checkbox" id="staus1" name="religion" className="pull-left"/>
								  <span className="gt-cursor col-xs-10">{obj.maritalStatusName}</span>
								  </div>)
                                  })
                                }						
							</div>
							</div>
							
							
							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Age</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
								<div className="row">
							<div className="col-md-5">
							<select className="form-control" name="from_age" id="from_age">
								  <option value="null">From</option>
								  <option value="18">18 Years</option>
									<option value="19">19 Years</option>
									<option value="20">20 Years</option>
									<option value="21">21 Years</option>
									<option value="22">22 Years</option>
							</select>
							</div>
							
							<div className="col-md-2">
							<p className="filter-ot">To</p>
							</div>
							
							<div className="col-md-5">
							<select className="form-control" name="from_age" id="from_age">
								  <option value="null">To</option>
								  <option value="18">18 Years</option>
									<option value="19">19 Years</option>
									<option value="20">20 Years</option>
									<option value="21">21 Years</option>
									<option value="22">22 Years</option>
							</select>
							</div>							
							</div>
							</div>
							</div>	
							
							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Height</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							<div className="row">
							<div className="col-md-5">
							<select className="form-control" name="from_height" id="from_height">
									  <option value="null">From</option>
									{
                                  this.state.listAllHeight.map((obj) => {
                                  return (<option key={obj.heightID} value={obj.heightID}>{obj.heightDescription}</option>)
                                  })
                                }
							</select>
							</div>
							
							<div className="col-md-2">
							<p className="filter-ot">To</p>
							</div>
							
							<div className="col-md-5">
								<select className="form-control" name="from_height" id="from_height">
										  <option value="null">From</option>
										  {
                                  this.state.listAllHeight.map((obj) => {
                                  return (<option key={obj.heightID} value={obj.heightID}>{obj.heightDescription}</option>)
                                  })
                                }
								</select>
							</div>							
							</div>
							</div>
							</div>

							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Education</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							
								<div className="edu">
								<div className="search-edu">
								<input className="search form-control" placeholder="Search"/>
								</div>
								<ul className="Aggarwal">						
									
									{
                                  this.state.listAllEducation.map((obj) => {
                                  return (
									<li key={obj.educationID}>
									<label htmlFor="filter-21">
									<input type="checkbox" id="filter-21" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">{obj.education}</span>
									</label>
									</li>)
                                  })
                                }
								</ul>
								
								</div>
							</div>
							</div>	

							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Occupation</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							
								<div className="edu">
								<div className="search-edu">
								<input className="search form-control" placeholder="Search"/>
								</div>
								<ul className="Aggarwal">
							
									<li>
									<label htmlFor="filter-211">
									<input type="checkbox" id="filter-211" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Civil Engineer</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-222">
									<input type="checkbox" id="filter-222" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Clerical Official</span>
									</label>
									</li>	


									<li>
									<label htmlFor="filter-333">
									<input type="checkbox" id="filter-333" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Commercial Pilot</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-444">
									<input type="checkbox" id="filter-444" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Company Secretary</span>
									</label>
									</li>	

									<li>
									<label htmlFor="filter-555">
									<input type="checkbox" id="filter-555" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Computer Professional</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-666">
									<input type="checkbox" id="filter-666" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Consultant</span>
									</label>
									</li>	

									<li>
									<label htmlFor="filter-777">
									<input type="checkbox" id="filter-777" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Contractor</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-888">
									<input type="checkbox" id="filter-888" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Cost Accountant</span>
									</label>
									</li>	
	
								</ul>
								
								</div>
							</div>
							</div>
							<div className="search-gender serch-bedge">
							<div className="reli">
							<h4>Country Living In</h4>
								<a  className="gt-cursor">
								<i className="fa fa-times-circle">
								</i> Clear
							  </a>
							  </div>
							<div className="filter-form">
							
								<div className="edu">
								<div className="search-edu">
								<input className="search form-control" placeholder="Search"/>
								</div>
								<ul className="Aggarwal">
								
									<li>
									<label htmlFor="filter-2111">
									<input type="checkbox" id="filter-2111" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">India</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-2222">
									<input type="checkbox" id="filter-2222" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Canada</span>
									</label>
									</li>	


									<li>
									<label htmlFor="filter-3333">
									<input type="checkbox" id="filter-3333" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Australia</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-4444">
									<input type="checkbox" id="filter-4444" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">United States</span>
									</label>
									</li>	

									<li>
									<label htmlFor="filter-5555">
									<input type="checkbox" id="filter-5555" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">United Kingdom</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-6666">
									<input type="checkbox" id="filter-6666" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Afghanistan</span>
									</label>
									</li>	

									<li>
									<label htmlFor="filter-7777">
									<input type="checkbox" id="filter-7777" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Aland Islands</span>
									</label>
									</li>
									
									<li>
									<label htmlFor="filter-8888">
									<input type="checkbox" id="filter-8888" name="education" className="gt-cursor"/> 
									<span className="gt-cursor name">Cost Albania</span>
									</label>
									</li>	
	
								</ul>
								
								</div>
							</div>
							</div>



							
							
							
							
							

							
						</form>
						
					</div>
					
					
				</div>
			
				</div>
			<div className="col-md-8">
				<div className="search-heading">
					<h2>Your search results</h2>
				</div>
				
				<div className="Spotlight-Profile" style={{display:"none"}}>
					<h2>× Spotlight Profile</h2>
					<p>Blue Header profile is are spotlight profile which was showing top of the search result.Its gives 10 times faster results. 0 Profiles found : Age- 33 to 35 ,height- 71 to 73</p>
				</div>				
			
				{this.state.pageOfItems.map(item =>
                            {
								
									return (	<div key={item.userID} className="column" data-id={item.userID}>
									<div className="our-lifeparterner">
										<div className="row">
										<div className="col-md-12">
										  <a href="#" className="our-thump" style={{padding:"5px 0 0 0"}}>
											  <div className="row">
											  <div className="col-md-4 text-center gridFullWidth">																						
											<h4 className="Anand">{item.firstName} {item.middleName} {item.lastName}
											</h4>
										  </div>
										  <div className="col-md-4 gridHidden">
											<h5 className="Register">
											  Register On: {item.registeredOn}</h5> 
										  </div>
										  {/* 
										  <div className="col-md-4 text-center gridHidden">
											<h5 className="Online"> Online  </h5>
										  </div> */}
											  </div>
										  </a>
										  </div>
										  </div>
										  
										  
										<div className="row">
											  <div className="col-md-2 gridFullWidth">
											
												<div className="thumbnail gt-margin-bottom-0" style={{display:"none"}}>
													<img src={item.memberImage || "images/male.png"} title={item.memberImage} alt="IN8" className="img-responsive gtFullWidth" />	
												</div>
		
												<div className="thumbnail gt-margin-bottom-0">
													<img src={item.s3ImagePath || "images/male.png"} title="Anand Parmar" alt="IN8" className="img-responsive gtFullWidth" />	
												</div>
											  </div>
											  <div className="col-md-10 gridFullWidth">
												<div className="row">
												  <div className="redirect row">
													<div className="col-md-6 gridFullWidth">
													  <p className="row" style={{marginBottom:"0px"}}>
														<label className="col-md-6 ">Age :</label>
														<span className="col-md-6">{item.caste}</span>
													  </p>
													</div>
													<div className="col-md-6 gridFullWidth">
													  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-6 ">Height :</label>
														<span className="col-md-6">{item.heightDescription}</span>
													  </p>
													</div>
													
												  </div>
												</div>
												
												<div className="row">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden ">
													  <p className="row" style={{marginBottom:"0px"}}>
														<label className="col-md-6 ">Religion :</label>
														<span className="col-md-6"> {item.castName}</span>
													  </p>
													</div>
													<div className="col-md-6 gridHidden ">
													  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-6 ">Caste :</label>
														<span className="col-md-6">{item.castName} </span>
													  </p>
													</div>
													
												  </div>
												</div>							
					
					
												<div className="row">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden ">
													  <p className="row" style={{marginBottom:"0px"}}>
														<label className="col-md-6 ">Location :</label>
														<span className="col-md-6 gridFullWidth"> {item.currentCity}</span>
													  </p>
													</div>
													<div className="col-md-6 gridHidden ">
													  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-6 ">Education :</label>
														<span className="col-md-6">{item.educationName} </span>
													  </p>
													</div>
													
												  </div>
												</div>
					
												<div className="row">
												  <div className="redirect row">
													<div className="col-md-6 gridHidden ">
													  <p className="row" style={{marginBottom:"0px"}}>
														<label className="col-md-6 ">Mother Tongue :</label>
														<span className="col-md-6 gridFullWidth">  {item.motherTongueName}  </span>
													  </p>
													</div>
													<div className="col-md-6 gridHidden ">
													  <p className="row gt-margin-bottom-0" style={{marginBottom:"5px"}}>
														<label className="col-md-6 ">Occupation :</label>
														<span className="col-md-6">  {item.occupation}  </span>
													  </p>
													</div>
													
												  </div>
												</div>
												<div className="row" style={{textAlign:"right",marginRight:"30px"}}>
												<QuickViewProfileComponents showuserid={item.userID}  />
												</div>
											  </div>
											</div>					  
										  
										</div>
										</div>);
									
		
								
							}
                        )}
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