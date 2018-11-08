import React from 'react'
import {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import UserService from "../services/UserService";
import { Redirect } from 'react-router-dom';
import CourseService from "../services/CourseService";

class Login extends Component {

    constructor(props){
        super(props);
        this.courseService = new CourseService();
        this.userService = new UserService();
        this.state={
            username:'',
            password:'',
            currentUser:{},
            toDashboard: false,
            courses:{}
        }
    }



    render(){


        return(
            <div className="card text-center m-5">
                <div className="card-header">
                    Login Form
                </div>
                <div className="card-body">
                    <form id="Login">

                        <div className="form-group row">

                            <label className="col-sm-2 col-form-label">Username</label>
                            <input type="username" className="form-control col-sm-10" id="inputEmail" placeholder="Username" value={this.state.username}
                                   onChange = {(event) => this.setState({username:event.target.value})}/>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <input type="password" className="form-control col-sm-10" id="inputPassword" value={this.state.password} placeholder="Password"
                                   onChange = {(event) => this.setState({password:event.target.value})}
                            />
                        </div>
                        <a onClick={(event) => this.props.login(this.state.username,this.state.password)} className="btn btn-primary mr-2 text-light">Login</a>
                        <Link to={"/register"}><a
                            className="btn btn-primary ml-2 text-light">Register</a></Link>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Made with ReactJs
                </div>
            </div>
        );
    }
}
export default withRouter(Login);