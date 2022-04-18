import React from 'react';

const About = () => {
    return (
        <div style={{minHeight: "400px"}} className='container text-white d-flex my-4 py-4'>
            <div className='col-lg-6'>
                <h3 className='fw-light'>MESSAGE FROM JODY</h3>
                <h2>Can People Really Change?</h2>
                <p className='fw-light mt-3'>At Jody Michael, I believe in you and your capacity to transform your leadership, career and life.</p>
                <p className='fw-light mt-3'>Here’s what I belive : Easy decisions rarely move the needle. Superficial tactics only drive temporary solutions. Sustainable change requires keen awareness and targeted strategies to build effortless execution over time.</p>
                <p className='fw-light mt-3'>That’s why coaching can be the catalyst for profound change. Increased performance. Measurable results. Immediate impact.</p>
            </div>
            <div className='col-lg-6'> 
                <img className='img-fluid' src="https://www.jodymichael.com/wp-content/uploads/2018/01/JodyThumbnailBlack1.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;