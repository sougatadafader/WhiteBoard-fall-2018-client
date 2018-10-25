import React from 'react'
import {Component} from "react";
import {Link} from 'react-router-dom'

export default class Register extends Component {

    render(){
        return(
            <div className="card text-center m-5">
                <div className="card-header">
                    Registration Form
                </div>
                <div className="card-body">
                    <form id="Login">

                        <div className="form-group row">

                            <label className="col-sm-2 col-form-label">Username</label>
                            <input type="Username" className="form-control col-sm-10" id="inputEmail" placeholder="UserName"/>

                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <input type="password" className="form-control col-sm-10" id="inputPassword" placeholder="Password"/>
                        </div>
                        <Link to={"/"}><button type="submit" className="btn btn-primary mr-2">Login</button></Link>
                        <button type="submit" className="btn btn-primary ml-2">Register</button>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Made with ReactJs
                </div>
            </div>
        );
    }
}