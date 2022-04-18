import React from 'react';
import { Carousel } from 'react-bootstrap';
import Resources from '../Resources/Resources';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ height: '700px'}}
                        className="d-block w-100 img-fluid opacity-75"
                        src="https://www.jodymichael.com/wp-content/uploads/2017/10/Janet_Mesic_Mackie-jodymichael-107-Edit-e1510080254192.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h1 className='fw-bold'>Jody Michael</h1>
                        <p>I believe in you and your capacity to transform your leadership, career and life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '700px' }}
                        className="d-block w-100 img-fluid opacity-75"
                        src="https://www.jodymichael.com/wp-content/uploads/2017/10/Janet_Mesic_Mackie-jodymichael-018-Edit-e1510079295749.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='mb-5'>
                        <h1 className='fw-bold'>Jody Michael</h1>
                        <p>I believe in you and your capacity to transform your leadership, career and life</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <Resources></Resources>
        </div>
    );
};

export default Home;