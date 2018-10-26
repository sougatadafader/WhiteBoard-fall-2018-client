export default class LessonService {
    static findAllLessons = (mId) =>{
        let url ="https://ancient-waters-60816.herokuapp.com/api/module/{mId}/lesson";
        return fetch(url)
            .then(response =>
                response.json())};

    static createLesson = (lesson,mid )=>{

        let url ="https://ancient-waters-60816.herokuapp.com/api/module/{mId}/lesson";
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

        let url ="https://ancient-waters-60816.herokuapp.com/api/topic/{lid}";
        return fetch(url)
            .then(response =>
                response.json())};

    static updateLesson = (lid,topic) => {
        let url ="https://ancient-waters-60816.herokuapp.com/api/lesson/{lid}";
        return fetch(url, {
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response =>
            response.json());
    }

    static deleteLesson = (lid )=>{
        let url ="https://ancient-waters-60816.herokuapp.com/api/lesson/{lid}";
        fetch(url)
            .then(response =>
                response.json())};
}