import React, { useState } from 'react';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }
    const handleService = e => {

        fetch('https://creative-agency-spa.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Admin is added successfully');
                }
            })
    }

    return (
        <form className="p-4 from-inline" onSubmit={handleService}>
            <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input onBlur={handleBlur} type="email" name='email' className="form-control" id="email" placeholder="Enter email.." required />
            </div>
            <button className='btn btn-success px-5' type="submit">Submit</button>
        </form>
    );
};

export default AddAdmin;