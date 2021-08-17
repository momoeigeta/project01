import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Force from './images/Force.png';
import './styles/Accordion.css';
import './styles/Header.css';
// import './styles/MenuBtn.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';


const Header3 = () => {

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    // const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 100;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        // setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const hiddenStyle = shouldHideHeader ? 'hidden' : '';


    return (
        <>
            <div id="menubar">
                <header className={`header  ${hiddenStyle}`}>

                    <nav>
                        <div className="topline" />

                        <ul className="pcsize">
                            <li class="has-child">
                                {/* <a href="#"> */}
                                <Link to="">
                                    企業情報
                                </Link>
                                {/* </a> */}
                                <ul>
                                    <li><Link to="">ごあいさつ</Link></li>
                                    <li><Link to="">事業内容</Link></li>
                                    <li><Link to="">会社概要</Link></li>
                                </ul>
                                <div className="ver1"></div>
                            </li>

                            <li class="has-child"><Link to="/EmpInfoHome">採用情報</Link>
                                <ul>
                                    <li><Link to="/MidCareer">中途採用</Link></li>
                                    <li><Link to="/NewGrad">新卒採用</Link></li>
                                </ul>
                            </li>
                            <Link to="/"><img src={Force} alt=""></img></Link>
                            <li><Link to="">アクセス</Link>
                                <div className="ver2"></div>
                            </li>

                            <li>
                                <Link to="/ContactHome">お問い合わせ</Link>
                            </li>
                        </ul>


                        <div className="mpsize">
                            <Link to="/"><img src={Force} alt=""></img></Link>

                            <Accordion allowZeroExpanded>

                                {/* <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        menu
                                    </AccordionItemButton>
                                </AccordionItemHeading> */}

                                {/* <AccordionItemPanel> */}

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <Link to="">企業情報</Link>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <Link to="">
                                        <AccordionItemPanel>
                                            ごあいさつ
                                        </AccordionItemPanel>
                                    </Link>
                                    <Link to="">
                                        <AccordionItemPanel>
                                            事業内容
                                        </AccordionItemPanel>
                                    </Link>
                                    <Link to="">
                                        <AccordionItemPanel>
                                            会社概要
                                        </AccordionItemPanel>
                                    </Link>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <Link to="/EmpInfoHome">採用情報</Link>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <Link to="/MidCareer">
                                        <AccordionItemPanel>
                                            中途採用
                                        </AccordionItemPanel>
                                    </Link>
                                    <Link to="/NewGrad">
                                        <AccordionItemPanel>
                                            新卒採用
                                        </AccordionItemPanel>
                                    </Link>
                                </AccordionItem>

                                <Link to="">
                                    <li>アクセス </li>
                                </Link>
                                <Link to="/ContactHome">
                                    <li>
                                        お問い合わせ
                                    </li>
                                </Link>

                                {/* </AccordionItemPanel>
                            </AccordionItem> */}


                            </Accordion>

                        </div>

                    </nav>

                </header>

            </div>

        </>

    )
};

export default Header3;