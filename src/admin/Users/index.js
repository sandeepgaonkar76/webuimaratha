import React, { Component, useEffect, useState } from 'react';
import { apiEndPoint } from '../../constants/menu';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AddTable from './components/AddTable';
import Pagination from './components/Pagination';
import UserTable from './components/UserTable';
import './components/UserTable.css'
function Users(){
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}${apiEndPoint.memberList}`)
        .then(function(res) {
            return res.json();
        }).then((json)=> {
            setUserList(json)
        });
    },[])
        return (
            <div class="wrapper">
                <Header/>
                <Menu/>
                <div>
                    <div className="content-wrapper">   
                        <h1 class="text-center">Member List</h1>
                        <AddTable/>
                        <UserTable userList={userList}/>
                        <Pagination/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default Users;