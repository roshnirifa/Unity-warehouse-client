import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

    }

    const navigateSignUp = () => {
        navigate('/register');
    }
    return (
        <div className='login p-5'>
            <div className='mx-auto login-container '>
                <div>
                    <h2 className='text-center mt-5 text-primary'>Please login!!!!!</h2>
                </div>
                <Form onSubmit={handleSubmit} className='m-5'>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" ref={passRef} required />
                    </Form.Group>

                    <div className='text-center'>
                        <button className='btn btn-primary w-100'>Login</button>
                    </div>
                    <p className='mt-4  fw-bold'>New to Clothes Werehouse? <span className='text-primary ' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Register</span></p>


                    <p className='mt-4  fw-bold'>Forget Password? <span className='text-primary' style={{ cursor: 'pointer' }}>Reset Password</span></p>
                </Form>
            </div>
        </div>

    );
};

export default Login;