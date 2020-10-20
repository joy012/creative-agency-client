import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center">
                <small>&copy; The Web Guy, {new Date().getFullYear()}. All right reserved</small>
            </footer>
        </div>
    );
};

export default Footer;