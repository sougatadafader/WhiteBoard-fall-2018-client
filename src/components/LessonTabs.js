import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons, selectLesson, selectedLesson,deleteLesson,editLesson}) =>
    <ul className="nav nav-tabs mt-3">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    deleteLesson={deleteLesson}
                    editLesson={editLesson}
                    lesson={lesson}
                    key={index}/>
            )
        }
    </ul>

export default LessonTabs