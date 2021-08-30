import { BrowserRouter, Route, } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import ContactHome from './ContactFile/ContactHome';
import Contact from './ContactFile/Contact';
import ContactConfirm from './ContactFile/ContactConfirm';
import NewGrad from './EmpFile/NewGrad';
import NewGradConfirm from './EmpFile/NewGradConfirm';
import MidCareer from './EmpFile/MidCareer';
import MidCareerConfirm from './EmpFile/MidCareerConfirm';
import EmpInfoHome from './EmpFile/EmpInfoHome';
import CorpHome from './CorpFile/CorpHome';
import Greeting from './CorpFile/Greeting';

import Header from './Header';
import Bottom from './Bottom';
import ScrollToTop from './ScrollToTop';

const App = () => {

    return (
        <>

            <BrowserRouter>
                {/* <Switch> */}

                <div>
                    <Header />

                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/Contact'} component={Contact} />
                    <Route exact path={'/ContactConfirm'} component={ContactConfirm} />
                    <Route exact path={'/NewGrad'} component={NewGrad} />
                    <Route exact path={'/NewGradConfirm'} component={NewGradConfirm} />
                    <Route exact path={'/MidCareer'} component={MidCareer} />
                    <Route exact path={'/MidCareerConfirm'} component={MidCareerConfirm} />
                    <Route exact path={'/ContactHome'} component={ContactHome} />
                    <Route exact path={'/EmpInfoHome'} component={EmpInfoHome} />
                    <Route exact path={'/CorpHome'} component={CorpHome} />
                    <Route exact path={'/Greeting'} component={Greeting} />
                    <Bottom />
                    <ScrollToTop />

                </div>
                {/* </Switch> */}


            </BrowserRouter>
        </>
    );
};

export default App;
