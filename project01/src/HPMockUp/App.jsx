import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path={'/'} component={Home} />
                <Route path={'/Contact'} component={Contact} />
            </div>
        </BrowserRouter>
    )
}

export default App;
