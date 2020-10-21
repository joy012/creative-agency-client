import React, { useEffect, useState } from 'react';
import './AllUserList.css';

const AllUserList = () => {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        fetch('https://creative-agency-spa.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllUser(data);
            })
    }, [])

    return (
        <div className="table-container table-responsive  mt-3 mb-5 mr-4 p-3">
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Detail</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !allUser.length &&
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        </div>
                    }
                    {
                        allUser.map(user =>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.service}</td>
                                <td>{user.details}</td>
                                <td >
                                    <button className="status-btn">{user.status}</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUserList;