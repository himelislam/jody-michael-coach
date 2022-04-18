import React, { useContext, useEffect, useState } from 'react';
import { ServicesContext } from '../../App';
import Service from '../Service/Service';

const Services = () => {
    // const [services, setServices] = useState([]);
    // useEffect( () => {
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])
    const [services, setServices] = useContext(ServicesContext);
    console.log(services);
    return (
        <div style={{minHeight: "400px"}} className='container'>
            <h1 className='text-center my-5 text-white fw-light border p-4'>My Services</h1>
            <div>
                {
                    services.map(service => <Service
                        key={service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;