import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import icon1 from '../../../images/icons/service1.png';
import icon2 from '../../../images/icons/service2.png';
import icon3 from '../../../images/icons/service3.png';

const services = [
    {
        icon: icon1,
        name: 'Web & Mobile Design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        icon: icon2,
        name: 'Graphic Design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        icon: icon3,
        name: 'Web Development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Services = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center pb-5'>Provide Awesome <span style={{color: '#7AB259'}}>Services</span></h2>
            <div className="row">
                {
                    services.map(service => <ServiceCard service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;