import React from 'react';

const About = () => {
    return (
        <div style={{minHeight: "400px"}} className='container text-white d-flex my-4 py-4 align-items-center gap-4'>
            <div className='col-lg-6'>
                <h3 className='fw-light'>Hi, I'm Muhaiminul Islam Himel</h3>
                <h2>Goals That I Wanna Achive.</h2>
                <p className='fw-light mt-3'>I'm on my final year of completing Diploma in Computer Technology from Sylhet Polytechnic Institute.</p>
                <p className='fw-light mt-3'>I started my web development journey with PHERO web development course and I'm loving it.</p>
                <p className='fw-light mt-3'>My Next Goals in life to complete the course and spend more time on React. After finishing this course I will start applying for jobs. And have plans to move forward in this programming journey.</p>
            </div>
            <div className='col-lg-6'> 
                <img className='img-fluid' src="https://media-exp1.licdn.com/dms/image/C5603AQEI8zveUbevvQ/profile-displayphoto-shrink_800_800/0/1646662961493?e=1655942400&v=beta&t=RssUISln0TpICpWNBnbTZKRScsCuoSH4EollT3Zdgfs" alt="" />
            </div>
        </div>
    );
};

export default About;