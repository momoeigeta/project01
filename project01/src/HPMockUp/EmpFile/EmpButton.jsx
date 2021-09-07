import React from 'react';
import { Link } from 'react-router-dom';
import NewGrad from '../images/NewGrad.png';
import MidCareer from '../images/MidCareer.png';
import Person from '../images/Person.jpg';
import "../styles/Emp.css";

const EmpButton = () => {

    return (
        <div className="Emp">
            <div className="EmpBtn">

                <button>
                    <Link to="/NewGrad">
                        <p className="white">新卒採用</p>
                        <img src={NewGrad} alt="" />
                        <p>新卒採用行っております</p>
                    </Link>
                </button>

                <button>
                    <Link to="/MidCareer">
                        <p className="white">中途採用</p>
                        <img src={MidCareer} alt="" />
                        <p>中途採用行っております</p>
                    </Link>
                </button>

            </div>

            <div className="char">
                <p>経験者・未経験者問わずFORCEで一緒に成長しませんか？</p>
                <hr></hr>
            </div>

            <div className="shape1" />
            <p className="inta">社員インタビュー</p>
            <div className="shape2" />
            <div className="shape3" />

            <div id="cardlayout-wrap">
                
                <section className="card-list">
                    <div className="box">
                        <figure className="card-figure"><img src={Person} alt="" /></figure>
                        <h2 className="card-title1">職種ああああああああああああああ</h2>
                        <h2 className="card-title2">名前　ああ</h2>
                    </div>
                    <p className="card-text-tax">インタビュー要約ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </section>

                <section className="card-list">
                    <div className="box">
                        <figure className="card-figure"><img src={Person} alt="" /></figure>
                        <h2 className="card-title1">職種</h2>
                        <h2 className="card-title2">名前</h2>
                    </div>
                    <p className="card-text-tax">インタビュー要約</p>
                </section>

                <section className="card-list">
                    <div className="box">
                        <figure className="card-figure"><img src={Person} alt="" /></figure>
                        <h2 className="card-title1">職種</h2>
                        <h2 className="card-title2">名前</h2>
                    </div>
                    <p className="card-text-tax">インタビュー要約</p>
                </section>

            </div>
        </div>
    );
};

export default EmpButton;