import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    
      if(error){
          console.log(error.message);
          setErrorMessage(error?.message)
      }
      if(error1){
          console.log(error1);
      }
      if(user){
          console.log(user);
          navigate('/')
      }

    const handleUserSignUp = async (event) => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const name = event.target.name.value;
        console.log(email, password, confirmPassword, name);
        
        
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password)
        }
        else{
            setErrorMessage('Your password mismatched')
        }
        await updateProfile({displayName: name})
        event.preventDefault()
    }

    return (
        <div className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form onSubmit={handleUserSignUp}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="name" type="text" placeholder="Your Name" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="email" type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="password" type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='bg-dark b-none text-white p-3' name="confirmPassword" type="password" placeholder="Confirm Password" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    <p>Already Have An Account?  <span className='text-info btn p-0 mb-1' onClick={()=> navigate('/login')}>Login Here</span></p>
                </Form.Group>

                <p className='text-white'>{errorMessage}</p>

                <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                    Sign Up
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default SignUp;