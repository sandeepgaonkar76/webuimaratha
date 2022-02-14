import React, {useState,useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Axios from 'axios';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';
class SuccessComponent extends Component{
    constructor(props, context) {
		super(props, context);
		this.state = {
      txnid:"",
      amount:"",
      status:"",
      }
  }
  componentDidMount()
{
Axios.get("http://localhost:3000/getresponse")
.then(res=> {
    this.setState({txnid:res.data.txnid});
    this.setState({amount:res.data.amount});
    this.setState({status:res.data.status});
});
}

    render() {
        const [txnid,amount,staus]=	(this.props.location && this.props.location.state) || {};
        return (
        <div>
       <HeaderComponents/>
      
            <div className="container">
                Tax id:{this.state.txnid}
                <br></br>
                Amount:{this.state.amount}
                <br></br>
                Status:{this.state.status}
                <br></br>
            </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default SuccessComponent;