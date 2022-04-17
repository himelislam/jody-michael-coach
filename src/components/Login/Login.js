import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    <p>New User?  <span className='text-info btn p-0 mb-1' onClick={()=> navigate('/signup')}> Create A New Account.</span></p>
                    <p>Forget Password?  <span className='text-info btn p-0 mb-1' onClick={()=> navigate('/signup')}> Reset Password.</span></p>
                </Form.Group>
                <Button className='btn btn-success w-50 mx-auto p-2 fs-5 fw-light d-block' variant="primary" type="submit">
                    Login
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;