import React from 'react'
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";

const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div>
        <table className="table">
            <tbody>
            {
                this.state.courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}/>)
                )
            }
            </tbody>
        </table>
    </div>

export default CourseTable