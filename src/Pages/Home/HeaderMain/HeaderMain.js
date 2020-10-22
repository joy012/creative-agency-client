import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/logos/Frame.png';


const HeaderMain = () => {
    return (
        <section className="container">
            <div className="row align-items-center justify-content-center py-5">
                <div className="col-md-5 my-3">
                    <h1>Let's Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                    <Link className='btn btn-dark text-white px-4 mt-3' to="/dashBoard">Hire Us</Link>
                </div>
                <div className="col-md-6 pb-5">
                    <img className="w-100 d-block mx-auto" src={bannerImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;