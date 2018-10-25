import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>

   <tr>
        <td><i className="btn fa fa-file text-primary"/>
        <Link to={`/course/${course.id}/edit`}>{course.title}</Link>
        </td>
        <td>
            Me
        </td>
        <td>
            9/28/2018: 12 PM
        </td>
        <td>
            <button onClick={() => deleteCourse(course)} className="btn btn-danger fa fa-times"></button>
        </td>
    </tr>

export default CourseRow