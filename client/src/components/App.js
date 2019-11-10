import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            <div>PageOne</div>
            <Link to="/PageTwo">Page Two!</Link>
        </div>    
    )

}

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click Me!</button>
            <Link to="/">Page One!</Link>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;