import React, { Component } from 'react';
//import HeaderComponents from '../HeaderComponents';
import HeaderComponents from '../user/UserHeaderComponents';
import TopBarComponents from '../user/TopBarComponents';
import FooterComponents from '../user/UserFooterComponents';
//import FooterComponents from '../FooterComponents';
import {Container, Col, Row,Button, Form } from 'react-bootstrap';
class SuccessComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {reponsedata: []};
  }
   componentDidMount()
{
  const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('data');

// console.log(id); // 55 test null
this.setState({reponsedata:JSON.parse(id)});

// let userid="MML(2715-0)1061";
//   userid=userid.split('(');
//    userid=userid[1].split('-');
//   userid=userid[0];
// let amount="500";
// console.log(userid);
setTimeout(() => {   this.updatepayment(); }, 2000);
}

updatepayment(){
  let userid=this.state.reponsedata.txnid;
   userid=userid.split('(');
  
   userid=userid[1].split('-');
   //alert(userid[1]);
   
   userid=userid[0];
 let amount=this.state.reponsedata.amount;
 let planID = 0
 if (this.state.reponsedata.productinfo == 'basic')
 {
    planID =1;
 }else if (this.state.reponsedata.productinfo == 'gold')
 {
    planID =2;
 }
 //alert(planID);   
 //alert(userid);
 //alert(amount);
// let userid="MML(2715-0)1061";
//   userid=userid.split('(');
//    userid=userid[1].split('-');
//   userid=userid[0];
// let amount="500";

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },			
    body: JSON.stringify({ memberid: parseInt(userid),
      planID: planID,
      amount: parseInt(amount),
      active: 1})
  };
  fetch(`${process.env.REACT_APP_API_KEY}Member/UpdatePaidMember`,requestOptions)
    .then(response => response.json())
    .then(
    data => {
      console.log(data);
    }        
    );
}
    render() {
        return (
        <div>
      {/** <HeaderComponents/> */}
       <TopBarComponents/>
       <div className="clearfix">&nbsp;</div>
      <div> 
        <div className="container">
        <div className="row text-center">
        <div className="col"><h2>Thank You for your payment.</h2></div>
        </div>
        <div className="row text-center">
        <div className="col"><h4 style={{fontSize:"20px"}}>Your payment details are:</h4 ></div>
        </div>
        <div className="row text-center">
     <div className="col"><b>Trasaction id: </b>{this.state.reponsedata.mihpayid}</div>
     <div className="col"><b>Mode: </b>{this.state.reponsedata.mode}</div>
     </div>
     <div className="row text-center">
     <div className="col"><b>Status: </b>{this.state.reponsedata.status}</div>
     <div className="col"><b>Txnid: </b>{this.state.reponsedata.txnid}</div>
     </div>
     <div className="row text-center">
     <div className="col"><b>Amount: </b>{this.state.reponsedata.amount}</div>
     <div className="col"><b>Product Info: </b>{this.state.reponsedata.productinfo}</div>
     </div>
        </div>  
  
    
      </div>
      <div className="clearfix">&nbsp;</div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default SuccessComponent;