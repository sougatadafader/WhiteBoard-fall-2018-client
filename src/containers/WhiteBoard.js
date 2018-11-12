import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";
import CourseAdd from "../components/CourseAdd";
import NavigationDefault from "../components/NavigationDefault";
import NavigationTable from "../components/NavigationTable";
import NavigationGrid from "../components/NavigationGrid";
import Profile from "../components/Profile";
import { Redirect } from 'react-router-dom';
import Login from "../components/Login"
import Register from "../components/Register"
import UserService from "../services/UserService";


export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses:[],
            loggedInFlag : false,
            currentUser:''

           // courses: this.courseService.findAllCourses()
        }
    }
    componentDidMount = () =>{}
        //this.findAllCourses();

    findAllCourses =() =>this.courseService.findAllCourses().then(courses => this.setState({courses:courses,loggedInFlag:true}));

    loginFunc =() =>{

        this.setState ({loggedInFlag: true})
    }

    handleClickEvent = (user,pass) => {

        let credentials = {
            username: user.trim(),
            password: pass.trim()
        }
        if(credentials.username && credentials.password)
        {
            UserService.login(credentials)
                .then(
                    user=>{ (this.setState({
                        currentUser: user
                    }))}).then(this.findAllCourses)
            /*window.location.href="/Home"*/

        }};
    addCourse = newCourse => {
        this.courseService.createCourse(newCourse).then(() => this.findAllCourses());
    }

    deleteCourse = courseToDelete => {
        this.courseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteModule = module =>{
        this.courseService.deleteModule(module)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    createWidget = (selectedTopic,widget) =>{
        this.courseService.createWidget(selectedTopic,widget)
        this.setState(
            {
                courses: this.courseService.findAllCourses()
            }
        )

    }

    render() {

        return (

            <div>


                <Router>

                    <div className="mt-5 pt-3">
                        {(this.state.loggedInFlag)?
                        (<Redirect to="/course/table" courses={this.state.courses}/>)
                        :
                        (<Redirect to="/login" />)}
                        <Route path="/login" render={() => <Login login={this.handleClickEvent} />}/>
                        <Route path="/Register" render={() => <Register/>}/>
                        <Route path="/profile"
                               render={() =>
                                   <Profile/>
                               }/>
                        <Route path="/course/table"
                               render={() =>
                                    <div>
                                   <NavigationDefault addCourse={this.addCourse}/>
                                   <NavigationTable/>
                                    <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}
                                        userId = {this.state.currentUser}
                                    />
                                       </div>
                                   }/>
                        <Route path="/course/grid"
                                render={() =>

                                <div>
                                    <NavigationDefault addCourse={this.addCourse}/>
                                    <NavigationGrid/>
                                    <CourseGrid addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>
                                </div>}/>

                        <Route
                            exact
                            render={(props) =>
                                (this.state.loggedInFlag)?(
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}
                                    findWidgets ={this.courseService.findWidgets}
                                    createWidget = {this.createWidget}
                                />):(<div>Empty</div>)}
                            path="/course/:courseId/edit"/>
                    </div>
                </Router>
            </div>
        );
    }
}