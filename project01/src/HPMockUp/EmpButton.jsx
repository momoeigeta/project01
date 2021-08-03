import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Emp.css";

const EmpButton = () => {

    return (
        <>
            <Link to="/NewGrad">

                <button className="EmpNBtn">
                    {/* <Link to="/NewGrad"> */}
                    <p className="white">新卒採用</p>
                    <p>新卒採用行っております</p>
                    {/* </Link> */}
                </button>
            </Link>


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