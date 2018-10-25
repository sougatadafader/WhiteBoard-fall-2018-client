import React from 'react'
import {Link} from 'react-router-dom'

const link = (<Link to={`/course/grid`}><i className="btn text-dark fa-1x fa fa-th" title="Switch to grid view"></i></Link>);
const NavigationTable = ({addCourse}) =>
    <div className="table-active d-none d-md-block d-lg-block">
                        <div className=" d-flex pt-4 pb-2">
                            <div className="col-md-3">Title</div>
                            <div className="col-md-3 "><select className="form-control">
                                <option>Owned By</option>
                            </select></div>
                            <div className="col-md-2">Last modified by me</div>
                            <div className="col-md-2">{link}</div>
                            <div className="col-md-2"><i className="btn fa fa-sort"></i></div>
                        </div>
                    </div>

export default NavigationTable