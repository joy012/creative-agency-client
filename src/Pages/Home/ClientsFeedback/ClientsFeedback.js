import React, {  useEffect, useState } from 'react';


const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://creative-agency-spa.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div className='container py-5 mb-5'>
            <h2 className='text-center pb-5'>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="row">
                {
                    !reviews.length &&
                    <div class="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                }
                {
                    reviews.map(review =>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className='col-4 align-self-center px-3'>
                                        <img className="w-75 rounded-circle my-4" src={review.image} alt="" />
                                        </div>
                                        <div className="col-7 align-self-center px-0 text-left">
                                            <h5 className="card-title font-weight-bold">{review.name}</h5>
                                            <h6 className="font-weight-bold small">{review.company}</h6>
                                        </div>
                                    </div>
                                    <p className="card-text text-muted">{review.review}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;