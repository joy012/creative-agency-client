import React, {  useContext, useState } from 'react';
import { UserContext } from '../../../App';


const CustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});

    const handleReview = (e) => {
        fetch('https://creative-agency-spa.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Thank You For Your Review');
                }
            })
            e.preventDefault();
            e.target.reset();
    }
    const handleBlur = e => {
        const newInfo = { ...review };
        newInfo[e.target.name] = e.target.value;
        newInfo.image = loggedInUser.img;
        setReview(newInfo);
    }
    
    return (
        <form onSubmit={handleReview} className='w-75 mx-auto mx-sm-0 mt-4 px-2 px-sm-3 px-md-5 text-dark'>
            <div className="form-group">
                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
                <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Your position and company name" />
            </div>
            <div className="form-group">
                <input onBlur={handleBlur} type="email" className="form-control" name='email' placeholder="Your email address" />
            </div>
            <div class="form-group">
                <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" name='review' rows="5" placeholder="Your message..."></textarea>
            </div>
            <input className='btn btn-dark px-5' type="submit" value="Submit" />
        </form>
    );
};

export default CustomerReview;