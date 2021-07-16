import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Confirm from './Confirm';
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path={'/'} component={Home} />
                <Route path={'/Contact'} component={Contact} />
                <Route path={'/Confirm'} component={Confirm} />
            </div>
        </BrowserRouter>
    )
}

export default App;
