import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import CustomerOrder from '../../Customer/CustomerOrder/CustomerOrder';
import CustomerServiceList from '../../Customer/CustomerServiceList/CustomerServiceList';
import CustomerReview from '../../Customer/CustomerReview/CustomerReview';
import AllUserList from '../../Admin/AllUserList/AllUserList';
import AddService from '../../Admin/AddService/AddService';
import AddAdmin from '../../Admin/AddAdmin/AddAdmin';
import './DashBoard.css';

const Customer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();

    return (
        <div className='container px-0 mx-auto'>
            <div className='row mt-3 align-items-center justify-content-around my-0 my-sm-4'>
                <div className="col-4 px-4">
                    <img src={logo} className="d-block w-50 mx-auto mx-sm-0" alt="" />
                </div>
                <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h4 className="text-center">DashBoard</h4>
                </div>
                <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h5 className="text-right">{loggedInUser.name}</h5>
                </div>
            </div>
            {
                !loggedInUser.role &&
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
            }
            {
                loggedInUser.role &&
                <div className="row full-height">
                    <div className="col-sm-3">
                        <nav className="nav flex-column align-items-center my-5 ml-auto">
                            {
                                loggedInUser.role === 'user' &&
                                <>
                                    <Link to='/dashBoard' className="mt-4 text-dark side-link"><i class="fas fa-shopping-cart"></i> Order</Link>
                                    <Link to='/customer/serviceList' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Service List</Link>
                                    <Link to='/customer/addReview' className="mb-4 text-dark"><i class="fas fa-comment-alt"></i> Review</Link>
                                    <Link to='/' className="text-dark"><i class="fas fa-arrow-left"></i> Home</Link>
                                </>
                            }
                            {
                                loggedInUser.role === 'admin' &&
                                <>
                                    <Link to='/dashBoard' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Service List</Link>
                                    <Link to='/admin/addService' className="mb-4 text-dark"><i class="fas fa-plus"></i> Add Service</Link>
                                    <Link to='/admin/addAdmin' className="mb-4 text-dark"><i class="fas fa-user-plus"></i> Make Admin</Link>
                                    <Link to='/' className="text-dark"><i class="fas fa-arrow-left"></i> Home</Link>
                                </>
                            }
                        </nav>
                    </div>
                    <div className="col-sm-9 p-0 p-md-5" style={{ backgroundColor: "#F4F7FC", borderRadius: '16px' }}>
                        {
                            (location.pathname === '/dashBoard' && loggedInUser.role === 'user') &&
                            <CustomerOrder />
                        }
                        {
                            location.pathname === '/customer/serviceList' &&
                            <CustomerServiceList />
                        }
                        {
                            location.pathname === '/customer/addReview' &&
                            <CustomerReview />
                        }
                        {
                            (location.pathname === '/dashBoard' && loggedInUser.role === 'admin') &&
                            <AllUserList />
                        }
                        {
                            location.pathname === '/admin/addService' &&
                            <AddService />
                        }
                        {
                            location.pathname === '/admin/addAdmin' &&
                            <AddAdmin />
                        }
                    </div>
                </div>
            }
        </div>
    );
};


export default Customer;