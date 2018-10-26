import React, {Component} from 'react'
import CourseService from "../services/CourseService";

export default class CourseAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'New Course'
        }
    }
    updateForm = event =>
        this.setState({
            title: 'New Course'
        })
    handleClickEvent = event => {
        event.preventDefault();
        let course = {
            title: this.state.title
        }
            this.props.addCourse(course)
        };

    render() {
        return(
            <div className="row">
                <input
                    onChange = {(event) => this.setState({title:event.target.value})}
                    id="Course-input"
                    className="form-control col-md-10 col-sm-6 col-9 mt-1"/>
                <button
                    onClick={(event) => this.handleClickEvent(event)}


                        /*() => this.props.addCourse({
                        id: (new Date()).getTime() + '',
                        title: this.state.title,
                        modules:[
                            {
                                'id': (new Date()).getTime() + '_module',
                                'title': 'New Module',
                                'lessons': [
                                    {
                                        'id': (new Date()).getTime() + '_lessons',
                                        'title': 'New Lesson',
                                        'topics': [
                                            {
                                                'id': (new Date()).getTime() + '_topic',
                                                'title': 'New Topic',
                                                'widgets': [
                                                    {
                                                        id: (new Date()).getTime() + '_wid',
                                                        type: "HEADING",
                                                        name:'',
                                                        size: 1,
                                                        text: "The Document Object Model"
                                                    }
                                                    ]
                                            }
                                        ]
                                    }]}]
                    })*/
                    className="btn btn-primary fa-2x fa fa-plus col-md-2 col-sm-3 col-3"></button>
            </div>
        )
    }
}