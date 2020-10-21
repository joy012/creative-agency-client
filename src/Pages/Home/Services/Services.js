import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://creative-agency-spa.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <div className='container py-5'>
            <h2 className='text-center pb-5'>Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></h2>
            <div className="row">
                {
                    !services.length &&
                    <div class="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                }
                {
                    services.map(service => <ServiceCard service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;