import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./CourseCard";

class CourseGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const link = (<Link to={`/course/table`}><i className="btn text-dark fa fa-list" title="Switch to table view"></i></Link>);
        return (
            <div>
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
                        <div className="col-md-4 col-sm-6 col-6">
                            <input className="form-control" id="CrTitle" placeholder="New Course Title"/>
                        </div>
                        <div className="col-md-2 col-sm-3 col-3">
                            <button style={{
                                background: 'none',
                                border: 'none'
                            }} className="btn-remove_bound"><i
                                className="btn btn-primary fa-2x fa fa-plus"></i></button>
                        </div>
                    </div>
                </nav>


                <div style={{
                    paddingBottom: "5rem",
                    color: "black"
                }}>
                    <div className="table-active">
                        <div className=" d-flex pt-4 pb-2">
                            <div className="col-md-3">Title</div>
                            <div className="col-md-3"><select className="form-control">
                                <option>Owned By</option>
                            </select></div>
                            <div className="col-md-2">Last modified by me</div>
                            <div className="col-md-2">{link}</div>
                            <div className="col-md-2"><i className="btn fa fa-sort"></i></div>


                        </div>
                    </div>

                    <div className="container mt-5">
                        <div className="card-columns">
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>

                        </div>
                    </div>
                </div>


            </div>


        )

    }
}
export default CourseGrid