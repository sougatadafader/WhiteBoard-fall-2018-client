import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import CourseTable from "../components/CourseTable"
import CourseGrid from "../components/CourseGrid"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export default class WhiteBoard extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>WhiteBoard</h1>

                <Router>
                    <div>
                        { /*<Link to="/course/table">Table</Link>
                        <Link to="/course/grid">Grid</Link>*/ }
                        <Route path="/course/table" component={CourseTable}/>
                        <Route path="/course/grid" component={CourseGrid}/>
                        /*<div className="card-deck">
                            {
                                this.props.courses.map(function (courses, index) {
                                    return <CourseCard
                                        key={index}
                                        title={courses.title}/>
                                })
                            }
                        </div>*/}
                    </div>
                </Router>




            </div>
        );
    }

}