import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Emp.css";
import NewGrad from './images/NewGrad.png';
import MidCareer from './images/MidCareer.png';

const EmpButton = () => {

    return (
        <>
            <Link to="/NewGrad">
                <button className="EmpNBtn">
                    <p className="white">新卒採用</p>
                    <img src={NewGrad} />
                    <p>新卒採用行っております</p>
                </button>
            </Link>

            <Link to="/MidCareer">
                <button className="EmpMBtn">
                    <p className="white">中途採用</p>
                    <img src={MidCareer} />
                    <p>中途採用行っております</p>
                </button>
            </Link>

            <div className="char">
                <p>経験者・未経験者問わずFORCEで一緒に成長しませんか？</p>
                <hr></hr>
            </div>
            <div class="shape1" />
            <p className="inta">社員インタビュー</p>
            <div className="shape2" />
        </>

    );
};

export default EmpButton;