import React, { useEffect, useState,Component,Suspense, lazy,useReducer }  from 'react';
import './App.css';
import './style.css';
import HomePageComponents from './components/homepage/HomePageComponents';
import AboutUsPageComponents from './components/AboutUsPageComponents';
import TermsAndConditionsPageComponents from './components/TermsAndConditionsPageComponents';
import PrivacyPolicyPageComponents from './components/PrivacyPolicyPageComponents';
import RefundPolicyPageComponents from './components/RefundPolicyPageComponents';
import ReportMisuseComponent from './components/ReportMisuseComponent';
import QuickViewProfileComponents from './components/profile/QuickViewProfileComponents';
import MembershipComponents from './components/membershipplan/MembershipComponents';
import FaqPageComponents from './components/faqs/FaqPageComponents';
import ContactPageComponents from './components/contact/ContactPageComponents';

import LoginPageComponents from './components/login/LoginPageComponents';
import SignUpPageComponents from './components/signup/SignUpPageComponents';
import SearchPageComponents from './components/user/search/SearchPageComponents';
import SearchResultPageComponents from './components/user/search/SearchResultPageComponents';
import MyProfilePageComponents from './components/user/MyProfilePageComponents';
import FeedbackFormComponents from './components/feedbackform/FeedbackFormComponents';
import ForgotPasswordComponents from './components/forgotpassword/ForgotPasswordComponents';
import DashboardComponents from './components/user/DashboardComponents';
import UserHeaderComponents from './components/user/UserHeaderComponents';
import PaymentPageComponent from './components/user/PaymentPageComponent';

import BlockedProfilePageComponents from './components/user/BlockedProfilePageComponents';
import EditMyProfilePageComponents from './components/user/EditMyProfilePageComponents';


import MyProfileViewdbyPageComponents from './components/user/MyProfileViewdbyPageComponents';


import MobileOtpPageComponents from './components/signup/MobileOtpPageComponents';


import ProfilePageComponents from './components/profile/ProfilePageComponents';
import SuccessStoryComponents from './components/SuccessStoryComponents';
import MuhuratComponents from './components/MuhuratComponents';


import {
  BrowserRouter as Router,
  Switch,Redirect,
  Route,useHistory,withRouter,
  Link
} from "react-router-dom";
import HomeSliderComponents from './components/HomeSliderComponents';
import DetailsComponent from './components/DetailsComponent';
import UserFormComponent from './components/UserFormComponent';
import HeaderComponents from './components/HeaderComponents';
// import PaymentComponent from './components/payment/PaymentComponent';
import PaymentComponent from './components/user/payment/PaymentComponent';
import Payment3Component from './components/payment/Payment3Component';
import Payment4Component from './components/payment/Payment4Component';
import MyProfileInterestedPageComponents from './components/user/MyProfileInterestedPageComponents';
import TawkChatComponent from './components/TawkChatComponent';
import SuccessComponent from './components/payment/SuccessComponent';
import FailureComponent from './components/payment/FailureComponent';
import response from './components/payment/response';
import AdmissionComponent from './components/AdmissionComponent';
import ChangePasswordComponents from './components/user/ChangePasswordComponents';
import DisableMyProfileComponents from './components/user/DisableMyProfileComponents';
import Admin from './admin';
import Users from './admin/Users';
import { route } from './constants/menu';
function App(props) {

  

  return (
    <Router>
    <div className="App">
   {/* <TawkChatComponent/>  */}  
    </div>
      <Switch>
        <Route exact path="/" ><HomePageComponents/></Route>
        <Route path="/about"><AboutUsPageComponents/></Route> 
        <Route path="/terms-and-conditions"><TermsAndConditionsPageComponents/></Route>         
        <Route path="/privacy-policy"><PrivacyPolicyPageComponents/></Route>  
        <Route path="/membership-plan"><MembershipComponents/></Route>

        <Route path="/header" component={HeaderComponents}></Route>   
        
        <Route path="/faq"><FaqPageComponents/></Route>
        
        <Route path="/contact"><ContactPageComponents/></Route>
        <Route path="/login" component={LoginPageComponents} />
        <Route path="/signup" component={SignUpPageComponents} />
        
        <Route path="/forgotpassword"><ForgotPasswordComponents/></Route>
        <Route path="/feedback"><FeedbackFormComponents/></Route>
        <Route path="/mobile-verification" component={MobileOtpPageComponents}></Route>   
        <Route component={UserFormComponent} path="/user" exact={true} />
        <Route component={DetailsComponent} path="/details" />
        <Route component={RefundPolicyPageComponents} path="/refund-policy" />
        <Route component={ReportMisuseComponent} path="/report-misuse" />
        <Route component={SuccessStoryComponents} path="/success-story" />        
        <Route component={MuhuratComponents} path="/muhurat" />                
        <Route component={QuickViewProfileComponents} path="/profile/:profileid" />
        <Route component={PaymentComponent} path="/payment" />

        {/* dashboard */}
        <Route path="/user/userheader" component={UserHeaderComponents}></Route>   
        <Route path="/user/myprofile" component={MyProfilePageComponents}></Route>
        <Route path="/user/change-password" component={ChangePasswordComponents}></Route>
        <Route path="/user/dashboard" component={DashboardComponents}></Route>   
        <Route path="/user/search" component={SearchPageComponents} />
        <Route path="/user/search-result" component={SearchResultPageComponents}></Route>
        <Route path="/user/my-profile-viewedby" component={MyProfileViewdbyPageComponents}></Route>
        <Route path="/user/my-profile-interested" component={MyProfileInterestedPageComponents}></Route>
        <Route path="/user/disable-my-profile" component={DisableMyProfileComponents}></Route>
        <Route path="/user/mypayments" component={PaymentPageComponent}></Route>
        <Route path="/user/pay-now" component={PaymentComponent}></Route>
        <Route path="/success" component={SuccessComponent}></Route>
        <Route path="/failure" component={FailureComponent}></Route>
        <Route path="/response" component={response}></Route>
        
        <Route path="/payment2" component={PaymentComponent}></Route>
        
        <Route path="/payment3" component={Payment3Component}></Route>
        <Route path="/payment4" component={Payment4Component}></Route>
        
        <Route path="/admission" component={AdmissionComponent}></Route>

        payRoutes.post('/payment/payumoney',payController.payUMoneyPayment);
        {/* dashboard */}
        
        <Route path="/admin" component={Admin}/>
        <Route path={route.adminUser} component={Users}/>
        <Route component={EditMyProfilePageComponents } path="user/edit-my-profile" />       
        
      </Switch> 
     </Router>
  );
}
export default App;
