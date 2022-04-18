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
            <h2 className='text-center my-3 text-white'>Book My Services {services.length}</h2>
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