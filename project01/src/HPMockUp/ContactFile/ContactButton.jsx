import React from 'react';
import { Link } from 'react-router-dom';
const ContactButton = () => {

    return (
        <div>
            <button id="ContactBtn">
                <Link to="/Contact">
                    <p className="d big">
                        お問い合わせはこちらから</p>
                    <p className="d small">
                        お気軽にご相談・お問い合わせ下さい。</p>
                </Link>
            </button>
        </div>
    );
};

export default ContactButton;