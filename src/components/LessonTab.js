import React from 'react'

const LessonTab = ({lesson, selectLesson, selected,deleteLesson,editLesson}) =>
    <li className="nav-item">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
            <span className="fa fa-pencil ml-4" onClick={() => editLesson(lesson)}></span>
            <span className="fa fa-trash ml-1" onClick={() => deleteLesson(lesson)}></span>

        </a>
    </li>

export default LessonTab