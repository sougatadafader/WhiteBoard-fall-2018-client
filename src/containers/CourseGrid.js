import React from 'react'
import CourseCard from "../components/CourseCard";


const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    <div className="container mt-5">
        <div className="container row">
        {
                courses.map((course, index) =>
                    (<CourseCard
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}/>)
                )
        }
        </div>
    </div>

export default CourseGrid