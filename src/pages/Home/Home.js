import React from 'react';
import Banner from './Banner';
import CatagorySection from './CatagorySection';
import '../Home/Home.css';
import Trusted from './Trusted';
import SamilarProduct from './SamilarProduct';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <CatagorySection></CatagorySection>
            <Trusted></Trusted>
            <SamilarProduct></SamilarProduct>
        </>
    );
};

export default Home;