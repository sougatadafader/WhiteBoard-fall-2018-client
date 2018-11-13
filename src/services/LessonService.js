export default class LessonService {
    static findAllLessons = (mId) =>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/module/{mId}/lesson";
        return fetch(url,{
            credentials: 'include'
        })
            .then(response =>
                response.json())};

    static createLesson = (lesson,mid )=>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/module/{mId}/lesson";
        return fetch(url,{
            method:'POST',
            credentials: 'include',
            body: JSON.stringify(lesson),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
    }
    static findLessonById = (lid )=>{

        let url ="https://guarded-depths-89666.herokuapp.com/api/topic/{lid}";
        return fetch(url,{
            credentials: 'include'
        })
            .then(response =>
                response.json())};

    static updateLesson = (lid,topic) => {
        let url ="https://guarded-depths-89666.herokuapp.com/api/lesson/{lid}";
        return fetch(url, {
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json'
            },

            method: 'PUT',
            credentials: 'include'
        }).then(response =>
            response.json());
    }

    static deleteLesson = (lid )=>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/lesson/{lid}";
        fetch(url,{
            credentials: 'include'
        })
            .then(response =>
                response.json())};
}