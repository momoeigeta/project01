import React from "react";
import EmpButton from "./EmpButton";
import EmpHeader from "./EmpHeader";
import '../styles/Emp.css';


const EmpInfoHome = () => {

    return (
        <div id="EmpInfoHome">
            {/* <body className="body"> */}
                <EmpHeader />
                <EmpButton />
            {/* </body> */}
        </div>
    )
};
export default EmpInfoHome;