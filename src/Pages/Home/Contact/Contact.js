import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }} className='p-5'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <h2>Let us handle your project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;