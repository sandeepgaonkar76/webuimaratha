import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import FooterComponents from '../FooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';
class FailureComponent extends Component{
   
    render() {
        return (
        <div>
       <HeaderComponents/>
      <div>
      <React.Fragment>
                   <div className="paymentWrapper">
                    <Form action="admission" method="post">
                      <Container>
                        <Row>
                          <Col sm={6}>
                            <Form.Group controlId="paymentWrapper.firstname">
                             <Form.Label>First Name</Form.Label>
                              <Form.Control type="text" placeholder="First Name" name="firstname" />
                            </Form.Group>   
                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>Phone No</Form.Label>
                              <Form.Control type="number" placeholder="Phone No" name='phone' />
                            </Form.Group>
                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>Product Info</Form.Label>
                              <Form.Control type="text" placeholder="Product Info" name='productinfo' />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                           <Form.Group controlId="admissionForm.lastname">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group controlId="admissionForm.email">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email" name='email' />
                            </Form.Group>
                            <Form.Group controlId="admissionForm.phoneno">
                              <Form.Label>Amount</Form.Label>
                              <Form.Control type="number" placeholder="Amount" name='amount' />
                            </Form.Group>                            
                             <Button variant="primary" type="submit">Submit </Button>
                          </Col> 
                        </Row>
                      </Container>
                    </Form>
                  </div>
      </React.Fragment>    
      <button id="btnLogin" onClick={this.OnClickPay}>Pay Now</button>
      </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default FailureComponent;