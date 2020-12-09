import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/HomePage/HomePage';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
