import React from 'react';
import Navber from '../Navber/Navber'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
            <Navber></Navber>
            
            <div className='min-h-[calc(100vh-274px)]'>
            <Outlet></Outlet>
            </div>
            </div>
            <div >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;