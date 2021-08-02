import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Emp.css";

const EmpButton = () => {

    return (
        <>
            <button className="EmpNBtn">
                <Link to="/NewGrad">
                    <p>新卒採用</p>
                    <p>新卒採用行っております</p>
                </Link>

            </button>

            <button className="EmpMBtn">
                <Link to="/MidCareer">
                    <p>中途採用</p>
                    <p>中途採用行っております</p>
                </Link>
            </button>
        </>

    );
};

export default EmpButton;