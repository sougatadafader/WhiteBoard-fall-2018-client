import React from 'react'
import {Component} from "react";
import {Link} from 'react-router-dom'
import UserService from "../services/UserService";

export default class Profile extends Component {
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

    componentDidMount = () =>{
        //this.state.courses = this.props.courses;
        UserService.profile().then(user => this.setState({username:user.username,
            password:user.password,firstName:user.firstName,lastName:user.lastName,
            currentUser:user}));;
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
            UserService.update(credentials,this.state.currentUser.userId)
                .then(
                    user=>{console.log(user); return(this.setState({
                        currentUser: user
                    }))}).then(window.location.href="/course/grid")
            //window.location.href="/course/grid";
        }};

    render(){
        return(
            <div className="card text-center m-5">
                <div className="card-header">
                    Update your Profile
                </div>
                <div className="card-body">
                    <form id="Login">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name</label>
                            <input type="firstName" className="form-control col-sm-10" id="inputFirstName" placeholder="First Name" value={this.state.firstName} onChange = {(event) => this.setState({firstName:event.target.value})} required/>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name</label>
                            <input type="lastName" className="form-control col-sm-10" id="inputLastName" placeholder="Last Name" value={this.state.lastName} onChange = {(event) => this.setState({lastName:event.target.value})}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Username</label>
                            <input type="Username" className="form-control col-sm-10" id="inputEmail" placeholder="UserName" value={this.state.username} onChange = {(event) => this.setState({username:event.target.value})}/>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <input type="password" className="form-control col-sm-10" id="inputPassword" placeholder="Password" value={this.state.password} onChange = {(event) => this.setState({password:event.target.value})}/>
                        </div>

                        <button onClick={(event) => this.handleClickEvent(event)}  type="submit" className="btn btn-primary ml-2">Update</button>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Made with ReactJs
                </div>
            </div>
        );
    }
}