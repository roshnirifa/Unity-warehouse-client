import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className='footer'>
            <div class="d-flex justify-content-around align-items-center">

                <div>
                    <p>Developed by Roshni Rifa</p>
                    <p ><small>copyright @{(new Date().getFullYear())} </small></p>
                </div>


                <div className='icon'>
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaYoutube /></a>


                </div>
            </div>
        </footer>

    );
};

export default Footer;