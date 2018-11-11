import CourseService from '../services/CourseService'

const WidgetReducer = (state ,action) =>{
    switch (action.type){
        case "INIT":
            return {
                widgets: action.widgets,
                selectedTopic:action.topic
            }

        case "CREATE_WIDGET_old":
            CourseService.createWidget(state.selectedTopic, action.widget)
            const newWidgets2 = CourseService.findWidgets(state.selectedTopic)
            return{
                widgets:newWidgets2.slice(0),
                selectedTopic: state.selectedTopic

            }
        case "DELETE_WIDGET_old":
            CourseService.deleteWidget(state.selectedTopic, action.widget)
            const newWidgets = CourseService.findWidgets(state.selectedTopic)
            return{
                widgets:newWidgets.slice(0),
                selectedeleteWidgetdTopic: state.selectedTopic
            }
        case "FIND_WIDGET_old":
            CourseService.findWidget(state.selectedTopic,action.widget)
            const newWidget = CourseService.findWidget(state.selectedTopic)
            return{
                widget: newWidget,
                selectedTopic:state.selectedTopic
            }
        case "FIND_WIDGET_FOR_TOPIC_old":
            CourseService.findWidgets(state.selectedTopic,action.widget)
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        case "FIND_ALL_WIDGETS_old":
            CourseService.updateWidget(state.selectedTopic,action.widget)
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        case "UPDATE_WIDGETold":
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
        case 'LOAD_WIDGETS':
            return {
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return{
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return{
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            return{
                widgets: action.widgets
            }
        case "FIND_WIDGET_BY_ID":
            return{
                widgets: action.widgets
            }

            default:
                return {
                    widgets: []
                }
}
}

export default WidgetReducer