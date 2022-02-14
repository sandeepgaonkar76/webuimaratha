import React, {useState,useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Axios from 'axios';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';

import jsSHA from 'jssha';
class Payment4Component extends Component{
  
  handlePaymentSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=81fupk4qlpgk7rotv2bipp1ur1");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("key", "oZ7oo9");
    urlencoded.append("txnid", "06ClEGwmJ8OsKl");
    urlencoded.append("amount", "10.00");
    urlencoded.append("firstname", "PayU User");
    urlencoded.append("email", "test@gmail.com");
    urlencoded.append("phone", "9876543210");
    urlencoded.append("productinfo", "iPhone");
    urlencoded.append("surl", "https://apiplayground-response.herokuapp.com/");
    urlencoded.append("furl", "https://apiplayground-response.herokuapp.com/");
    urlencoded.append("hash", "90df9597d90e976b47e76ab97639e9dca5dcd8c2b778cdad683f31eaf45ede47d6da0d1841e7681a4128410064967dd9802086601ae8995611c94b83fa3b6403");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://test.payu.in/_payment", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  
    render() {
      
        return (
        <div>
       <HeaderComponents/>
      <div>
      <form id="payment_form"  onSubmit={this.handlePaymentSubmit} className="php-email-form">
     
      <button id="btnLogin" type="submit">Pay Now</button>              
     </form> 
      
      </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default Payment4Component;