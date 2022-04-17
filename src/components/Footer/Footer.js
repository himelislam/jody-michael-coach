import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='text-center py-5 bg-secondary'>
            <span className='fw-light text-white'>All right reserved @Himel Islam</span>
            <p><small className='fw-light text-white'>Copyright@{year}</small></p>
        </div>
    );
};

export default Footer;