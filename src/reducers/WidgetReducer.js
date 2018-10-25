import CourseService from '../services/CourseService'

const WidgetReducer = (state ={widgets:[]},action) =>{
    switch (action.type){
        case "INIT":
            return {
                widgets: CourseService.findWidgets(action.topic),
                selectedTopic:action.topic
            }

        case "CREATE_WIDGET":
            CourseService.createWidget(state.selectedTopic, action.widget)
            const newWidgets2 = CourseService.findWidgets(state.selectedTopic)
            return{
                widgets:newWidgets2.slice(0),
                selectedTopic: state.selectedTopic

            }
        case "DELETE_WIDGET":
            CourseService.deleteWidget(state.selectedTopic, action.widget)
            const newWidgets = CourseService.findWidgets(state.selectedTopic)
            return{
                widgets:newWidgets.slice(0),
                selectedeleteWidgetdTopic: state.selectedTopic
            }
        case "FIND_WIDGET":
            CourseService.findWidget(state.selectedTopic,action.widget)
            const newWidget = CourseService.findWidget(state.selectedTopic)
            return{
                widget: newWidget,
                selectedTopic:state.selectedTopic
            }
        case "FIND_WIDGET_FOR_TOPIC":
            CourseService.findWidgets(state.selectedTopic,action.widget)
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        case "FIND_ALL_WIDGETS":
            CourseService.updateWidget(state.selectedTopic,action.widget)
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        case "UPDATE_WIDGET":
            CourseService.updateWidget(state.selectedTopic,action.widget)

            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        case "MOVE_UP":
            CourseService.moveUp(state.selectedTopic,action.widget)
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        case "MOVE_DOWN":
            CourseService.moveDown(state.selectedTopic,action.widget)
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
            default:
                return state
}
}

export default WidgetReducer