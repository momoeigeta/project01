import React from "react";
import CorpHome from "./CorpFile/CorpHome";
import EmpInfoHome from "./EmpFile/EmpInfoHome";
import ContactHome from "./ContactFile/ContactHome";
import Top from "./Top";
// import JobDescription from "./JobDescription";


const Home = () => {

    return (
        <>
            <Top />
            <CorpHome />
            <EmpInfoHome />
            <ContactHome />
            {/* <JobDescription /> */}
        </>
    )
};

export default Home;