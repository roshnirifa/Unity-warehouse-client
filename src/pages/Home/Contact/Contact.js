import React from 'react';
import img from './fashion-style-big_Big.webp';
import './Contact.css'
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container mb-5'>
            <h1 className='text-center  my-5' >Get In Touch</h1>
            <div className='d-flex justify-content-around contact-container'>
                <div className='img'  >
                    <img src={img} alt="" />
                </div>
                <div className='form' >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>name</Form.Label>
                            <Form.Control className='input' type="text" placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>email</Form.Label>
                            <Form.Control className='input' type="email" placeholder="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>phone</Form.Label>
                            <Form.Control className='input' type="number" placeholder="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>description</Form.Label>
                            <Form.Control className='input' as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                </div>
            </div>

        </div>
    );
};

export default Contact;