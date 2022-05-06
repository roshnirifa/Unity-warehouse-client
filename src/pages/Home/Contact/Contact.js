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
                    <Form className='w-75 mx-auto mt-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className='text-center'>
                            <input type="button" className='btn btn-primary w-75 ' value="submit" />
                        </div>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default Contact;