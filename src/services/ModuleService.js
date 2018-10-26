export default class ModuleService {
    static findAllModules = (courseId) =>{
        let MODULE_API_URL ="http://localhost:9090/api/course/{courseId}/module";
        return fetch(MODULE_API_URL)
            .then(response =>
                response.json())};

    static createModule = (module,courseId )=>{

        let url ="http://localhost:9090/api/course/{courseId}/module";
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

        let url ="http://localhost:9090/api/module/{mid}";
        return fetch(url)
            .then(response =>
                response.json())};

    static updateModule = (mid,module) => {
        let url ="http://localhost:9090/api/module/{mid}";
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

        let url ="http://localhost:9090/api/module/{mid}";
        fetch(url)
            .then(response =>
                response.json())};
}