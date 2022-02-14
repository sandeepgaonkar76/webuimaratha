import React, { Component } from 'react';
import UserHeaderComponents from './UserHeaderComponents';
import SideBarComponents from './SideBarComponents';
import UserFooterComponents from './UserFooterComponents';
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../../style.css';
import HomePageComponents from '../homepage/HomePageComponents';
import RecentlyJoinedPageComponents from './RecentlyJoinedPageComponents';

import { BrowserRouter, Route,withRouter,Redirect,useHistory  } from 'react-router-dom';
class DashboardComponents extends Component{

	constructor(props,context) {
		super(props,context);	
		this.state = {
		  show: false,
		  input: {},
		  errors: {},
		  token:"",
		  sessionid:'',
		  username:'',
		  userID:'',
		};
		this.handleChange = this.handleChange.bind(this);	
	  }
	  redirectTo = (e) => {
		const { history } = this.props;
		history.push('/');
		}
	  componentDidMount()
	  {
		  
		//   if(this.state.sessionid==''){this.redirectTo();}
		//if(this.props.location.state.sessionid==""||this.props.location.state.sessionid==undefined||!this.props.location.state.sessionid ) {this.redirectTo();}
	  }
	  handleChange(e){
		this.setState((prevState) => ({
		  ...prevState,
		  [e.target.name]: e.target.value
		}));
	  }
	  
    render() {
		const { history } = this.props;
		const {sessionid,username,} = (this.props.location && this.props.location.state) || {};
        return (
			<>
			<div>
				
       

	   <div className="container-fluid">
  			<div className="row">
			  <SideBarComponents />
			  <main className="col-md-9 ms-sm-auto col-lg-10 p-0">
			  {/* <article>
<section className="about-us-page text-center">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<h2>Dashboard</h2>
			</div>			
		</div>
	</div>
</section>


</article> */}

{/* 1 */}

<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-3">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      <RecentlyJoinedPageComponents/>
      <div className="table-responsive px-3">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
{/* 1 */}

<UserFooterComponents/>
			  </main>
			  </div>
  		</div>	   
     
    
        </div>
		  </>)
        
    }

     
      
}
export default withRouter(DashboardComponents);