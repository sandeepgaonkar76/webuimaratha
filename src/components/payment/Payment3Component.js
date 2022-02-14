import React, {useState,useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Axios from 'axios';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';

import jsSHA from 'jssha';
class PaymentComponent extends Component{
  constructor(props) {
		super(props);
		this.state = {
      baseURL:"https://test.payu.in/_payment",
      title:"Reacjt Js Checkout",
      key:"oZ7oo9" ,
      salt:"UkojH5TS",
      txnid:"1234",
      amount:"500",
      firstname:"sandeep",
      email:"sandy_gaonkar@yahoo.com",
      phone:"9731230874",
      productinfo:"Basic",
      surl:"localhost:3000/response",
      furl:"localhost:3000/response",
      serviceProvider:"payu_paisa",
      hash:"47fcaef903693d6a20500a1caeb047ab76c64ee7712705bbfd85becea1acccfd257eac826627c8117e8d57a681984467688be3f47b1c5c6a215bb26f42bd42d0",
      }
  }

  calcHash(e){
    console.log(e);
    let name=e.target.name;
    let value=e.target.value;
    if(name=="key")
    {
      this.setState({key:value});
    }

    if(name=="txnid")
    {
      this.setState({txnid:value});
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
      this.setState({productinfo:value});
    }
  }

  componentDidMount()
  {
    var hashString_1 = 'oZ7oo9|1234|500|Basic|sandeep|sandy_gaonkar@yahoo.com|||||BOLT_KIT_NODE_JS||||||UkojH5TS';                                              
    const shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update(hashString_1);
    const hash = shaObj.getHash("HEX");

    this.setState ( {
      //Payu Fields Start
      surl:"http://localhost:3000/response",
      furl:"http://localhost:3000/response",
      hashCode : hash
      
      })
  }

  handlePaymentSubmit = (event) => {
    event.preventDefault();
    console.log("Inside Pay Submit Function handle Submit  !!!!");
    window["launchBOLT"]();
  };
  
    render() {
      
        return (
        <div>
       <HeaderComponents/>
      <div>
      <form id="payment_form" onSubmit={this.handlePaymentSubmit} className="php-email-form">
                
                <input type="text" value={this.state.key} name="udf5" id="key"/>
                <input type="text" value={this.state.salt} name="salt" id="salt"/>
                <input type="text" value={this.state.txnid} name="txnid" id="txnid"/>
                <input type="text" value={this.state.amount} name="amount" id="amount"/>
                <input type="text" value={this.state.productinfo} name="pinfo" id="pinfo"/>
                <input type="text" value={this.state.firstname} name="fname" id="fname"/>
                <input type="text" value={this.state.email} name="email" id="email"/>
                <input type="text" value={this.state.phone} name="mobile" id="mobile"/>
                <input type="text" value={this.state.udf5} name="udf5" id="udf5"/>
                <input type="text" value={this.state.surl} name="surl" id="surl"/>
                <input type="text" value={this.state.hashCode} name="hash" id="hash"/>
      <button id="btnLogin" onClick={this.OnClickPay}>Pay Now</button>              
     </form> 
      
      </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default PaymentComponent;