import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'



const stateToPropertyMapper = state => {
    console.log(state.widgets)
    return({
    widgets: state.widgets

})}


const dispatcherToPropertyMapper = dispatch =>({
    init: (widgets,topic) => dispatch({
        type:'INIT',
        widgets:widgets,
        topic:topic
    }),
    createWidget_old:(widget) =>dispatch({
        type: 'CREATE_WIDGET_old',
        widget:widget,
    }),
    deleteWidget_old:(widget,topic) => dispatch({
            type: 'DELETE_WIDGET_old',
            widget: widget,
            topic:topic
        }),
    updateWidgetold: widget => dispatch({
        type: 'UPDATE_WIDGET_old',
        widget:widget
    }),
    moveUp: widget => dispatch({
        type: 'MOVE_UP',
        widget:widget
    }),
    moveDown: widget => dispatch({
        type: 'MOVE_DOWN',
        widget:widget
    }),
    loadWidgets: (topicId) => {
        console.log("The topic Id is "+topicId)
        let url = "https://guarded-depths-89666.herokuapp.com/api/topic/"
        url += topicId
        url += "/widget"
        fetch(url,{
            credentials: 'include'
        })
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    updateWidget: (widgetType,widgetId,widget) => {
        let url = "https://guarded-depths-89666.herokuapp.com/api/"
        url+=widgetType
        url += "/widget/"
        url += widgetId
        console.log(widget)
        fetch(url,{
            method:'PUT',
            credentials: 'include',
            body: JSON.stringify(widget),
            headers:{
                'content-type':'application/json'
            }})
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: 'UPDATE_WIDGETS',
                    widgets: widgets
                })
            )
    },
    deleteWidget: (wid,widgetType,topicId) => {
        let url = "https://guarded-depths-89666.herokuapp.com/api/"
        //url+=topicId+"/"
        console.log(widgetType)
        url+=widgetType
        url+="/widget/"
        url += wid


        fetch(url,{
            method:'DELETE',

            }).then(widgets => dispatch({
                    type: 'DELETE WIDGET',
                    widgets: widgets
                })
            )
    },
    createWidget: (topicId,widgetType,widget) => {
        let url = "https://guarded-depths-89666.herokuapp.com/api/topic/"
        url+=topicId
        url += "/widget/"
        url+=widgetType
        console.log(url)
        fetch(url,{
            method:'POST',
            credentials: 'include',
            body: JSON.stringify(widget),
            headers:{
                'content-type':'application/json'
            }})
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: 'CREATE_WIDGET',
                    widgets: widgets
                })
            )
    },
    findWidget: (widgetId,widgetType) => {
        let url = "https://guarded-depths-89666.herokuapp.com/api/"
        url += widgetType
        url += "/widget/"
        url += widgetId

        fetch(url,{
            credentials: 'include'
        })
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: 'FIND_WIDGET_BY_ID',
                    widgets: widgets
                })
            )
    },
})


const WidgetListContainer = connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer