import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebse.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation()
    const navigate = useNavigate();
    let errorMessage;
    
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const from = location.state?.from?.pathname || "/";
    
    if(user) {
        navigate(from, {replace: true})
    }
    
    if(error) {
        errorMessage = <p className='text-white'>Error : {error?.message}</p>
    }

    if(loading){
        return <Loading></Loading>
    }
    
    // handle Login with Email and Password

    const handleLoginWithEmailAndPassword = event => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        event.preventDefault()
    }


    // handle reset password

    const handleResetPassword = async () =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email)
            await toast('Sent Mail')
        }
        else{
            await toast('Please Enter Your Email Address')
        }
    }
    return (
        <div style={{minHeight: "400px"}} className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form onSubmit={handleLoginWithEmailAndPassword}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className='bg-dark b-none text-white p-3' name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className='bg-dark b-none text-white p-3' name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <p>New User?  <span className='text-info btn p-0 mb-1' onClick={() => navigate('/signup')}> Create A New Account.</span></p>
                    <p>Forget Password?  <span onClick={handleResetPassword} className='text-info btn p-0 mb-1'> Reset Password.</span></p>
                </Form.Group>

                {errorMessage}

                <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 fw-light d-block' variant="primary" type="submit">
                    Login
                </Button>

                <ToastContainer />

                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;