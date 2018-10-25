import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Link, Route, IndexRoute} from 'react-router-dom'

import Login from "./components/Login"
import Register from "./components/Register"
import WhiteBoard from './containers/WhiteBoard'


ReactDOM.render(
    <div className="container-fluid">
        <Router>
            <div>
            <Route exact path="/" render={() => <Login/>}/>
            <Route path="/Register" render={() => <Register/>}/>
            </div>
        </Router>
    </div>,
    document.getElementById("root")
)