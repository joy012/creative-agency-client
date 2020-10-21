import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const handleService = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', service.service);
        formData.append('description', service.description);

        fetch('https://creative-agency-spa.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('one new service added successfully!');
                }
            })
    }
    const handleBlur = e => {
        const newInfo = { ...service };
        newInfo[e.target.name] = e.target.value;
        setService(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <form className="p-5" onSubmit={handleService}>
            <div className="row align-items-center">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="title">Service Title</label>
                        <input onBlur={handleBlur} type="text" name='service' className="form-control" id="title" placeholder="Enter Title.." required />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="img">Icon</label>
                        <input onChange={handleFileChange} type="file" name="file" className="form-control-file" id="img" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea onBlur={handleBlur} className="form-control" name='description' id="desc" rows="5" placeholder="Service Description.."></textarea>
            </div>
            <input className='btn btn-success px-5' type="submit" value="Submit" />
        </form>
    );
};

export default AddService;