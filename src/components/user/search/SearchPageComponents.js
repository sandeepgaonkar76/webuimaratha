import React, { Component } from 'react';
import TopBarComponents from '../TopBarComponents';
import FooterComponents from '../UserFooterComponents';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { BrowserRouter, Route,withRouter,Redirect,useHistory,Link  } from 'react-router-dom';
class SearchPageComponents extends Component{
	constructor(props) {
		super(props);
		  this.handleChange = this.handleChange.bind(this)
		  this.handlequicksearch = this.handlequicksearch.bind(this)
		  this.handlebasicsearch = this.handlebasicsearch.bind(this)
		  this.state = {
			show: false,
			input: {},
			errors: {},
			ageFrom:'',
			ageTo:'',
			gender:'',
			heightFrom:'',
			heightTo:'',
			castev:'0',
			searchresult:[],
			AllMaritalStatus:[],
			listAllHeight:[],
			listAllEducation:[],
			caste: [],
			allages:[],userID:'',
			Mplan:'',
			searchCriteria:[],
		  };	
		}
		handleChange(e){
			this.setState((prevState) => ({
			  ...prevState,
			  [e.target.name]: e.target.value
			}),() => { this.validate() });
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
		  getAllCaste()
		  {
			fetch(`${process.env.REACT_APP_API_KEY}AllCastes`)
			.then(function(res) {
				return res.json();
			}).then((json)=> {
				this.setState({
					caste: json
				})
				
			});

			
		  }

		  renderAllAges(start, end) {
			for (let n = start; n <= end; n++) {
			  const col = (<option  key={n} value={n} >test</option>);		
			  this.allages.push(col);
			}
		}
	handlequicksearch(e)
	{	e.preventDefault();
	const {ageFrom,ageTo,gender,castev}=this.state||'';
	// alert(this.state.ageFrom);
	if(this.validate()){
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },		
		body: JSON.stringify({
			ageFrom:parseInt(this.state.ageFrom),
			ageTo:parseInt(this.state.ageTo),
			gender:parseInt(this.state.gender),
			caste:parseInt(this.state.castev),
			userid:parseInt(this.state.userID),
		})
	};
	fetch(`${process.env.REACT_APP_API_KEY}Member/QuickSearchMembers`, requestOptions)
		.then(response => response.json())
		.then(
			 data => {
				//  console.log(data);
			if(data)
			{let selecedcaste='';
				 selecedcaste=selecedcaste=this.state.caste.find(item => item.castID == this.state.castev);

				 if (selecedcaste!=undefined){
					// selecedcaste=this.state.caste.find(item => item.castID == this.state.castev).castName
					selecedcaste=selecedcaste.castName;
				 }
				 else{selecedcaste='Any';}
				
				this.setState({
					searchCriteria:`Gender: ${gender==1?"Male":"Female"} ,  Age Between: ${ageFrom} Year - ${ageTo} Years , Caste: ${selecedcaste}`});
				
				// if (this.state.castev != null)
				// {
				// this.setState({
				// 	searchCriteria:`Gender: ${gender==1?"Groom":"Bride"} , Age Between: ${ageFrom} Year - ${ageTo} Years, Caste : Any`});
				// }
				// else
				// {this.setState({
				// 	searchCriteria:`Gender: ${gender==1?"Groom":"Bride"} ,  Age Between: ${ageFrom} Year - ${ageTo} Years , Caste: ${this.state.caste.find(item => item.castID == this.state.castev).castName || 'Any '}`});
				

				// }
					this.setState({searchresult:data});   
				// this.setState({
				// 	AllMaritalStatus: json
				//   });
				  
				this.redirectToSearchResult();
			}
			else{
				alert("No Data Found.")
				}
			 }
		);
			}
	
}

