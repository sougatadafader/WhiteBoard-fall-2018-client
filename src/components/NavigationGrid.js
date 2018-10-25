import React from 'react'
import {Link} from 'react-router-dom'

const link = (<Link to={`/course/table`}><i className="btn text-dark fa fa-list" title="Switch to table view"></i></Link>);
const NavigationGrid = () =>
    <div className="table-active d-none d-md-block d-lg-block">
                        <div className=" d-flex pt-4 pb-2">
                            <div className="col-md-6 pl-5">Recent Documents</div>
                            <div className="col-md-2 "><select className="form-control">
                                <option>Owned By me</option>
                            </select></div>
                            <div className="col-md-2">{link}</div>
                            <div className="col-md-2"><i className="btn fa fa-sort"></i></div>
                        </div>
                    </div>
export default NavigationGrid