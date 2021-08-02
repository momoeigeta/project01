import React from 'react';
import ContactHeader from './ContactHeader';
import ContactButton from './ContactButton';
// import './styles/Contact.css';
import Footer from './Footer';

const ContactHome = () => {

    return (
        <div>
            <body className="body">

                <div>
                    <ContactHeader />
                    <ContactButton />
                </div>

                <Footer />
            </body>
        </div >
    );
};
export default ContactHome;