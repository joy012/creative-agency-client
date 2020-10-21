import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AllUserList from '../AllUserList/AllUserList';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();

    return (
        <div className='container px-0 mx-auto'>
            <div className='row mt-3 align-items-center justify-content-around my-0 my-sm-4'>
                <div className="col-6 px-4">
                    <img src={logo} className="d-block w-50 mx-auto mx-sm-0" alt="" />
                </div>
                <div className='col-6 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h5 className="text-right">{loggedInUser.name || 'User'}</h5>
                </div>
            </div>
            <div className="row full-height">
                <div className="col-sm-3">
                    <nav className="nav flex-column align-items-center my-5 ml-auto">
                        <Link to='/admin' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Service List</Link>
                        <Link to='/admin/addService' className="mb-4 text-dark"><i class="fas fa-plus"></i> Add Service</Link>
                        <Link to='/admin/addAdmin' className="text-dark"><i class="fas fa-user-plus"></i> Make Admin</Link>
                    </nav>
                </div>
                <div className="col-sm-9 p-0 p-md-5" style={{ backgroundColor: "#F4F7FC", borderRadius: '16px' }}>
                    {
                        location.pathname === '/admin' &&
                        <AllUserList/>
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
        </div>
    );
};

export default Admin;