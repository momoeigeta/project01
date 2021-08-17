import React from "react";
import EmpButton from "./EmpButton";
import EmpHeader from "./EmpHeader";
// import Header from "../Header";
import Header3 from "../Header3";

import '../styles/Emp.css';

const EmpInfoHome = () => {

    return (
        <div id="EmpInfoHome">
            <body className="body">
                {/* <Header /> */}
                <Header3 />
                <EmpHeader />
                <EmpButton />
            </body>
        </div>
    )
};
export default EmpInfoHome;