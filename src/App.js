import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PgUserList from './pages/PgUserList';
import PgUserUpdate from './pages/PgUserUpdate';
import PgUserCreate from './pages/PgUserCreate';


class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <header>
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="/">User management</a>
                    </nav>
                </header>


                {/* Body */}
                <BrowserRouter>
                    <div className="container p-3">
                        <Route exact path="/" component={PgUserList} />
                        <Route exact path="/create" component={PgUserCreate} />
                        <Route exact path="/update/:id" component={PgUserUpdate} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
