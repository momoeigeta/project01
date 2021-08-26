import React from "react";
import '../styles/Corp.css';
import CorpButton from "./CorpButton";
import CorpHeader from "./CorpHeader";

const CorpHome = () => {

    return (
        <div className="Corp">
            <CorpHeader />
            <CorpButton />
        </div>
    );
};

export default CorpHome;