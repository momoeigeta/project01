import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Contact from './Contact';
import ContactConfirm from './ContactConfirm';
import NewGrad from './NewGrad';
import NewGradConfirm from './NewGradConfirm';
import MidCareer from './MidCareer';
import MidCareerConfirm from './MidCareerConfirm';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Contact'} component={Contact} />
                <Route exact path={'/ContactConfirm'} component={ContactConfirm} />
                <Route exact path={'/NewGrad'} component={NewGrad} />
                <Route exact path={'/NewGradConfirm'} component={NewGradConfirm} />
                <Route exact path={'/MidCareer'} component={MidCareer} />
                <Route exact path={'/MidCareerConfirm'} component={MidCareerConfirm} />
            </div>
        </BrowserRouter>
    );
};

export default App;
