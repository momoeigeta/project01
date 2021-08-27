import React, { useState, useRef, useEffect } from 'react';
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
    AccordionItemState,
} from 'react-accessible-accordion';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';
// import { useEffect } from 'react/cjs/react.production.min';


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
    // const menuRef = useRef(null);

    // useEffect(() => {
    //     open && menuRef.current.focus();
    // }, [open]);

    const toggle = () => setOpen(!open);


    const stateHooks = [useState(-1), useState(-1)];
    const handleResetAccordion = e => {
        e.preventDefault();
        stateHooks.forEach(hook => {  // pass -1 to each setter
            hook[1]('-1');  // index 1 contains the setter
        })
    };

    const reloadPage = () => {
        window.location.reload();
    }

    // const [isExpanded, setIsExpanded] = this.setState();
    // const closeAll = () => {
    //     setIsExpanded(false)
    // }

    return (
        // <>
        <div id="menubar">
            <header className={`header  ${hiddenStyle} ${shadeStyle}`}>

                <nav>
                    <div className="topline" />

                    <ul className="pcsize">
                        <li class="has-child"><Link to="">企業情報</Link>
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

                    {/* <header className="header"> */}

                    <div className="mpsize">



                            {/* <div className="topline" /> */}
                        <Link to="/"><img src={Force} alt=""></img></Link>
                        

                            <button
                                
                                onClick={toggle}
                                className="accordion__button"
                            >{open ? '閉じる' : 'メニュー'}</button>
                            <div className={open ? 'isOpen' : 'isClose'}>

                            {/* <div
                            onClick={() => setOpen(!open)}
                            ref={menuRef}
                            onBlur={() => setOpen(false)}
                            tabIndex={0}
                        > */}


                                <Accordion allowZeroExpanded>


                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <Link to="" onClick={() => toggle(false)}>企業情報</Link>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <Link to="">
                                            <AccordionItemPanel onClick={"expanded"} >
                                                ごあいさつ
                                            </AccordionItemPanel>
                                        </Link>
                                        <Link to="" >
                                            <AccordionItemPanel onClick={"expanded"}>
                                                事業内容
                                            </AccordionItemPanel>
                                        </Link>
                                        <Link to="">
                                            <AccordionItemPanel onClick={"expanded"}>
                                                会社概要
                                            </AccordionItemPanel>
                                        </Link>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton >
                                                <Link to="/EmpInfoHome" onClick={toggle}>採用情報</Link>
                                                {/* <AccordionItemState onClick={"expanded"}>
                                                {}
                                            </AccordionItemState> */}

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <Link to="/MidCareer" >
                                            <AccordionItemPanel onClick={"expanded"}>
                                                中途採用
                                            </AccordionItemPanel>
                                        </Link>
                                        <Link to="/NewGrad" >
                                            <AccordionItemPanel onClick={"expanded"}>
                                                新卒採用
                                            </AccordionItemPanel>
                                        </Link>
                                    </AccordionItem>

                                    <Link to="" onClick={toggle}>
                                        <li>アクセス </li>
                                    </Link>
                                    <Link to="/ContactHome" onClick={toggle}>
                                        <li>
                                            お問い合わせ
                                        </li>
                                    </Link>

                                </Accordion>

                            </div>
                        </div>

                    {/* </div> */}
                    {/* </header> */}

                </nav>

            </header>
        </div>

        // {/* </> */}

    )
};

export default Header;