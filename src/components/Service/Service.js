import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    console.log(service)
    const { name, price, img, description } = service;
    return (
        <div className='my-4'>
            <Card className="bg-dark text-white">
                <Card.Img className='opacity-25' src={img} alt="Card image" />
                <Card.ImgOverlay className='text-center row align-items-center w-50 mx-auto'>
                    <Card.Title className='fs-1'>{name}</Card.Title>
                    <Card.Text className='fs-4'>{description}</Card.Text>
                    <Card.Text className='fw-bold text-gray fs-2'>${price}<span><small className='fs-6 text-muted'>/30 min chat.</small></span></Card.Text>
                    <button className='btn btn-secondary'>Book Now</button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Service;