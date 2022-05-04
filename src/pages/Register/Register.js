import React, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import auth from '../firebase_init.js';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin.js';
import Loading from '../shared/Loading/Loading.js';
;



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleNameBlur = event => {
        setName(event.target.value);

    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlepassBlur = event => {
        setPass(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }
    if (user) {
        console.log("user", user);
    }




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pass !== confirmPass) {
            setError("your password didn't match")
            return;
        }
        if (pass.length < 6) {
            setError("password should be 6 character long");
            return;
        }
        await createUserWithEmailAndPassword(email, pass, confirmPass);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    }
    const navigateSignUp = () => {
        navigate('/login');

    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='login p-5'>
            <div className='mx-auto login-container my-4'>
                <h2 className='text-center mt-3 text-primary'>Please SignUp!!!!!</h2>

                <Form onSubmit={handleSubmit} className=' m-5'>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleNameBlur} type="name" name="name" placeholder="Enter name" required />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handlepassBlur} type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleConfirmPassBlur} type="password" name="confirm-password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <div className='text-center'>
                        <button className='btn btn-primary w-100'>Register</button>
                    </div>


                    <p className='mt-4 text-danger fw-bold' >Already have an account? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Login</span></p>

                    <SocialLogin></SocialLogin>


                </Form>

            </div>

        </div>
    );
};

export default Register;