validate = (e) =>{
    const {gender,ageFrom,ageTo}=this.state;
		// let input = this.state.input;
		let errors = {};
		let isValid = true;
    if (!gender){
		  isValid = false;
		  errors["gender"] = "gender required";
		}
    if (!ageFrom) {
		  isValid = false;
		  errors["ageFrom"] = "age From required.";
		}
    if (!ageTo) {
		  isValid = false;
		  errors["ageTo"] = "age To required.";
		}

		if(ageFrom>ageTo)
		{
			isValid = false;
			errors["ageFrom"] = "From Age should be less than To Age.";
		}
		this.setState({
		  errors: errors
		});	
		return isValid;
	}
	handlebasicsearch(e)
	{	
	e.preventDefault();
	const {ageFrom,ageTo,gender,heightFrom,heightTo,castev}=this.state;

		// console.log("Age From:"+this.state.ageFrom
	// +
	// "ageTo:"+this.state.ageTo+
	// "gender:"+this.state.gender+
	// "heightFrom:"+this.state.heightFrom+
	// "heightTo:"+this.state.heightTo+
	// "castev:"+this.state.castev);	
	
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },		
		body: JSON.stringify({
			ageFrom:parseInt(this.state.ageFrom),
			ageTo:parseInt(this.state.ageTo),
			gender:parseInt(this.state.gender),
			heightFrom: parseInt(this.state.heightFrom),
			heightTo: parseInt(this.state.heightTo),
			caste: parseInt(this.state.castev),
		})
	};
	console.log(requestOptions);
	fetch(`${process.env.REACT_APP_API_KEY}Member/BasicSearchMembers`, requestOptions)
		.then(response => response.json())
		.then(
			 data => {
				//  console.log(data);
				 console.log(JSON.parse(data));
			if(data)
			{
				console.log(JSON.parse(data));
				// this.setState({searchresult:data});   
				// this.redirectToSearchResult();
			}
			else{
				alert("No Data Found.")
				}
			 }
		);
}
componentDidMount()
{
	if(this.props.history.location.state)
    {
      if(this.props.location.state.sessionid){}else {this.redirectTo();}
	  this.state.userID=this.props.location.state.userID;
	  this.state.username=this.props.location.state.username;
	  this.state.sessionid=this.props.location.state.sessionid;
	  this.state.sessionid=this.props.location.state.sessionid;
    }
	this.getAllMaritalStatus();
	this.getAllHeight();
	this.getAllCaste();
}

