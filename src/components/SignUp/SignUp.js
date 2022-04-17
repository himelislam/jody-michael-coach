import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init'
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
      if(error){
          console.log(error.message);
      }
      if(user){
          console.log(user);
      }

    const handleUserSignUp = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(email, password, confirmPassword);

        createUserWithEmailAndPassword(email, password)
        event.preventDefault()
    }

    return (
        <div className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form onSubmit={handleUserSignUp}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="confirmPassword" type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    <p>Already Have An Account?  <span className='text-info btn p-0 mb-1' onClick={()=> navigate('/login')}>Login Here</span></p>
                </Form.Group>

                <Button className='btn btn-success w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                    Sign Up
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default SignUp;