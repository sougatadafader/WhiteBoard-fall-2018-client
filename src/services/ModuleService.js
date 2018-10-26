export default class ModuleService {
    static findAllModules = (courseId) =>{
        let MODULE_API_URL ="https://ancient-waters-60816.herokuapp.com/api/course/{courseId}/module";
        return fetch(MODULE_API_URL)
            .then(response =>
                response.json())};

    static createModule = (module,courseId )=>{

        let url ="https://ancient-waters-60816.herokuapp.com/api/course/{courseId}/module";
        return fetch(url,{
            method:'POST',
            credentials: 'include',
            body: JSON.stringify(module),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
    }
    static findModuleById = (mid )=>{

        let url ="https://ancient-waters-60816.herokuapp.com/api/module/{mid}";
        return fetch(url)
            .then(response =>
                response.json())};

    static updateModule = (mid,module) => {
        let url ="https://ancient-waters-60816.herokuapp.com/api/module/{mid}";
        return fetch(url, {
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response =>
            response.json());
    }


    static deleteModule = (mid )=>{

        let url ="https://ancient-waters-60816.herokuapp.com/api/module/{mid}";
        fetch(url)
            .then(response =>
                response.json())};
}