import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-15 py-4 md:py-8 lg:py-12'>
                <Outlet />
            </div>
            <Footer /> 
        </div>
    );
};

export default MainLayout;