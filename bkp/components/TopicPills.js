import React from 'react'


const TopicPills = ({item}) => {
    return(
        <div className="m-2 ">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active"
                       href="#">{item.title}</a></li>
            </ul>
        </div>
    )
}

export default TopicPills