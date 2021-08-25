import React from "react";
import TopImage from './images/TopImage.jpg';
import { Link } from 'react-router-dom';
import './styles/Top.css';

const Top = () => {

    return (
        <div className="Top">
            <img className="topImage" src={TopImage} alt=""></img>
            <h1 className="hh1">ITサービスで</h1>
            <h1 className="hh2"><span className="red">道</span>を拓く。</h1>
            <Link to="/EmpInfoHome"><button>こちらから採用エントリー</button></Link>
        </div>
    );
};

export default Top;