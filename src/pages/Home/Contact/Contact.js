import React from 'react';
import img from './fashion-style-big_Big.webp';
import './Contact.css'
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container mb-5 w-75'>
            <h1 className='text-center  my-5' >Get In Touch</h1>
            <div className='d-flex justify-content-evenly contact-container'>
                <div className='img'  >
                    <img src={img} alt="" />
                </div>
                <div className='form' >
                    <Form className='form-gorup'>
                        <label htmlFor="">Name:</label> <br />
                        <input type="text" placeholder='name' /> <br />
                        <label htmlFor="">Email:</label> <br />
                        <input type="email" placeholder='email' /> <br />
                        <label htmlFor="">Phone:</label> <br />
                        <input type="number" placeholder='Phone Number' /> <br />
                        <label htmlFor="">Description:</label> <br />
                        <input type="textarea" style={{ height: "100px" }} />
                    </Form>

                </div>
            </div>

        </div>
    );
};

export default Contact;