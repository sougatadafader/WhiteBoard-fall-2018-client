export default class UserService {
    static register = user =>{
        let url ="http://localhost:9090/api/register";
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
        let url ="http://localhost:9090/api/login";
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
        let url ="http://localhost:9090/api/user/{userId}";
        return fetch(url)
            .then(response =>
                response.json())};

    static profile = () => {
        let url ="http://localhost:9090/api/profile";
        return fetch(url)
            .then(response =>
                response.json())};


    static logout =() =>{
        let url ="http://localhost:9090/api/logout";
        fetch(url)
            .then(response =>
                response.json())};


}