import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../../App';

const Checkout = () => {
    const { checkoutId } = useParams();
    const [services] = useContext(ServicesContext);
    const service = services.find(service => service.id == checkoutId);


    return (
        <div style={{minHeight: "400px"}} className='container text-white'>
            <div style={{height : "300px"}} className='border rounded row align-items-center my-5 p-4'>
                <div className='col-lg-6'>
                    <h2 className='fw-light fs-1'>{service?.name}</h2>
                    <h5 className='fs-2'>${service?.price} <span className='fs-6 text-muted'>/30min chat</span></h5>
                </div>
                <div className='col-lg-6'>
                    <button className='btn btn-secondary mx-auto w-50 d-block'>Proceed to Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;