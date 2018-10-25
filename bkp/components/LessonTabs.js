import React from 'react'
import TopicPills from './TopicPills';
import ModuleListItem from "./ModuleListItem";

class LessonTabs extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            newTopicTitle: 'New Topic',
            pills: [
                {

                    title:'Topic 1'
                },
                {

                    title:'Topic 2'
                }
            ]

        }
        }

    addNewTopic = () => {
        let pills = this.state.pills;
        pills.push(
            {
                title: this.state.newTopicTitle
            }
        )
        this.setState(
            {
                pills : pills
            }
        )
    }
    render()
    {
        return(
            <div className="container mt-4">

                <div className="card-deck">
                    {

                        this.state.pills.map((pill) => (
                            <TopicPills item={pill}/>
                        ))
                    }
                    <button onClick={this.addNewTopic} className="nav-link btn-primary fa fa-plus m-2"></button>
                </div>

            </div>
        )
    }
}


export default LessonTabs;