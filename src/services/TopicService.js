export default class TopicService {
    static findAllTopics = (lid) =>{
        let TOPIC_API_URL ="https://guarded-depths-89666.herokuapp.com/api/lesson/{lid}/topic";
        return fetch(TOPIC_API_URL)
            .then(response =>
                response.json())};

    static createTopic = (module,lid )=>{

        let url ="https://guarded-depths-89666.herokuapp.com/api/lesson/{lid}/topic";
        return fetch(url,{
            method:'POST',
            credentials: 'include',
            body: JSON.stringify(module),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
    }
    static findTopicById = (tid )=>{

        let url ="https://guarded-depths-89666.herokuapp.com/api/topic/{tid}";
        return fetch(url)
            .then(response =>
                response.json())};

    static updateTopic = (tid,topic) => {
        let url ="https://guarded-depths-89666.herokuapp.com/api/topic/{tid}";
        return fetch(url, {
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response =>
            response.json());
    }

    static deleteTopic = (tid )=>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/topic/{tid}";
        fetch(url)
            .then(response =>
                response.json())};
}