redirectToSearchResult = (e) => {
    // e.preventDefault();    
    const { history } = this.props;
    history.push('/user/search-result',this.state);
    }
    render() {
		const { history } = this.props;
		const {userID, ageFrom,ageTo,gender,searchresult,heightFrom,heightTo,castev,searchCriteria} = (this.props.location && this.props.location.state) || {};
        return (
        <div>
        <TopBarComponents/>
    
<article>
<section className="search text-center">
	<div className="container">
		<div className="row">
		
		<div className="col-md-12">
			<div className="quich-searc-heading">
				{localStorage.getItem('Mplan')==5 &&(<h5 className="error" style={{fontSize:"18px"}}>You should be paid member to search profile.</h5>)}
				
				<h2>Search Options</h2>
				<p>Search perfect partner with our multiple search options which help you to find out perfect partner for life.</p>
			</div>
		
		
			<div className="col-md-9">
				<div className="search-section" id="exTab1">
				<Tabs defaultActiveKey="1a"  className="" variant="pills" >
  <Tab eventKey="1a" title="Basic Search">
  <form onSubmit={this.handlequicksearch}>
  <div className="headinf-tab">
											<h2>Quick Search</h2>
										
									  </div>
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Gender</label>
											 </div>
											 <div className="col-md-8">
												<select className="gender1" name="gender" value={this.state.gender} onChange={this.handleChange}>
												<option defaultChecked>Gender</option>
                                                   <option value="2">Female</option>
                                                    <option value="1">Male</option>
                                                </select>
												<div className={`text-danger tooltip ${this.state.errors.gender ? "show":""}`}>{this.state.errors.gender}</div>
											 </div>
                                         </div>

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Age</label>
											 </div>
											 <div className="col-md-3">
											{this.allages}
                                                <select className="years1" name="ageFrom" value={this.state.ageFrom} onChange={this.handleChange}>
												<option defaultChecked>Select Age From</option>
												
                                                     <option value="18">18 Years</option>
                                                     <option value="19">19 Years</option>
                                                     <option value="20">21 Years</option>
                                                     <option value="22">22 Years</option>
													 <option value="23">23 Years</option>
													 <option value="24">24 Years</option>
													 <option value="25">25 Years</option>
													 <option value="26">26 Years</option>
													 <option value="27">27 Years</option>
													 <option value="28">28 Years</option>
													 <option value="29">29 Years</option>
													 <option value="30">30 Years</option>
													 <option value="31">31 Years</option>
                                                     <option value="32">32 Years</option>
                                                     <option value="31">31 Years</option>
													 <option value="32">32 Years</option>
													 <option value="33">33 Years</option>
													 <option value="34">34 Years</option>
													 <option value="35">35 Years</option>
													 <option value="36">36 Years</option>
													 <option value="37">37 Years</option>
													 <option value="38">38 Years</option>
													 <option value="39">39 Years</option>
													 <option value="40">40 Years</option>
													 <option value="41">41 Years</option>
													 <option value="42">42 Years</option>
													 <option value="43">43 Years</option>
													 <option value="44">44 Years</option>
													 <option value="45">45 Years</option>
													 <option value="46">46 Years</option>
													 <option value="47">47 Years</option>
													 <option value="48">48 Years</option>
													 <option value="49">49 Years</option>
													 <option value="50">50 Years</option>
													 
													 
                                                     

                                                 </select>
												 <div className={`text-danger tooltip ${this.state.errors.ageFrom ? "show":""}`}>{this.state.errors.ageFrom}</div>
											 </div>
											<div className="col-md-2">
												 <p>To</p>
											 </div>	

											 <div className="col-md-3">
                                                <select className="age1" name="ageTo" value={this.state.ageTo} onChange={this.handleChange}>
												<option defaultChecked>Select Age To</option>
												<option value="18">18 Years</option>
                                                     <option value="19">19 Years</option>
                                                     <option value="18">18 Years</option>
                                                     <option value="19">19 Years</option>
                                                     <option value="20">21 Years</option>
                                                     <option value="22">22 Years</option>
													 <option value="23">23 Years</option>
													 <option value="24">24 Years</option>
													 <option value="25">25 Years</option>
													 <option value="26">26 Years</option>
													 <option value="27">27 Years</option>
													 <option value="28">28 Years</option>
													 <option value="29">29 Years</option>
													 <option value="30">30 Years</option>
													 <option value="31">31 Years</option>
                                                     <option value="32">32 Years</option>
                                                     <option value="31">31 Years</option>
													 <option value="32">32 Years</option>
													 <option value="33">33 Years</option>
													 <option value="34">34 Years</option>
													 <option value="35">35 Years</option>
													 <option value="36">36 Years</option>
													 <option value="37">37 Years</option>
													 <option value="38">38 Years</option>
													 <option value="39">39 Years</option>
													 <option value="40">40 Years</option>
													 <option value="41">41 Years</option>
													 <option value="42">42 Years</option>
													 <option value="43">43 Years</option>
													 <option value="44">44 Years</option>
													 <option value="45">45 Years</option>
													 <option value="46">46 Years</option>
													 <option value="47">47 Years</option>
													 <option value="48">48 Years</option>
													 <option value="49">49 Years</option>
													 <option value="50">50 Years</option>
                                                 </select>
												 <div className={`text-danger tooltip ${this.state.errors.ageTo ? "show":""}`}>{this.state.errors.ageTo}</div>
											 </div>
											 
                                         </div>

										{/* <div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Religion</label>
											 </div>
											 <div className="col-md-8">
                                                <input type="text" name="religion" value={this.state.religion} onChange={this.handleChange} placeholder="Choose a Religion..."/>
											 </div>
											 
                                         </div> */}
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Caste</label>
											 </div>
											 <div className="col-md-8">
                                                
												<select name="castev" id="caste" className="region"  onChange={this.handleChange} >
                              <option defaultChecked>Select Caste</option>
                                {
                                  this.state.caste.map((obj) => {
                                  return <option key={obj.castID} value={obj.castID}>{obj.castName}</option>
                                  })
                                }
                            </select>
											 </div>
											 
                                         </div>
										 
										<div className="row">
											<div className="col-md-12">
												<div className="submit-now">											
												<button disabled={localStorage.getItem('Mplan')==0} type="submit" className="btn btn-primary" name="search_now">Search Now</button>
												{localStorage.getItem('Mplan')==0 &&(<h5 className="error" style={{fontSize:"18px"}}>You should be paid member to search profile. <Link to="/user/pay-now" className="submit-btn1">Pay Now</Link></h5>)}
												 </div>
											 </div>
											 
                                         </div>	
</form>
  </Tab>
  <Tab eventKey="2a" title="">
  <form onSubmit={this.handlebasicsearch}>
  <div className="headinf-tab">
											<h2>Basic Search</h2>
											<p>Searches to provide suitable profiles.</p>
									  </div>
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Gender</label>
											 </div>
											 <div className="col-md-8">
												 <select className="gender1" name="gender" value={this.state.gender} onChange={this.handleChange}>
													 <option defaultChecked>Gender</option>
													 <option value="2">Bride</option>
                                                    <option value="1">Groom</option>
                                                </select>
											 </div>
											 
                                         </div>	

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Age</label>
											 </div>
											 <div className="col-md-3">
                                                <select className="years1" name="ageFrom" value={this.state.ageFrom} onChange={this.handleChange}>
													<option defaultChecked>Age</option>
												<option value="18">18 Years</option>
                                                     <option value="19">19 Years</option>
                                                     <option value="20">21 Years</option>
                                                     <option value="22">22 Years</option>
													 <option value="23">23 Years</option>
													 <option value="24">24 Years</option>
													 <option value="25">25 Years</option>
													 <option value="26">26 Years</option>
													 <option value="27">27 Years</option>
													 <option value="28">28 Years</option>
													 <option value="29">29 Years</option>
													 <option value="30">30 Years</option>
													 <option value="31">31 Years</option>
                                                     <option value="32">32 Years</option>
                                                     <option value="31">31 Years</option>
													 <option value="32">32 Years</option>
													 <option value="33">33 Years</option>
													 <option value="34">34 Years</option>
													 <option value="35">35 Years</option>
													 <option value="36">36 Years</option>
													 <option value="37">37 Years</option>
													 <option value="38">38 Years</option>
													 <option value="39">39 Years</option>
													 <option value="40">40 Years</option>
													 <option value="41">41 Years</option>
													 <option value="42">42 Years</option>
													 <option value="43">43 Years</option>
													 <option value="44">44 Years</option>
													 <option value="45">45 Years</option>
													 <option value="46">46 Years</option>
													 <option value="47">47 Years</option>
													 <option value="48">48 Years</option>
													 <option value="49">49 Years</option>
													 <option value="50">50 Years</option>
													 
                                                 </select>
											 </div>
											<div className="col-md-2">
												 <p>To</p>
											 </div>	

											 <div className="col-md-3">
                                                <select className="age1" name="ageTo" value={this.state.ageTo} onChange={this.handleChange}>
													<option defaultChecked>Age</option>
												<option value="18">18 Years</option>
                                                     <option value="19">19 Years</option>
                                                     <option value="20">21 Years</option>
                                                     <option value="22">22 Years</option>
													 <option value="23">23 Years</option>
													 <option value="24">24 Years</option>
													 <option value="25">25 Years</option>
													 <option value="26">26 Years</option>
													 <option value="27">27 Years</option>
													 <option value="28">28 Years</option>
													 <option value="29">29 Years</option>
													 <option value="30">30 Years</option>
													 <option value="31">31 Years</option>
                                                     <option value="32">32 Years</option>
                                                     <option value="31">31 Years</option>
													 <option value="32">32 Years</option>
													 <option value="33">33 Years</option>
													 <option value="34">34 Years</option>
													 <option value="35">35 Years</option>
													 <option value="36">36 Years</option>
													 <option value="37">37 Years</option>
													 <option value="38">38 Years</option>
													 <option value="39">39 Years</option>
													 <option value="40">40 Years</option>
													 <option value="41">41 Years</option>
													 <option value="42">42 Years</option>
													 <option value="43">43 Years</option>
													 <option value="44">44 Years</option>
													 <option value="45">45 Years</option>
													 <option value="46">46 Years</option>
													 <option value="47">47 Years</option>
													 <option value="48">48 Years</option>
													 <option value="49">49 Years</option>
													 <option value="50">50 Years</option>
													 
                                                 </select>
											 </div>
											 
                                         </div>
	
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Height</label>
											 </div>
											 <div className="col-md-3">
												<select className="height" name="heightFrom" value={this.state.heightFrom} onChange={this.handleChange} id="from_height" >
									  <option defaultChecked>From</option>
									{
                                  this.state.listAllHeight.map((obj) => {
                                  return (<option key={obj.heightID} value={obj.heightID}>{obj.heightDescription}</option>)
                                  })
                                }
							</select>
											 </div>
											<div className="col-md-2">
												 <p>To</p>
											 </div>	

											 <div className="col-md-3">
												<select className="top-height" name="heightTo" value={this.state.heightTo} onChange={this.handleChange}>  
												<option defaultChecked>To</option>
									{
                                  this.state.listAllHeight.map((obj) => {
                                  return (<option key={obj.heightID} value={obj.heightID}>{obj.heightDescription}</option>)
                                  })
                                }
												</select>
											 </div>
											 
                                         </div>

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Marital status</label>
											 </div>
											 <div className="col-md-8">
											   <select className="top-height" name="maritalstatus">  
												<option>Select Marital Status</option>
									{
                                  this.state.AllMaritalStatus.map((obj) => {
                                  return (<option key={obj.maritalStatusID} value={obj.maritalStatusID}>{obj.maritalStatusName}</option>)
                                  })
                                }
												</select>
											 </div>
											 
                                         </div>
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Religion</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Religion..."/>
											 </div>
											 
                                         </div>										 
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Caste</label>
											 </div>
											 <div className="col-md-8">
											   <select className="top-height" name="castev" onChange={this.handleChange}> 
												<option defaultChecked>Select Caste</option>
									{
                                  this.state.caste.map((obj) => {
                                  return (<option key={obj.castID} value={obj.castID}>{obj.castName}</option>)
                                  })
                                }
												</select>
												
											 </div>
											 
                                         </div>
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Country living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Country..."/>
											 </div>
											 
                                         </div>
	
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">State living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a State..."/>
											 </div>
											 
                                         </div>		

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">City living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a City..."/>
											 </div>
											 
                                         </div>		
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Education</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Education..."/>
											 </div>
											 
                                         </div>
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Photo settings</label>
											 </div>
											 <div className="col-md-8">
                                             <select className="photo_search" name="photo_search">
													<option >Does Not Matter</option>
													<option value="Yes">With Photo</option>
											</select>
											 </div>
											 
                                         </div>	

										<div className="row">
											<div className="col-md-12">
												<div className="submit-now">
												
												<button disabled={localStorage.getItem('Mplan')==0} type="submit" className="submit1 btn">Search Now</button>
												 </div>
											 </div>
											 
                                         </div>
</form>
  </Tab>
  {/* <Tab eventKey="3a" title="Advanced Search" >
  <div className="headinf-tab">
											<h2>Advanced Search</h2>
											<p>Advance search contain criteria that helps you to find a suitable profile.</p>
									  </div>
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Gender</label>
											 </div>
											 <div className="col-md-8">
												<select className="Bride1" name="gender">
                                                        <option value="Female">Bride</option>
                                                        <option value="Male">Groom</option>
                                                    </select>
											 </div>
											 
                                         </div>	

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Age</label>
											 </div>
											 <div className="col-md-3">
                                                <select className="years1" name="from_age2">
                                                     <option value="18">18 Years</option>
                                                     <option value="19">19 Years</option>
                                                     <option value="20">20 Years</option>
                                                     <option value="21">21 Years</option>
                                                 </select>
											 </div>
											<div className="col-md-2">
												 <p>To</p>
											 </div>	

											 <div className="col-md-3">
                                                <select className="age1" name="from_age3">
                                                     <option value="30">30 Years</option>
                                                     <option value="31">31 Years</option>
                                                     <option value="31">31 Years</option>
                                                     <option value="32">32 Years</option>
                                                 </select>
											 </div>
											 
                                         </div>
	
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Height</label>
											 </div>
											 <div className="col-md-3">
												<select className="height" name="from_height">  
														<option value="48">Below 4ft</option>
														<option value="54" defaultValue>4ft 06in</option>
														<option value="55">4ft 07in</option>
														 <option value="56">4ft 08in</option>
														<option value="57">4ft 09in</option>
														 <option value="58">4ft 10in</option>
												</select>
											 </div>
											<div className="col-md-2">
												 <p>To</p>
											 </div>	

											 <div className="col-md-3">
												<select className="top-height" name="top">  
														<option value="48">Below 4ft</option>
														<option value="54" defaultValue>4ft 06in</option>
														<option value="55">4ft 07in</option>
														 <option value="56">4ft 08in</option>
														<option value="57">4ft 09in</option>
														 <option value="58">4ft 10in</option>
												</select>
											 </div>
											 
                                         </div>

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Marital status</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Marital Status..."/>
											 </div>
											 
                                         </div>
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Religion</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Religion..."/>
											 </div>
											 
                                         </div>										 
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Caste</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Caste..."/>
											 </div>
											 
                                         </div>			

										<div className="row">
											<div className="col-md-12">
												<div className="form-head">
													<span> Location Details</span>
												 </div>
											 </div>
											 
                                         </div>
											 
										
										 
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Country living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Country..."/>
											 </div>
											 
                                         </div>
	
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">State living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a State..."/>
											 </div>
											 
                                         </div>		

										 
										<div className="row">
											<div className="col-md-12">
												<div className="form-head">
													<span> Education / Occupation / income Details</span>
												 </div>
											 </div>
											 
                                         </div>

										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">City living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a City..."/>
											 </div>
											 
                                         </div>		
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Education</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Education..."/>
											 </div>
											 
                                         </div>
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Photo settings</label>
											 </div>
											 <div className="col-md-8">
                                             <select className="photo_search" name="photo_search">
													<option defaultValue>Does Not Matter</option>
													<option value="Yes">With Photo</option>
											</select>
											 </div>
											 
                                         </div>	
										 
										<div className="row">
											<div className="col-md-12">
												<div className="form-head">
													<span> Horoscope Details</span>
												 </div>
											 </div>
											 
                                         </div>
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Star</label>
											 </div>
											 <div className="col-md-8">
												<input type="text" value="Choose a Star..."/>
											 </div>
											 
                                         </div>										 
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Manglik</label>
											 </div>
											 <div className="col-md-8">
												<select className="Matter" name="manglik">
                                                    <option>Does Not Matter</option>
            										<option value="Yes">Yes</option>
            										<option value="No">No</option>
                                                </select>
											 </div>
											 
                                         </div>										 
										 
										<div className="row">
											<div className="col-md-12">
												<div className="submit-now">
												<input type="submit1" value="Search Now"/>
												 </div>
											 </div>
											 
                                         </div>
  </Tab>
  <Tab eventKey="4a" title="Keyword Search">
  <div className="headinf-tab">
											<h2>Keyword Search</h2>
											<p>With keyword search, you can get suitable profiles with specific keywords.</p>
									  </div>									  
									  
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Keyword search</label>
											 </div>
											 <div className="col-md-8">
												<input type="text" value="Choose a Star..."/>
												<b>Example - First Name, Last Name, Email id.</b>
											 </div>
											 
                                         </div>										 
										 
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Manglik</label>
											 </div>
											 <div className="col-md-8">
												<select className="search-photo" name="photo_search">
                                                	<option defaultValue>Does Not Matter</option>
                                                    <option value="Yes">With Photo</option>
                                                    
                                                </select>
											 </div>
											 
                                         </div>										 
										 
										<div className="row">
											<div className="col-md-12">
												<div className="submit-now">
												<input type="submit1" value="Search Now"/>
												 </div>
											 </div>
											 
                                         </div>	
  </Tab>

  <Tab eventKey="5a" title="Location Search">
  <div className="headinf-tab">
											<h2>Location search</h2>
											<p>With Location search, you can get suitable profiles from specific location or place.</p>
									  </div>										  
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Country living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Country..."/>
											 </div>
											 
                                         </div>
	
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">State living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a State..."/>
											 </div>
											 
                                         </div>	

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">City living in</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a City..."/>
											 </div>
											 
                                         </div>


										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Photo settings</label>
											 </div>
											 <div className="col-md-8">
												<select className="Mattert" name="Matter-search">
                                                	<option defaultValue>Does Not Matter</option>
                                                    <option value="Yes">With Photo</option>
                                                    
                                                </select>
											 </div>
											 
                                         </div>	

										<div className="row">
											<div className="col-md-12">
												<div className="submit-now">
												<input type="submit1" value="Search Now"/>
												 </div>
											 </div>										 
									  
									</div>
  </Tab>

  <Tab eventKey="6a" title="Occupation Search">
  <div className="headinf-tab">
											<h2>Occupation Search</h2>
											<p>With Occupation Search, you can get suitable profiles with specific type of occupation.</p>
									  </div>										  
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Gender</label>
											 </div>
											 <div className="col-md-8">
												<select className="gender1" name="gender">
                                                        <option value="Female">Bride</option>
                                                        <option value="Male">Groom</option>
                                                    </select>
											 </div>
											 
                                         </div>
	
										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Education</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Education..." />
											 </div>
											 
                                         </div>	
										 

										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Occupation</label>
											 </div>
											 <div className="col-md-8">
                                               <input type="text" placeholder="Choose a Occupation..." />
											 </div>
											 
                                         </div>


										<div className="row">
											<div className="col-md-4">
												 <label className="top-padding">Annual income</label>
											 </div>
											 <div className="col-md-8">
												<select className="Annual1" name="annual_income">
                                                        <option >Select Annual Income</option>
                                                        <option value="Rs. 10,000 - 50,000">Rs. 10,000 - 50,000</option>
                                                        <option value="Rs. 50,000 - 1,00,000">Rs. 50,000 - 1,00,000</option>
                                                        <option value="Rs. 1,00,000 - 2,00,000">Rs. 1,00,000 - 2,00,000</option>
                                                        <option value="Rs. 2,00,000 - 5,00,000">Rs. 2,00,000 - 5,00,000</option>
                                                        <option value="Rs. 5,00,000 - 10,00,000">Rs. 5,00,000 - 10,00,000</option>
                                                        <option value="Rs. 10,00,000 - 50,00,000">Rs. 10,00,000 - 50,00,000</option>
                                                        <option value="Rs. 50,00,000 - 1,00,00,000">Rs. 50,00,000 - 1,00,00,000</option>
                                                        <option value="Above Rs. 1,00,00,000">Above Rs. 1,00,00,000</option>
                                                        <option value="Does not matter">Does not matter</option>
                                                     </select>
											 </div>
											 
                                         </div>

										<div className="row">
											<div className="col-md-12">
												<div className="submit-now">
												<input type="submit1" value="Submit"/>
												 </div>
											 </div>										 
									  
									</div>
  </Tab> */}
</Tabs>
				</div>
			</div>
			<div className="col-md-4">
			&nbsp;
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
export default withRouter(SearchPageComponents);