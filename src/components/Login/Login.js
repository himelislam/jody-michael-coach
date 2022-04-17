import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebse.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();

    if(user1) {
        console.log(user1);
        navigate('/')
    }
    
    if(error1 || error2) {
        console.log(error1.message);
        // console.log(error2.message);
        // const error1 = error.message;
        // setErrorMessage(error1)
    }

    if(sending){
        console.log(sending);
    }
    

    const handleLoginWithEmailAndPassword = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        event.preventDefault()
    }


    // handle reset password
    const handleResetPassword = () =>{
        sendPasswordResetEmail(email)
    }
    return (
        <div className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form onSubmit={handleLoginWithEmailAndPassword}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control onChange={(e) => setEmail(e.target.value)} className='bg-dark b-none text-white p-3' name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    <p>New User?  <span className='text-info btn p-0 mb-1' onClick={() => navigate('/signup')}> Create A New Account.</span></p>
                    <p>Forget Password?  <span onClick={handleResetPassword} className='text-info btn p-0 mb-1'> Reset Password.</span></p>
                </Form.Group>
                <p className='text-white'>{error1?.message} {error2}</p>
                <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 fw-light d-block' variant="primary" type="submit">
                    Login
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;