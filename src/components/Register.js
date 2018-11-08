import React from 'react'
import {Component} from "react";
import {Link} from 'react-router-dom'
import UserService from "../services/UserService";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.userService = new UserService();
        this.state={
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            currentUser:{}
        }
    }
    handleClickEvent = event => {
        event.preventDefault();
        let credentials = {
            username: this.state.username.trim(),
            password: this.state.password.trim(),
            firstName:this.state.firstName.trim(),
            lastName: this.state.lastName.trim()
        }
        if(credentials.username && credentials.password)
        {
            UserService.register(credentials)
                .then(
                    user=>{console.log(user); return(this.setState({
                        currentUser: user
                    }))})
            window.location.href="/course/grid";

        }};

    render(){
        return(
            <div className="card text-center m-5">
                <div className="card-header">
                    Registration Form
                </div>
                <div className="card-body">
                    <form id="Login">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name</label>
                            <input type="firstName" className="form-control col-sm-10" id="inputFirstName" placeholder="First Name" onChange = {(event) => this.setState({firstName:event.target.value})} required/>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name</label>
                            <input type="lastName" className="form-control col-sm-10" id="inputLastName" placeholder="Last Name" onChange = {(event) => this.setState({lastName:event.target.value})}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Username</label>
                            <input type="Username" className="form-control col-sm-10" id="inputEmail" placeholder="UserName" onChange = {(event) => this.setState({username:event.target.value})}/>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <input type="password" className="form-control col-sm-10" id="inputPassword" placeholder="Password" onChange = {(event) => this.setState({password:event.target.value})}/>
                        </div>
                        <Link to={"/login"}><button type="submit" className="btn btn-primary mr-2">Login</button></Link>
                        <button onClick={(event) => this.handleClickEvent(event)}  type="submit" className="btn btn-primary ml-2">Register</button>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Made with ReactJs
                </div>
            </div>
        );
    }
}