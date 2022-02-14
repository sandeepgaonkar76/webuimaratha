import React, {useState,useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Axios from 'axios';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';


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
    const {key,txnid,amount,productinfo,firstname,email,salt}=this.state;
    Axios.post("http://localhost:8080/hash",{key,txnid,amount,productinfo,firstname,email,salt})
    .then(res=>{
      this.setState({hash:res.data.hash});
    });
  }

    render() {
      
        return (
        <div>
       <HeaderComponents/>
      <div>
     
      <React.Fragment>
                   <div className="paymentWrapper">
                    <Form action={this.baseURL} method="post">
                      <Container>
                        <Row>
                          <Col sm={6}>
                          <Form.Group controlId="paymentWrapper.keu">
                             <Form.Label>Key</Form.Label>
                              <Form.Control type="text" placeholder="Key" name="key" value={this.state.key} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>   
                            <Form.Group controlId="paymentWrapper.keu">
                             <Form.Label>txnid</Form.Label>
                              <Form.Control type="text" placeholder="txnid" name="txnid" value={this.state.txnid} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>   
                            <Form.Group controlId="paymentWrapper.keu">
                             <Form.Label>amount</Form.Label>
                              <Form.Control type="text" placeholder="amount" name="amount" value={this.state.amount} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>   

                            <Form.Group controlId="paymentWrapper.keu"> 
                             <Form.Label>amount</Form.Label>
                              <Form.Control type="text" placeholder="amount" name="amount" value={this.state.amount} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>   
                            <Form.Group controlId="paymentWrapper.firstname">
                             <Form.Label>First Name</Form.Label>
                              <Form.Control type="text" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>   
                            
                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email" name='email' value={this.state.email} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>

                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>Phone No</Form.Label>
                              <Form.Control type="number" placeholder="Phone No" name='phone' value={this.state.phone} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>


                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>Product Info</Form.Label>
                              <Form.Control type="text" placeholder="Product Info" name='productinfo'  value={this.state.productinfo} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                           <Form.Group controlId="admissionForm.lastname">
                              <Form.Label>surl</Form.Label>
                              <Form.Control type="text" placeholder="surl" value={this.state.surl} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>

                            <Form.Group controlId="admissionForm.lastname">
                              <Form.Label>furl</Form.Label>
                              <Form.Control type="text" placeholder="furl" value={this.state.furl} onChange={(e)=>this.calcHash(e)} />
                            </Form.Group>

                            <Form.Group controlId="admissionForm.email">
                              <Form.Label>Service Provider</Form.Label>
                              <Form.Control type="Service Provider" placeholder="service_provider" name='service_provider' value={this.state.serviceProvider} readOnly />
                            </Form.Group>

                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>HASH</Form.Label>
                              <Form.Control type="text" placeholder="hash"  name='hash'  value={this.state.hash} readOnly />
                            </Form.Group>                            
                             <Button variant="primary" type="submit">Pay </Button>
                          </Col> 
                        </Row>
                      </Container>
                    </Form>
                  </div>
      </React.Fragment>    
      {/* <button id="btnLogin" onClick={this.OnClickPay}>Pay Now</button> */}
      </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default PaymentComponent;