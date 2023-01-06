import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shered/Footer';
import Header from '../shered/Header';

const Main = () => {
    return (
        <>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default Main;