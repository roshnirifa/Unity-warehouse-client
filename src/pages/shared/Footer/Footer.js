import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className='footer'>
            <div class="d-flex flex-column justify-content-around align-items-center">
                <div className='icon mb-4'>
                    <a href="https://www.facebook.com/"><FaFacebook /></a>
                    <a href="https://twitter.com/?lang=en"><FaTwitter /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://www.youtube.com/"><FaYoutube /></a>
                </div>
                <div >
                    <samll>All right reserved to Unity WareHouse</samll>
                    <p className='text-center' ><small>copyright @{(new Date().getFullYear())} </small></p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;