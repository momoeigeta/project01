import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Force from './images/Force.png';
import './styles/Accordion.css';
import './styles/Header.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';


const Header = () => {

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowshade, setShouldShowshade] = useState(false);

    const MINIMUM_SCROLL = 110;
    const TIMEOUT_DELAY = 250;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowshade(currentScrollTop > 1);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const hiddenStyle = shouldHideHeader ? 'hidden' : '';
    const shadeStyle = shouldShowshade ? 'shade' : '';

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <div id="menubar">
            {/* <div className="topline" /> */}

            <header className={`header  ${hiddenStyle} ${shadeStyle}`}>

                <nav>
                    <div className="topline" />

                    <ul className="pcsize">
                        <li className="has-child"><Link to="CorpHome">企業情報</Link>
                            <ul>
                                <li><Link to="Greeting">ごあいさつ</Link></li>
                                <li><Link to="Services">事業内容</Link></li>
                                <li><Link to="Overview">会社概要</Link></li>
                            </ul>
                            <div className="ver1"></div>
                        </li>

                        <li className="has-child"><Link to="/EmpInfoHome">採用情報</Link>
                            <ul>
                                <li><Link to="/MidCareer">中途採用</Link></li>
                                <li><Link to="/NewGrad">新卒採用</Link></li>
                            </ul>
                        </li>

                        <Link to="/" className="forcea"><img src={Force} alt=""></img></Link>
                        <li><Link to="Access">アクセス</Link>
                            <div className="ver2"></div>
                        </li>

                        <li>
                            <Link to="/ContactHome">お問い合わせ</Link>
                        </li>
                    </ul>

                    <div className="mpsize">
                        <a href="/" className="forcea">
                            <img src={Force} alt=""></img>
                        </a>

                        <button
                            onClick={() => toggle()}
                            className="accordion__button"
                        >{open ? '閉じる' : 'MENU'}</button>
                        <div className={open ? 'isOpen' : 'isClose'}>

                            <Accordion allowZeroExpanded>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <a href="/CorpHome"
                                                onClick={() => toggle()}>
                                                企業情報
                                            </a>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <a href="Greeting">
                                        <AccordionItemPanel>
                                            ごあいさつ
                                        </AccordionItemPanel>
                                    </a>
                                    <a href="Services" >
                                        <AccordionItemPanel>
                                            事業内容
                                        </AccordionItemPanel>
                                    </a>
                                    <a href="Overview">
                                        <AccordionItemPanel>
                                            会社概要
                                        </AccordionItemPanel>
                                    </a>
                                </AccordionItem>

                                <AccordionItem>

                                    <AccordionItemHeading>
                                        <AccordionItemButton >
                                            <a href="/EmpInfoHome"
                                                onClick={toggle}>
                                                採用情報
                                            </a>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <a href="/MidCareer">
                                        <AccordionItemPanel>
                                            中途採用
                                        </AccordionItemPanel>
                                    </a>
                                    <a href="/NewGrad">
                                        <AccordionItemPanel>
                                            新卒採用
                                        </AccordionItemPanel>
                                    </a>
                                </AccordionItem>

                                <Link to="Access" onClick={toggle}>
                                    <li>アクセス</li>
                                </Link>
                                <Link to="/ContactHome" onClick={toggle}>
                                    <li>お問い合わせ</li>
                                </Link>

                            </Accordion>

                        </div>
                    </div>

                </nav>

            </header>
        </div>

    );
};

export default Header;