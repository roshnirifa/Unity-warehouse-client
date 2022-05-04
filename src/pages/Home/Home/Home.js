import React from 'react';

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

        </div>
    );
};

export default Home;