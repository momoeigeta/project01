import React from "react";
import EmpButton from "./EmpButton";
import EmpHeader from "./EmpHeader";
import Header from "../Header";
import '../styles/Emp.css';
import Bottom from "../Bottom";


const EmpInfoHome = () => {

    return (
        <div id="EmpInfoHome">
            <body className="body">
                <Header />
                <EmpHeader />
                <EmpButton />
                <Bottom />
            </body>
        </div>
    )
};
export default EmpInfoHome;