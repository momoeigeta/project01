import React from 'react';
import ContactHeader from './ContactHeader';
import ContactButton from './ContactButton';
// import './styles/Contact.css';
import Footer from '../Footer';
import Header from '../Header';

const ContactHome = () => {

    return (
        <div>
            <body className="body">

                <div id="ContactHome">
                    <Header />
                    <ContactHeader />
                    <ContactButton />
                </div>

                <Footer />
            </body>
        </div >
    );
};
export default ContactHome;