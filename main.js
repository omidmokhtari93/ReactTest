import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Route} from 'react-router-dom';
import About from "./about";
import Home from "./home";

const router = (
    <div className="container">
        <HashRouter>
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
            </ul>
            <div className="card">
                <div className="card-body">
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                </div>
            </div>
        </HashRouter>
    </div>
);

ReactDOM.render(router, document.getElementById('root'));
