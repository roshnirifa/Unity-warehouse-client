import React, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
;



const Register = () => {

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

    }
    const navigateSignUp = () => {
        navigate('/login');

    }

    return (
        <div className='login p-5'>
            <div className='mx-auto login-container my-4'>
                <h2 className='text-center mt-3 text-primary'>Please SignUp!!!!!</h2>
                <Form onSubmit={handleSubmit} className=' m-5'>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" required />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p className='text-danger'></p>
                    <div className='text-center'>
                        <button className='btn btn-primary w-100'>Register</button>
                    </div>

                    <p className='mt-4 text-danger fw-bold' >Already have an account? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Login</span></p>


                </Form>

            </div>

        </div>
    );
};

export default Register;