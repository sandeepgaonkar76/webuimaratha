import React, {useState,useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Axios from 'axios';
import HeaderComponents from '../UserHeaderComponents';
import FooterComponents from '../UserFooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';
import TopBarComponents from '../TopBarComponents';
import jsSHA from 'jssha';
class PaymentComponent extends Component{
  constructor(props) {
		super(props);
		this.state = {
      //baseURL:"https://test.payu.in/_payment",
        baseURL:"https://secure.payu.in/_payment",
      //

      //string key = "I7CXK4HO";
      //string salt = "8KnPMVErza";
      title:"Reacjt Js Checkout",
      key:"oZ7oo9" ,
      salt:"UkojH5TS",
      key:"I7CXK4HO" ,
      salt:"8KnPMVErza",
      txnid:"",
      amount:"",
      firstname:"",
      email:"",
      phone:"",
      productinfo:"",
      surl:"http://mymarathalagna.com/success.php",
      furl:"http://mymarathalagna.com/success.php",
      
      // surl:"https://apiplayground-response.herokuapp.com/",
      // furl:"https://apiplayground-response.herokuapp.com/",
      //surl:"http://localhost:5000/api/world",
      //furl:"http://localhost:5000/api/world",      
      // surl:"http://mymarathalagna.com/api/world",
      // furl:"http://mymarathalagna.com/api/world",      
      serviceProvider:"payu_paisa",
      hash:"",
      }
  }
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  calcHash(e){   
    let name=e.target.name;
    let value=e.target.value;
    if(name=="key")
    {
      this.setState({key:value});
    }

    if(name=="txnid")
    {
      this.setState({txnid:"MML301"+localStorage.getItem("userid")});
    }

    if(name=="amount")
    {
      this.setState({amount:value});
    }
    
    if(name=="firstname")
    {
      this.setState({firstname:value});
    }

    if(name=="email")
    {
      this.setState({email:value});
    }

    if(name=="phone")
    {
      this.setState({phone:value});
    }

    if(name=="productinfo")
    {
      if(value=="basic")
      {
        this.setState({amount:"500"});
      }
      else if (value=="gold"){
        this.setState({amount:"2000"});
      }
      else
      {
        this.setState({amount:"0"});
      }
      this.setState({productinfo:value});
    }
    // var hashString_1 = 'oZ7oo9|791234|500|Basic|sandeep|sandy_gaonkar@yahoo.com|||||||||||UkojH5TS';                                              
    var hashString_1 = `${this.state.key}|${this.state.txnid}|${this.state.amount}|${this.state.productinfo}|${this.state.firstname}|${this.state.email}|||||||||||${this.state.salt}`;                                              
    const shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update(hashString_1);
    const hash = shaObj.getHash("HEX");

    this.setState ( {
      //Payu Fields Start
     surl:"http://mymarathalagna.com/success.php",
      furl:"http://mymarathalagna.com/success.php",
      
      // surl:"https://apiplayground-response.herokuapp.com/",
      // furl:"https://apiplayground-response.herokuapp.com/",
      // surl:"http://mymarathalagna.com/success.php",
      // furl:"http://mymarathalagna.com/success.php",      
      hashCode : hash
      
      })
      console.log(hash);
  }
  
  componentDidMount()
  { 
    let rand='';
    rand=(Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    this.setState({txnid:"MML("+localStorage.getItem("userid")+"-"+localStorage.getItem("Mplan")+")"+rand});
    // var hashString_1 = 'oZ7oo9|791234|500|Basic|sandeep|sandy_gaonkar@yahoo.com|||||BOLT_KIT_NODE_JS||||||UkojH5TS';                                              
    // var hashString_1 = '||||||||||BOLT_KIT_NODE_JS||||||';                                              
    // var hashString_1 = 'oZ7oo9|791234|500|Basic|sandeep|sandy_gaonkar@yahoo.com|||||||||||UkojH5TS';                                              
    var hashString_1 = `${this.state.key}|${this.state.txnid}|${this.state.amount}|${this.state.productinfo}|${this.state.firstname}|${this.state.email}|||||||||||${this.state.salt}`;                                              
    const shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update(hashString_1);
    const hash = shaObj.getHash("HEX");
    this.setState ( {
      //Payu  Fields Start
      surl:"http://mymarathalagna.com/success.php",
      furl:"http://mymarathalagna.com/success.php",
      
      // surl:"https://apiplayground-response.herokuapp.com/",
      // furl:"https://apiplayground-response.herokuapp.com/",
      // surl:"http://mymarathalagna.com/success.php",
      // furl:"http://mymarathalagna.com/success.php",      
      hashCode : hash});
      
  }
      render() {
      
        return (
        <div>
       <TopBarComponents/>
      <div>
      <section className="profile-page py-4">
	<div className="container">
	<div className="row">
			
					<h2 >Payment Form</h2>
		
						
<form action={this.state.baseURL} method='post'>
        <Row>	
          
         
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name" className="mb-1">Membership</label>
          <select name="productinfo" id="productinfo" value={this.state.productinfo}  onChange={(e)=>this.calcHash(e)} >
            <option value="Select Plan">Select Plan</option>
            <option value="basic">Basic Plan</option>
            <option value="gold">Gold Plan</option>
          </select>
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Amount</label>
          <input type="text" id="amount" name="amount"  className="form-text required"  value={this.state.amount} onChange={(e)=>this.calcHash(e)} />

          </div>
          </Col>

          <Col></Col>
      
         
        </Row>
		
        <Row>	
          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Name</label>
          <input type="text" id="firstname" name="firstname" className="form-text required" value={this.state.firstname} onChange={(e)=>this.calcHash(e)}   />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name" className="mb-1">Email Address</label>
          <input type="text" id="email" name="email" className="form-text required" value={this.state.email} onChange={(e)=>this.calcHash(e)}   />
          </div>
          </Col>

          <Col>
          <div className="form-group">
          <label htmlFor="edit-name">Phone Number</label>
          <input type="text" id="phone" name="phone" className="form-text required" value={this.state.phone} onChange={(e)=>this.calcHash(e)}  />
          </div>
          </Col>
      
         
        </Row>
						
						<Row>
							<Col>
							<div className="form-group">
              <input type="hidden"  name="txnid"value={this.state.txnid} onChange={(e)=>this.calcHash(e)} />
<input type="hidden"  name="key" value={this.state.key} onChange={(e)=>this.calcHash(e)} />
<input type="hidden"  name="surl" value={this.state.surl} onChange={(e)=>this.calcHash(e)}  />
<input type="hidden"  name="furl" value={this.state.furl} onChange={(e)=>this.calcHash(e)}  />
<input type="hidden" name="hash" value={this.state.hashCode} onChange={(e)=>this.calcHash(e)}  />
							<button id="btnLogin" type="submit">Pay Now</button>
							</div>
							</Col>
							
						</Row>
						
					
						
						
					</form>
					
		</div>
	</div>
</section>
			   

      </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default PaymentComponent;