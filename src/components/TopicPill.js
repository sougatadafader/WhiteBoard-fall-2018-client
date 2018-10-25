import React from 'react'

const TopicPill = ({topic, selected,deleteTopic,editTopic, selectTopic}) =>
    <li className="nav-item mr-2">
        <div className={selected ? "nav-link btn active text-white" : "nav-link btn btn-secondary "}>
        <a href="#" className="text-light" onClick={() => selectTopic(topic)} >
            {topic.title}
            <span className="fa fa-pencil ml-3" onClick={() => editTopic(topic)}></span>
        </a>
        <span className="fa fa-trash ml-1" onClick={() => deleteTopic(topic)}></span>
        </div>
    </li>

export default TopicPill