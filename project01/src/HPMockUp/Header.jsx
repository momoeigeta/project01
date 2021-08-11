import React from 'react';
import { Link } from 'react-router-dom';
import Force from './images/Force.png';

import './styles/Header.css';

const Header = () => {

    return (
        <>
            <div id="menubar">


                <nav>
                <div className="topline">
                </div>

                    <ul>
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
                        <Link to="/">
                            <img src={Force}></img>
                        </Link>
                        <li><a href="#">アクセス</a>
                            <div className="ver2"></div>

                        </li>

                        <li>
                            <Link to="/ContactHome">
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </>

    )
};

export default Header;