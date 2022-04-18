import React from 'react';

const Resources = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5 text-white fw-light border p-4'>Helpful Resources</h1>
            <div className='row text-white'>
                <div className='col-lg-4'>
                    <div>
                        <img style={{height : "220px"}} className='img-fluid' src="https://www.jodymichael.com/wp-content/uploads/2019/05/on-top-600x360.jpg" alt="" />
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-light'>LEADERSHIP</h4>
                        <h2>What is an Executive Coach?</h2>
                        <p className='fw-light'>During some point in your career, there may be an opportunity to consider hiring an executive coach. Whether you seek one out on your own, or your company recommends partnering with a coach, you likely have questions about the process.</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div>
                        <img style={{height : "220px"}} className='img-fluid' src="https://www.jodymichael.com/wp-content/uploads/2018/05/180880402MicrohabitsBlogUpdateFeatured.jpg" alt="" />
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-light'>CAREER, HEALTH, LEADERSHIP, LIFE</h4>
                        <h2>Microhabits: Small-but-Mighty Agents of Change</h2>
                        <p className='fw-light'>“The man who moves a mountain begins by carrying away small stones.” – Confucius You want big results. Why bother with small stones?</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div>
                        <img style={{height : "220px"}} className='img-fluid' src="https://www.jodymichael.com/wp-content/uploads/2016/02/interview-blunder.jpg" alt="" />
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-light'>CAREER</h4>
                        <h2>How to Avoid the Top 9 Interview Blunders</h2>
                        <p className='fw-light'>Looking for a job? Welcome to the club — and it’s a competitive one. The average corporate job opening attracts 250 candidates, with four to six of these applicants getting a call for an interview and one person receiving a job offer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;