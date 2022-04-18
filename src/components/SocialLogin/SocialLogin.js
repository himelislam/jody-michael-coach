import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebse.init';
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    let errorMessage;
    const navigate = useNavigate();

    if(loading1 || loading2){
        return <Loading></Loading>
    }

    if(user1 || user2){
        navigate('/')
    }
    if(error1 || error2){
        errorMessage = <p className='text-white text-center'>Error: {error1?.message} {error2?.message}</p>
    }
    
    const handleGoogleSignIn = (event) => {
        signInWithGoogle();
        event.preventDefault()
    }

    const handleGithubSignIn = event => {
        signInWithGithub()
        event.preventDefault()
    }

    return (
        <div>
            <div className='d-flex align-items-center my-4'>
                <div style={{ height: '3px' }} className='bg-dark w-100'></div>
                <div><span className='mx-2 fw-bold'>Or</span></div>
                <div style={{ height: '3px' }} className='bg-dark w-100'></div>
            </div>
            {errorMessage}
            <div>
                <button onClick={handleGoogleSignIn} className='btn btn-dark text-white w-50 d-block mx-auto mb-3 p-2 fs-5 fw-light'>Google Sign In</button>
                <button className='btn btn-dark text-white w-50 d-block mx-auto mb-3 p-2 fs-5 fw-light'>Facebook Sign In</button>
                <button onClick={handleGithubSignIn} className='btn btn-dark text-white w-50 d-block mx-auto p-2 fs-5 fw-light'>Github Sign In</button>
            </div>
        </div>

    );
};

export default SocialLogin;