import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center my-4'>
                <div style={{ height: '3px' }} className='bg-dark w-100'></div>
                <div><span className='mx-2 fw-bold'>Or</span></div>
                <div style={{ height: '3px' }} className='bg-dark w-100'></div>
            </div>
            <div>
                <button className='btn btn-dark text-white w-50 d-block mx-auto mb-4 p-2 fs-5 fw-light'>Google Sign In</button>
                <button className='btn btn-dark text-white w-50 d-block mx-auto mb-4 p-2 fs-5 fw-light'>FaceBook Sign In</button>
                <button className='btn btn-dark text-white w-50 d-block mx-auto p-2 fs-5 fw-light'>Github Sign In</button>
            </div>
        </div>

    );
};

export default SocialLogin;