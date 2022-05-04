import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import './Login.css'


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlepassBlur = event => {
        setPass(event.target.value);
    }
    if (user) {
        navigate('/home')
    }

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(email, pass)

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
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handlepassBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

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