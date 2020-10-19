import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <img className='logo d-block mr-auto' src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/'>Our Portfolio</Link>
                        <Link className="nav-link" to='/'>Our Team</Link>
                        <Link className="nav-link" to='/'>Contact Us</Link>
                        <Link className='login-btn btn btn-dark px-4 text-white' to="/login">LogIn</Link>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;