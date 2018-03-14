import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PgUserCreate from './pages/PgUserCreate';

class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <header>
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="/">Navbar</a>
                    </nav>
                </header>


                {/* Body */}
                <BrowserRouter>
                    {/* here's a div */}
                    <div>
                        {/* here's a Route */}
                        <Route path="/" component={PgUserCreate} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
