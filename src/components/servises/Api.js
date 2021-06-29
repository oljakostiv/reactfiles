import axios from "axios"
let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});
const getUsers = ()=>{
    return axiosInstance.get('users/')
};
const getPosts = (id)=>{
    return axiosInstance.get('users/' + id + '/posts')
};
const getComments = (id) =>{
    return axiosInstance('posts/' + id + '/comments')
};

export {getUsers, getPosts, getComments};