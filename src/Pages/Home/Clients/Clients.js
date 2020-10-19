import React from 'react';
import clientLogo1 from '../../../images/logos/airbnb.png'
import clientLogo2 from '../../../images/logos/google.png'
import clientLogo3 from '../../../images/logos/netflix.png'
import clientLogo4 from '../../../images/logos/slack.png'
import clientLogo5 from '../../../images/logos/uber.png'

const Clients = () => {
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-center py-5">
                <div className="col-md-2 col-6 col-md-offset-1 mt-3 mt-md-0">
                    <img className='w-75 d-block mx-auto' src={clientLogo1} alt=""/>
                    </div>
                <div className="col-md-2 col-6 mt-3 mt-md-0">
                    <img className='w-75 d-block mx-auto' src={clientLogo2} alt=""/>
                    </div>
                <div className="col-md-2 col-6 mt-3 mt-md-0">
                    <img className='w-75 d-block mx-auto' src={clientLogo3} alt=""/>
                    </div>
                <div className="col-md-2 col-6 mt-3 mt-md-0">
                    <img className='w-75 d-block mx-auto' src={clientLogo4} alt=""/>
                    </div>
                <div className="col-md-2 col-6 mt-3 mt-md-0">
                    <img className='w-75 d-block mx-auto' src={clientLogo5} alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Clients;