import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class DetailsComponent extends Component {
    constructor(props) {
		super(props);	
		this.state = {
      phone:"",otpsessionid:""
		};
	  }
    render() {
        const { phone,otpsessionid } = (this.props.location && this.props.location.state) || {};
        return (<>
        <div>
      <NavLink to="/user" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {phone}
        </div>
        <div>
          <strong>Email:</strong> {otpsessionid}
        </div>
        {/* <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div> */}
      </div>
    </div>
        </>);
    }
  }
  export default DetailsComponent;