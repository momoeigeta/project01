import React from "react";
import EmpButton from "./EmpButton";
import EmpHeader from "./EmpHeader";
import Header from "../Header";
import '../styles/Emp.css';
import Header2 from "../Header2";


const EmpInfoHome = () => {

    return (
        <div id="EmpInfoHome">
            <body className="body">
                <Header />
                {/* <Header2 /> */}
                <EmpHeader />
                <EmpButton />
            </body>
        </div>
    )
};
export default EmpInfoHome;