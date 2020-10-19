import React from 'react';
import Carousel from '../Carousel/Carousel';
import Clients from '../Clients/Clients';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
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
        </div>
    );
};

export default Home;