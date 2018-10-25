import React from 'react'
import TopicPill from "./TopicPill";



const TopicPills = ({topics, selectTopic, selectedTopic,deleteTopic,editTopic,addTopic, findWidgets,createWidget}) =>
    <div className="topics mt-4">
        <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    selected={selectedTopic === topic}
                    selectTopic={selectTopic}
                    deleteTopic={deleteTopic}
                    editTopic={editTopic}
                    topic={topic}
                    selectTopic = {selectTopic}
                    key={index}/>
            )
        }
        <li>
            <input type="text" id="topic-add" className="btn border-dark m-1"/>
            <button className="btn btn-primary" id="topic-add-btn" onClick={() => addTopic()}>Add Topic</button>
        </li>
        </ul>

        {/*<WidgetList widgets={findWidgets(selectedTopic)}
                    createWidget = {createWidget}/>
        <button className="btn btn-danger pull-right m-4" id="add-widget" onClick={() => createWidget(selectedTopic,{
            id: (new Date()).getTime() + '_wid',
            type: 'HEADING',
            size: 1,
            text: 'The Document'
        })}><i className="fa fa-plus"></i></button>*/}
    </div>

export default TopicPills