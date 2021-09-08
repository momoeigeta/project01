import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Corp.css';
import Greeting from '../images/Greeting.png';
import Services from '../images/Services.png';
import Overview from '../images/Overview.png';


const CorpButton = () => {

    return (
        <div className="Corp">
            <div className="CorpBtn">

                <button>
                    <Link to="/Greeting">
                        <p className="white">ごあいさつ</p>
                        <img src={Greeting} alt="" />
                    </Link>
                </button>

                <button>
                    <Link to="/Services">
                        <p className="white">事業内容</p>
                        <img src={Services} alt="" />
                    </Link>
                </button>

                <button>
                    <Link to="/Overview">
                        <p className="white">会社概要</p>
                        <img src={Overview} alt="" />
                    </Link>
                </button>

            </div>

            <div className="char">
                <p>フォース株式会社は優れた技術力の創出とＩＴがもつ限りない可能性の追求で、<br />
                    お客様に必要とされる会社であることを目標としています。</p>
                <hr />
            </div>
            
            <div className="shape1" />

        </div>
    );
};

export default CorpButton;