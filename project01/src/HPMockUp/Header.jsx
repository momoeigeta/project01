import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Force from './images/Force.png';

import './styles/Header.css';
// import './styles/MenuBtn.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    // const mediaQueriesWin = () => {
    //     let width = window.addEventListener.width();
    //     if (width <= 768) {
    //         const a = document.getElementsByClassName("has-child a");
    //         a.addEventListener('click', function () {
    //             let parentElem = this.parentNode();

    //         });
    //     }
    // }

    return (
        <>
            <div id="menubar">


                <nav>
                    <div className="topline" />

                    <ul className="pcsize">
                        <li class="has-child"><a href="#">企業情報</a>
                            <ul>
                                <li><a href="#">ごあいさつ</a></li>
                                <li><a href="#">事業内容</a></li>
                                <li><a href="#">会社概要</a></li>
                            </ul>
                            <div className="ver1"></div>
                        </li>

                        <li class="has-child"><Link to="/EmpInfoHome">採用情報</Link>
                            <ul>
                                <li><Link to="/MidCareer">中途採用</Link></li>
                                <li><Link to="/NewGrad">新卒採用</Link></li>
                            </ul>
                        </li>
                        <Link to="/"><img src={Force}></img></Link>
                        <li><a href="#">アクセス</a>
                            <div className="ver2"></div>
                        </li>

                        <li>
                            <Link to="/ContactHome">お問い合わせ</Link>
                        </li>
                    </ul>


                    <ul className="mpsize">
                        <Link to="/"><img src={Force}></img></Link>

                        <li
                            class="has-child"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <a
                                href="#"
                            >企業情報</a>
                            <ul>
                                <li><a href="#">ごあいさつ</a></li>
                                <li><a href="#">事業内容</a></li>
                                <li><a href="#">会社概要</a></li>
                            </ul>
                            <div className="ver1"></div>
                        </li>

                        <li class="has-child"><Link to="/EmpInfoHome">採用情報</Link>
                            <ul>
                                <li><Link to="/MidCareer">中途採用</Link></li>
                                <li><Link to="/NewGrad">新卒採用</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">アクセス</a>
                            <div className="ver2"></div>
                        </li>

                        <li>
                            <Link to="/ContactHome">お問い合わせ</Link>
                        </li>
                    </ul>


                    {/* <div className="hamburger">
                        <header>
                            <div class="hamburger-menu">
                                <input type="checkbox" id="menu-btn-check" />
                                <label for="menu-btn-check" class="menu-btn"><span></span>
                                    <div className="menu">MENU</div>
                                </label>

                                <div class="menu-content">
                                    <ul>
                                        <li>
                                            <a href="#">メニューリンク1</a>
                                        </li>
                                        <li>
                                            <a href="#">メニューリンク2</a>
                                        </li>
                                        <li>
                                            <a href="#">メニューリンク3</a>
                                        </li>
                                    </ul>
                                </div>



                            </div>
                        </header>
                    </div> */}











                </nav>
            </div>

        </>

    )
};

export default Header;