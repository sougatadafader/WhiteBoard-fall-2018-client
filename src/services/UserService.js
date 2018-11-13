
export default class UserService {
    static register = user =>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/register";
        return fetch(url,{
            method:'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
    }

    static login = user =>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/login";
        return fetch(url,{
            method:'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
    }

    static findUserById = userId=>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/user/{userId}";
        return fetch(url,{
            credentials: 'include'
        })
            .then(response =>
                response.json())};

    static profile = () => {
        let url ="https://guarded-depths-89666.herokuapp.com/api/profile";
        return fetch(url, {
            credentials: 'include'
        })
            .then(response =>
                response.json())};


    static logout =() =>{
        let url ="https://guarded-depths-89666.herokuapp.com/api/logout";
        fetch(url, {
            credentials: 'include'
        })
            .then(response =>
                response.json())};


}