import React, {Component} from 'react'
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";
import CourseService from "../services/CourseService";


export default class CourseTable extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses:[],
            loggedInFlag : false,

            // courses: this.courseService.findAllCourses()
        }
        console.log('Component Mounted')

    }
    componentDidMount = () =>{
        //this.state.courses = this.props.courses;

        this.findAllCourses();
    }

    componentDidUpdate =(prevProps) =>{
        if(this.props!=prevProps)
        {
            console.log('Component Mounted lalala')
        }
/*        this.state.courses = fetch('http://localhost:9090/api/course')
            .then(response =>
                response.json()).then(this.setState({}));*/

    }


    findAllCourses =() =>this.courseService.findAllCourses().then(courses => this.setState({courses:courses,
        loggedInFlag:true}));
    render() {

        return (
            <div>
                <table className="table">
                    <tbody>
                    {
                        ( this.state.loggedInFlag)?
                            (this.state.courses.map((course, index) =>
                            (<CourseRow
                                deleteCourse={this.props.deleteCourse}
                                key={index}
                                course={course}/>)
                        )):(<div>NO courses</div>)

                    }
                    </tbody>
                </table>
            </div>

        )}

}