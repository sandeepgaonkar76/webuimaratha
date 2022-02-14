import React, { Component } from 'react';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function Admin(){
        return (
            <div class="wrapper">
                <Header/>
                <Menu/>
                <DashBoard/>
                <Footer/>
            </div>
        );
}

export default Admin;