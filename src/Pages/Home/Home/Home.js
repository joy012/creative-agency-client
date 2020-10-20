import React from 'react';
import Carousel from '../Carousel/Carousel';
import Clients from '../Clients/Clients';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Clients />
            <Services/>
            <Carousel/>
            <ClientsFeedback/>
            <Contact/>
        </div>
    );
};

export default Home;