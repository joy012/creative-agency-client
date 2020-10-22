import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);

    const handleOrder = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('service', order.service);
        formData.append('details', order.details);
        formData.append('price', order.price);
        formData.append('status', 'pending');

        fetch('https://creative-agency-spa.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your Order Has Placed Successfully!');
                }
            })
            e.preventDefault();
            e.target.reset();
    }
    const handleBlur = e => {
        const newInfo = { ...order };
        newInfo[e.target.name] = e.target.value;
        setOrder(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <form onSubmit={handleOrder} className='w-75 mx-auto mx-sm-0 mt-4 px-2 px-sm-3 px-md-5 text-dark'>
            <div className="form-group">
                <input onBlur={handleBlur} type="text" name='name' className="form-control" placeholder="Your name/ company's name" />
            </div>
            <div className="form-group">
                <input onBlur={handleBlur} type="email" name='email' className="form-control" placeholder="Your email address" />
            </div>
            <div className="form-group">
                <input onBlur={handleBlur} type="text" name='service' className="form-control bg-white" placeholder='service name' value={loggedInUser.serviceName} />
            </div>
            <div className="form-group">
                <textarea onBlur={handleBlur} name='details' className="form-control" rows="4" placeholder="Project Details..."></textarea>
            </div>
            <div className="row align-items-center">
                <div className="col-sm-6 col-12">
                    <div className="form-group">
                        <input onBlur={handleBlur} type="number" name='price' className="form-control" placeholder="Price" />
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-group">
                        <input onChange={handleFileChange} type="file" name='file' className="form-control-file" />
                    </div>
                </div>
            </div>
            <input className='btn btn-dark px-5' type="submit" value="Send" />
        </form>
    );
};

export default CustomerOrder;