import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    return (
        <div className='my-4'>
            <Card className="bg-dark text-white">
                <Card.Img style={{minHeight: "400px"}} className='opacity-25' src={img} alt="Card image" />
                <Card.ImgOverlay className='text-center row align-items-center md:w-50 mx-auto'>
                    <Card.Title className='fs-1'>{name}</Card.Title>
                    <Card.Text className='fs-4 fw-light'>{description}</Card.Text>
                    <Card.Text className='fw-bold text-gray fs-2'>${price}<span><small className='fs-6 text-muted'>/30 min chat.</small></span></Card.Text>
                    <button onClick={()=> navigate(`/checkout/${id}`)} className='btn btn-secondary w-50 d-block mx-auto'>Book Now</button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Service;