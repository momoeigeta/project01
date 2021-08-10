import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MidCareer from './images/MidCareer.png';
import Force from './images/Force.png';
import './styles/Header.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="header">
                <div className="topline">

                </div>
                <ul>
                    <li className="has-child ver"
                        onClick={() => setIsOpen(isOpen ? false : true)} >
                        企業情報
                    </li>
                    <li className="has-child"
                        onClick={() => setIsOpen(isOpen ? false : true)} >
                        採用情報
                    </li>
                    <img src={Force}></img>
                    <li className="has-child ver"
                        onClick={() => setIsOpen(isOpen ? false : true)} >
                        アクセス
                    </li>
                    <li className="has-child"
                        onClick={() => setIsOpen(isOpen ? false : true)} >
                        お問い合わせ
                    </li>

                    


                    {isOpen &&
                        <ul>
                            <li><Link to="/MidCareer">中途採用</Link></li>
                            <li><Link to="/NewGrad">新卒採用</Link></li>
                        </ul>
                    }
                </ul>

            </div>
        </>
    )
};

export default Header;