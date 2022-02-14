import React, { Component } from 'react';
import HeaderComponents from '../HeaderComponents';
import HomeSliderComponents from '../HomeSliderComponents';
import HomeAboutUsComponents from '../HomeAboutUsComponents';
import FeaturedBridesComponents from '../FeaturedBridesComponents';
import RealWeddingsComponents from  '../RealWeddingsComponents';
import FindVendorComponents from '../FindVendorComponents';
import FooterComponents from '../FooterComponents';
import LatestEventsModalComponents from '../latestevents/LatestEventsModalComponents';
class HomePageComponent extends Component{
    render() {
        return (
        <div>
        <HeaderComponents/>
        <HomeSliderComponents/>
        <HomeAboutUsComponents/>      
      {/* <FeaturedBridesComponents/>
        <RealWeddingsComponents/> 
        <FindVendorComponents/>
        <LatestEventsModalComponents/>*/}
        <FooterComponents/>
        </div>)
        
    }

     
      
}
export default HomePageComponent;