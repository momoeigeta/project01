import { BrowserRouter, Route } from 'react-router-dom';
import react, { useState } from 'react';
import Home from './Home';
import Form from './Form';
import Contact from './Contact';
import Confirm from './Confirm';
const App = () => {

    const [page, setPage] = useState(1);
    const [data, setData] = useState({});
    const nextPage = (values) => {
        setPage(page + 1);
        setData(prevData => ({
            ...prevData,
            ...values,
        }));
    };







    return (
        <>
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
                {page === 2 &&
                    <Contact onSubmit={(values) => Confirm({
                        ...data,
                        ...values,
                    })}
                    />
                }
            </>
        </>
    )
}

export default App;
