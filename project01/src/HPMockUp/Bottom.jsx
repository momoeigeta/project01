import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Bottom.css';
import UpArrow from './images/UpArrow.png';
import ForceWhite from './images/ForceWhite.png';

const Bottom = () => {

    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="bottom">

            {/* <button
                className="mpsize"
                onClick={returnTop}>
                <img src={UpArrow} alt="" />
                <p>PAGE TOP</p>
            </button> */}

            {/* <div className="wrap around"> */}
            <div className="wrap around">
                <Link to="/"><img className="force" src={ForceWhite} alt=""></img></Link>

                <ul className="menu-item">
                    <Link to="CorpHome"><li className="big">企業情報</li></Link>
                    <Link to="Greeting"><li>ごあいさつ</li></Link>
                    <Link to="Services"><li>事業内容</li></Link>
                    <Link to="Overview"><li>会社概要</li></Link>
                </ul>
                <ul className="menu-item">
                    <Link to="/EmpInfoHome"><li className="big">採用情報</li></Link>
                    <Link to="/MidCareer"><li>中途採用</li></Link>
                    <Link to="/NewGrad"><li>新卒採用</li></Link>
                </ul>
                <ul className="menu-item">
                    <Link to=""><li>アクセス</li></Link>
                    <Link to="/ContactHome"><li>お問い合わせ</li></Link>
                    <Link to=""><li>プライバシーポリシー</li></Link>
                    <Link to=""><li>リンク</li></Link>
                </ul>
                <button onClick={returnTop}>
                    <img src={UpArrow} alt="" />
                    <p>PAGE TOP</p>
                </button>

            </div>

            {/* </div> */}

            <button
                className="mpsize"
                onClick={returnTop}>
                <img src={UpArrow} alt="" />
                <p>PAGE TOP</p>
            </button>

        </div>
    );
};

export default Bottom;