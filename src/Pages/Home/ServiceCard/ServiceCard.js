import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';


const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 mt-4">
            <Link to='/getService' style={{textDecoration: 'none', color: 'black'}}>
                <div className="service-card card h-100">
                    <div className="card-body text-center">
                        <div>
                            <img className="w-25 my-4" src={service.icon} alt="error" />
                        </div>
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text mb-4">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;