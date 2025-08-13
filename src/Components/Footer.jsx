import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-transparent text-white py-4">
            <div className="max-w-7xl mx-auto text-center">
                
                <p className="text-sm">
                    © {new Date().getFullYear()} vk2533120@gmail.com
                </p>
                <p className="text-sm">
                    Designed with ❤️ using React
                </p>
            </div>
        </footer>
    );
};

export default Footer;
