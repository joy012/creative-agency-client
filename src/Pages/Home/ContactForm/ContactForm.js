import React from 'react';

const ContactForm = () => {
    const handleSubmit = e => {
        e.target.reset();
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <input type="text" class="form-control" id="inputPassword" placeholder="Your email address" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="inputPassword" placeholder="Your name/ company's name" />
            </div>
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Your message..."></textarea>
            </div>
            <input type='submit' className='btn btn-dark px-5' value='Send'/>
        </form>
    );
};

export default ContactForm;