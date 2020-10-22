import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceCard.css';


const ServiceCard = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleService = (name, detail) => {
        const updateUser = {...loggedInUser};
        updateUser.serviceName = name;
        setLoggedInUser(updateUser);
    }
    return (
        <div className="col-md-4 mt-4">
            <Link to='/dashBoard' style={{textDecoration: 'none', color: 'black'}}>
                <div onClick={() => handleService(service.service)} className="service-card card h-100">
                    <div className="card-body text-center">
                        <div>
                            <img className="w-25 my-4" src={`data:image/png;base64,${service.image.img}`} alt=""/>
                        </div>
                        <h5 className="card-title">{service.service}</h5>
                        <p className="card-text mb-4">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;