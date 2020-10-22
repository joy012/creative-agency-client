import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const isLocation = location.pathname === '/login'

    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <img className={`logo d-block ${isLocation? 'mx-auto pt-5 mt-5' : 'mr-auto'}`} src={logo} alt="logo" />
                {
                    !isLocation && <>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-link" to='/'>Home</Link>
                                <Link className="nav-link" to='/'>Our Portfolio</Link>
                                <Link className="nav-link" to='/'>Our Team</Link>
                                <Link className="nav-link" to='/'>Contact Us</Link>
                                {
                                    loggedInUser.email? <Link className="nav-link" to='/dashBoard'>Dashboard</Link> : 
                                    <Link className='login-btn btn btn-dark px-4 text-white' to="/login">LogIn</Link>
                                }
                            </div>
                        </div>
                    </>
                }
            </nav>
        </section>
    );
};

export default NavBar;