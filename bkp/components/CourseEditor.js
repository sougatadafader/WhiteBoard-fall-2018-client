import React from 'react'

import ModuleList from './ModuleList';
import LessonTabs from "./LessonTabs";


export default class CourseEditor
    extends React.Component {
    render() {

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="col-sm-3">
                    <button className="btn btn-dark fa fa-2x fa-times mb-2 mr-4"/>
                <a className="navbar-brand" href="#">Course Name</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="pull-right collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ml-5 mr-4">
                            <a className="nav-link" href="#">Build<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active ml-5 mr-4">
                            <a className="nav-link" href="#">Pages</a>
                        </li>
                        <li className="nav-item ml-5 mr-4">
                            <a className="nav-link" href="#">Theme</a>
                        </li>
                        <li className="nav-item ml-5 mr-4">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item ml-5 mr-4">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item ml-5 mr-4">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item ml-5 mr-4">
                            <button className="btn btn-dark fa fa-plus  mt-2"></button>
                        </li>
                    </ul>
                </div>
            </nav>
                <div className="row">
                    <div>
                        <ModuleList/>
                    </div>
                    <div>
                        <LessonTabs/>
                    </div>
                </div>
            </div>

        )
            {/*<div className="row">
                <div className="col-4">
                    <h2>Modules</h2><ModuleList/>
                </div>
                <div className="col-8">
                    <h2>Lessons</h2><LessonTabs/>
                </div>
            </div>*/}

    }
}
