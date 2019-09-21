import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Link, Route} from 'react-router-dom';
import About from "./body/about";
import Home from "./body/home";
import Login from "./body/login";
import Register from "./body/register";
import {createBrowserHistory} from 'history'

const router = (
    <div className="container">
        <Router history={createBrowserHistory()}>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Register
                    </Link>
                </li>
            </ul>
            <div className="card">
                <div className="card-body">
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </div>
        </Router>
    </div>
);

ReactDOM.render(router, document.getElementById('root'));
