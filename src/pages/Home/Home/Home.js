import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import './Home.css'
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;