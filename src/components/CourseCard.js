import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
   <div className=" card col-md-4 col-lg-2 col-sm-12">
       <img className="card-img-top" src="https://picsum.photos/300/200"/>
       <div className="card-body">
           <Link to={`/course/${course.id}/edit`}><h6>{course.title}</h6></Link>
           <p className="card-text">Course Description.</p>
           <div className="row">
               <Link to={`/course/${course.id}/edit`}><a className="btn fa fa-2x fa-pencil pull-right"></a></Link>
               <a onClick={() => deleteCourse(course)} className="btn text-danger fa fa-2x fa-trash pull-right"></a>
           </div>
       </div>
   </div>

export default CourseCard