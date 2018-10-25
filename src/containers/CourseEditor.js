import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";
import {Route} from 'react-router-dom'
import LessonTabs from "../components/LessonTabs";
import {Link} from 'react-router-dom'
import TopicPills from "../components/TopicPills";
import WidgetList from "../components/WidgetList";

import WidgetReducer from '../reducers/WidgetReducer'
import WidgetListContainer from '../containers/WidgetListContainer'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store= createStore(WidgetReducer)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;

        // use courseId to find the course object from the
        // courses array passed in as a property

        const course = this.props.courses.find(
            course => course.id === courseId);
        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];
        const selectedTopic = selectedLesson.topics[0]

        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic:selectedTopic,
            selectedModuleId:'',
            selectedLessonId:'',
            selectedTopicId:'',
            isEdit:false,
            isLessonEdit:false,
            isTopicEdit:false
        }
        console.log(course)
    }
    addLesson = () => {

        let lessonName='New Lesson'
        let lessonInput = document.getElementById('lesson-add').value
        if(lessonInput!='')
        {
            lessonName = lessonInput
        }
        let course = this.state.course
        let modules = course.modules
        let selectedId = this.state.selectedModule.id
        let ptr = 0
        let isLessonEdit=this.state.isLessonEdit
        for(let m in modules)
        {
            if(modules[m].id == selectedId)
            {
                ptr = m
                break
            }
        }
        if(!isLessonEdit) {
            let lessonObj = {
                id:(new Date()).getTime() + '_lesson',
                title: lessonName,
                topics:[
                    {
                        id:(new Date()).getTime() + '_topic',
                        title:'New Topic',
                        widgets: [
                            {
                                id: (new Date()).getTime() + '_wid',
                                type: "HEADING",
                                size: 1,
                                text: "The Document Object Model"
                            }]
                    }
                ]}
            course.modules[ptr].lessons.push(lessonObj)
        }
        else
        {
            let lessons = course.modules[ptr].lessons
            let selectedLessonId = this.state.selectedLessonId
            for(let l in lessons)
            {
                if(lessons[l].id == selectedLessonId)
                {
                    lessons[l].title = lessonName
                    break
                }


            }
            this.setState(
                {
                    selectedLessonId:'',
                    isLessonEdit:false
                }
            )
            document.getElementById('lesson-add-btn').innerHTML = 'Add Lesson'
        }
        this.setState({
            course:course
        })
        document.getElementById('lesson-add').value = ''
    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
    }
    addModule = () => {

        let moduleName = 'New Module'
        let modInput = document.getElementById('module-add').value
        if(modInput != '')
        {
            moduleName = modInput
        }
        let modObj = {

            id: (new Date()).getTime() + '_module',
            title:moduleName,
            lessons:[
                {
                    id:(new Date()).getTime() + '_lesson',
                    title:'New Lesson',
                    topics:[
                        {
                            id: (new Date()).getTime() + '_topic',
                            title:'New Topic',
                            widgets:[{
                                id: (new Date()).getTime() + '_wid',
                                type: "HEADING",
                                size: 1,
                                text: "The Document Object Model"
                            }]
                        }
                    ]
                }
            ]
        }
        let course = this.state.course
        let isEdit = this.state.isEdit
        if( !isEdit )
        {
        course.modules.push(modObj)
        }
        else
        {
            let modules = course.modules
            let selectedModuleId = this.state.selectedModuleId
            

            for(let m in modules)
            {
                if(modules[m].id == selectedModuleId )
                {
                    modules[m].title = moduleName
                    break
                }
            }
            this.setState({
                selectedModuleId:""
            })
            this.setState({
                isEdit:false
            })
            document.getElementById('module-add-btn').innerHTML = 'Add'
        }
        this.setState(
            {
                course:course
            }
        )
        //console.log(this.state.course)
        document.getElementById('module-add').value = ''
    }

    editModule = (module) =>
    {
        document.getElementById('module-add').value = module.title
        this.setState(
            {
                selectedModuleId:module.id
            }
        )
        this.setState(
            {
                isEdit:true
            }
        )
        document.getElementById('module-add-btn').innerHTML = 'Update'
    }
    deleteLesson = (lesson) =>
    {
        let selectedModule = this.state.selectedModule
        let course = this.state.course
        let ptr = 0
        let modules = course.modules
        for(let m in modules)
        {
            if(modules[m].id == selectedModule.id)
            {
                ptr = m
                break
            }
        }
        let lsnPtr = 0
        let lessons = modules[ptr].lessons
        for(let l in lessons)
        {
            if(lessons[l].title == lesson.title )
            {
                lsnPtr = l
                break
            }
        }
        lessons.splice(lsnPtr,1)
        this.setState(
            {
                course:course
            }
        )

    }
    editLesson = (lesson) =>
    {
        this.setState(
            {
                selectedLessonId:lesson.id,
                isLessonEdit:true
            }
        )
        document.getElementById('lesson-add').value = lesson.title
        document.getElementById('lesson-add-btn').innerHTML = 'Update Lesson'
    }

    editTopic = (topic) =>
    {
        document.getElementById('topic-add').value = topic.title
        this.setState(
            {
                isTopicEdit:true,
                selectedTopicId:topic.id
            }
        )
        document.getElementById('topic-add-btn').innerHTML = 'Update Topic'
    }
    selectTopic =(topic) =>
    {
        this.setState(
            {
                selectedTopic:topic
            }
        )

    }
    deleteTopic = (topic) =>
    {

        let course = this.state.course
        console.log(course)
        let modules = course.modules
        let selectedModule = this.state.selectedModule
        let lessons = selectedModule.lessons
        let selectedLesson = this.state.selectedLesson
        let modPtr = 0

        for(let m in modules)
        {
            if(modules[m].id == selectedModule.id)
            {
                modPtr = m
                break
            }
        }
        let lessonPtr = 0
        for(let l in lessons)
        {
            if(lessons[l].id == selectedLesson.id)
            {
                lessonPtr = l
                break
            }
        }
        let topicPtr = 0
        let topics = course.modules[modPtr].lessons[lessonPtr].topics
        for(let t in topics)
        {
            if(topics[t].id == topic.id)
            {
                topicPtr = t
                break
            }
        }
        topics.splice(topicPtr,1)
        this.setState(
            {
                course
            }
        )
        console.log(course)
    }
    addTopic = () =>
    {

        let course = this.state.course
        let modules = course.modules
        let selectedModule = this.state.selectedModule
        let lessons = selectedModule.lessons
        let selectedLesson = this.state.selectedLesson
        let modPtr = 0
        for(let m in modules)
        {
            if(modules[m].id == selectedModule.id)
            {
                modPtr = m
                break
            }
        }
        let lessonPtr = 0
        for(let l in lessons)
        {
            if(lessons[l].id == selectedLesson.id)
            {
                lessonPtr = l
                break
            }
        }
        let topicName = 'New Topic'
        let topicInp = document.getElementById('topic-add').value
        if(topicInp!='')
        topicName=topicInp
        let isTopicEdit = this.state.isTopicEdit
        if(!isTopicEdit) {
            let topicObj = {
                    id: (new Date()).getTime() + '_topic',
                    title: topicName,
                widgets:[{
                    id: (new Date()).getTime() + '_wid',
                    type: "HEADING",
                    size: 1,
                    text: "The Document Object Model"
                }]}
            course.modules[modPtr].lessons[lessonPtr].topics.push(topicObj)
        }
        else
        {
            let selectedTopicId = this.state.selectedTopicId
            let topics = course.modules[modPtr].lessons[lessonPtr].topics

            for(let t in topics)
            {
                if(topics[t].id == selectedTopicId)
                {
                    topics[t].title = topicName
                    break
                }
            }
            this.setState(
                {
                    isTopicEdit:false,
                    selectedTopicId:''
                }
            )
            document.getElementById('topic-add-btn').innerHTML = 'Add Topic'
        }
        this.setState(
            {
                course:course
            }
        )
        document.getElementById('topic-add').value = ''
    }
    
    render() {
        return(
            <div>
                <div className="navbar navbar-dark fixed-top bg-primary">
                <Link to={`/course/grid`} className="fa fa-2x fa-times text-light"></Link>
                <h2 className="text-light">
                    {this.state.course.title}
                    
                </h2>
                </div>
                <div className="row">
                    <div className="col-4">
                    
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            modules={this.state.course.modules}
                            addModule={this.addModule}
                            editModule={this.editModule} />

                    </div>
                    <div className="col-8">
                        <input type="text" id="lesson-add" className="btn border-dark"/>
                        <button className="btn btn-primary m-1"  onClick={this.addLesson} id="lesson-add-btn">Add Lesson</button>
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            deleteLesson={this.deleteLesson}
                            lessons={this.state.selectedModule.lessons}
                            editLesson={this.editLesson}
                        />
                        <TopicPills
                            selectedTopic={this.state.selectedTopic}
                            deleteTopic={this.deleteTopic}
                            topics={this.state.selectedLesson.topics}
                            editTopic={this.editTopic}
                            addTopic = {this.addTopic}
                            selectTopic = {this.selectTopic}
                            findWidgets = {this.props.findWidgets}
                            createWidget = {this.props.createWidget}
                        />
                        <br/>
                        <Provider store={store}>
                            <WidgetListContainer
                                widgetsInit={this.state.selectedTopic.widgets}
                                topic={this.state.selectedTopic}
                                />
                        </Provider>
                        {/*<WidgetList widgets={this.props.findWidgets(this.state.selectedTopic)}
                                    createWidget = {this.props.createWidget}
                        />*/ }
                    </div>
                </div>
            </div>
        )
    }
}
