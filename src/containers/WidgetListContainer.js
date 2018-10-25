import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})


const dispatcherToPropertyMapper = dispatch =>({
    init: (widgets,topic) => dispatch({
        type:'INIT',
        widgets:widgets,
        topic:topic
    }),
    createWidget:(widget) =>dispatch({
        type: 'CREATE_WIDGET',
        widget:widget,
    }),
    deleteWidget:(widget,topic) => dispatch({
            type: 'DELETE_WIDGET',
            widget: widget,
            topic:topic
        }),
    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget:widget
    }),
    moveUp: widget => dispatch({
        type: 'MOVE_UP',
        widget:widget
    }),
    moveDown: widget => dispatch({
        type: 'MOVE_DOWN',
        widget:widget
    })
})


const WidgetListContainer = connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer