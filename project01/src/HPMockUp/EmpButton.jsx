import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Emp.css";
import NewGrad from './images/NewGrad.png';
import MidCareer from './images/MidCareer.png';
import Person from './images/Person.jpg';

const EmpButton = () => {

    return (
        <div className="Emp">
            <div className="EmpBtn">
                <Link to="/NewGrad">
                    <button
                        // className="EmpNBtn"
                    >
                        <p className="white">新卒採用</p>
                        <img src={NewGrad} />
                        <p>新卒採用行っております</p>
                    </button>
                </Link>

                <Link to="/MidCareer">
                    <button
                        // className="EmpMBtn"
                    >
                        <p className="white">中途採用</p>
                        <img src={MidCareer} />
                        <p>中途採用行っております</p>
                    </button>
                </Link>
            </div>

            <div className="char">
                <p>経験者・未経験者問わずFORCEで一緒に成長しませんか？</p>
                <hr></hr>
            </div>
            <div class="shape1" />
            <p className="inta">社員インタビュー</p>
            <div className="shape2" />
            <div className="shape3" />


            <div id="cardlayout-wrap">
                <section class="card-list">
                    <div className="box">
                        <figure class="card-figure"><img src={Person} /></figure>
                        <h2 className="card-title1">職種</h2>
                        <h2 className="card-title2">名前</h2>
                    </div>
                    <p class="card-text-tax">インタビュー要約ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </section>

                <section class="card-list">
                    <div className="box">
                        <figure class="card-figure"><img src={Person} /></figure>
                        <h2 class="card-title1">職種</h2>
                        <h2 className="card-title2">名前</h2>
                    </div>
                    <p class="card-text-tax">インタビュー要約</p>
                </section>

                <section class="card-list">
                    <div className="box">
                        <figure class="card-figure"><img src={Person} /></figure>
                        <h2 class="card-title1">職種</h2>
                        <h2 className="card-title2">名前</h2>
                    </div>
                    <p class="card-text-tax">インタビュー要約</p>
                </section>

            </div>
        </div>
    );
};

export default EmpButton;