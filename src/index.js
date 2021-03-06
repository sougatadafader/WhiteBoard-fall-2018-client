import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Switch, Route, IndexRoute} from 'react-router-dom'


import WhiteBoard from './containers/WhiteBoard'


ReactDOM.render(
    <div className="container-fluid">
        <Router>
            <div>
            <Route path="/" component={WhiteBoard}/>
            </div>
        </Router>
    </div>,
    document.getElementById("root")
)