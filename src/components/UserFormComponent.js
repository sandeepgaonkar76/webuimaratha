import React, { useState,Component } from "react";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter, Route,withRouter,Redirect,useHistory  } from 'react-router-dom';
class UserFormComponent extends Component {
  constructor(props) {
  super(props);	
  this.state = {
          username:"",
          email:"",
          city:"",
          phone:"",
  };
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/mobile-verification',this.state);    
  }
  //state 
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  render() {
      const { username, email, city, phone } = (this.props.location && this.props.location.state) || {};
      return (<>
      <div>
      <h1>Registration Form</h1>
      <Form className="register-form" onSubmit={this.handleOnSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div></>);
  }
}
export default withRouter(UserFormComponent);

