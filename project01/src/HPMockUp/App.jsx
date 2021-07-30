import { BrowserRouter, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { StateMachineProvider, createStore } from "little-state-machine";

import Home from './Home';
// import Form from './Form';
import Contact from './Contact';
import Confirm from './Confirm';

createStore({});


const App = () => {


    return (
        <StateMachineProvider>
            <BrowserRouter>
                <div>
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/Contact'} component={Contact} />
                    <Route exact path={'/Confirm'} component={Confirm} />
                </div>
            </BrowserRouter>

            <>

                {/* {
                    page === 1 &&
                    <Home onSubmit={nextPage} />
                } */}
                {/* {
                    page === 1 &&
                    <Form onSubmit={nextPage} />
                } */}
                {/* {page === 2 &&
                    <Contact onSubmit={(values) => Confirm({
                        ...data,
                        ...values,
                    })}
                    />
                } */}
            </>
        </StateMachineProvider>
    )
}

export default App;
