import React from 'react';
import { Link } from 'react-router-dom';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';

const clientsReview = [
    {
        img: client1,
        name: 'Nash Patrik',
        company: 'CEO,Manpol',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo autem alias nihil, adipisci molestiae. Reiciendis quidem totam labore debitis!'
    },
    {
        img: client2,
        name: 'Miriam Barron',
        company: 'CEO,Manpol',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo autem alias nihil, adipisci molestiae. Reiciendis quidem totam labore debitis!'
    },
    {
        img: client3,
        name: 'Bria Manlone',
        company: 'CEO, Manpol',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo autem alias nihil, adipisci molestiae. Reiciendis quidem totam labore debitis!'
    },
]
const ClientsFeedback = () => {
    return (
        <div className='container py-5 mb-5'>
            <h2 className='text-center pb-5'>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="row">
                {
                    clientsReview.map(review =>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <Link to='/getService' style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="card h-100">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className='col-sm-4 align-self-center px-3'>
                                                <img className="w-100 my-4" src={review.img} alt="error" />
                                            </div>
                                            <div className="col-sm-7 align-self-center text-left px-0">
                                                <h5 className="card-title">{review.name}</h5>
                                                <h6 className="card-title">{review.company}</h6>
                                            </div>
                                        </div>
                                        <p className="card-text text-muted">{review.comment}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;