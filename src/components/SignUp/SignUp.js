import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init'
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {
    const [createUserWithEmailAndPassword, user, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    if (user) {
        navigate('/')
        console.log(user);
    }
    
    const handleUserSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(email, password, confirmPassword, name);


        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
            console.log('update profile');
        }
        else {
            setErrorMessage('Your password mismatched')
        }
    }

    return (
        <div style={{ minHeight: "400px" }} className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form onSubmit={handleUserSignUp}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control className='bg-dark b-none text-white p-3' name="name" type="text" placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control className='bg-dark b-none text-white p-3' name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className='bg-dark b-none text-white p-3' name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className='bg-dark b-none text-white p-3' name="confirmPassword" type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <p>Already Have An Account?  <span className='text-info btn p-0 mb-1' onClick={() => navigate('/login')}>Login Here</span></p>
                </Form.Group>

                <p className='text-white'>{errorMessage} {error?.message} {error1?.message}</p>

                <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                    Sign Up
                </Button>

                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default SignUp;