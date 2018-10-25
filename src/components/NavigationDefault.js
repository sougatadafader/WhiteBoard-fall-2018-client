import React from 'react'
import {Link} from 'react-router-dom'
import CourseAdd from "./CourseAdd";


const NavigationDefault = ({addCourse}) =>
    <nav className="navbar navbar-dark fixed-top bg-primary">
                    <div className="container-fluid">
                        <div className="col-md-2 col-sm-3 col-3">
                            <button className="navbar-toggler " type="button" data-toggle="collapse"
                                      data-target="#navbarToggleExternalContent"
                                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-md-4 d-none d-md-block d-lg-block">
                            <label className="navbar-brand">Course Manager</label>
                        </div>
                       
                        <div className="col-md-6 col-sm-9 col-9">
                            <CourseAdd addCourse={addCourse}/>
                        </div>
                    </div>
                </nav>

export default NavigationDefault