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

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = { courses:[]
           // courses: this.courseService.findAllCourses()
        }
    }
    componentDidMount = () =>
        this.findAllCourses();

    findAllCourses =() =>this.courseService.findAllCourses().then(courses => this.setState({courses:courses}));

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
                        <Route path="/course/table"
                               render={() =>
                                    <div>
                                   <NavigationDefault addCourse={this.addCourse}/>
                                   <NavigationTable/>
                                    <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>
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
                                       </div>
                                }/>

                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}
                                    findWidgets ={this.courseService.findWidgets}
                                    createWidget = {this.createWidget}
                                />}
                            path="/course/:courseId/edit"/>
                    </div>
                </Router>
            </div>
        );
    }
}