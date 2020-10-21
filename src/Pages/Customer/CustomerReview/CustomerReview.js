import React, {  useState } from 'react';


const CustomerReview = () => {
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);

    const handleReview = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('email', review.email);
        formData.append('company', review.company);
        formData.append('review', review.review);

        fetch('https://creative-agency-spa.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
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
        setReview(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
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
            <div className="form-group">
                <label htmlFor="img">Upload Your Picture</label>
                <input onChange={handleFileChange} type="file" id='#img' className="form-control-file" />
            </div>
            <input className='btn btn-dark px-5' type="submit" value="Submit" />
        </form>
    );
};

export default CustomerReview;