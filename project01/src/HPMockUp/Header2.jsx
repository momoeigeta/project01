import React, { useState } from 'react';
//動く

import useDocumentScrollThrottled from './useDocumentScrollThrottled';
import './styles/Header2.css';

function Header2() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <div className="header2">
            <header className={`header  ${hiddenStyle}`}>
                <div className="logo">Logo</div>
                <ul className="links">
                    <li className="link-item">home</li>
                    <li className="link-item">about</li>
                    <li className="link-item">join</li>
                </ul>
            </header>
        </div>
    );
}

export default Header2;