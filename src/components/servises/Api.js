import axios from 'axios'

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => {
    return axiosInstance.get('/users/')
};
const getPosts = () => {
    return axiosInstance.get('/posts/')
};
const getComments = () => {
    return axiosInstance.get('/comments/')
};
const getPost = (id) => {
    return axiosInstance.get('/posts/' + id)
};
const getComment = (id) => {
    return axiosInstance.get('/comments/' + id)
};

export {getUsers, getPosts, getComments, getPost, getComment};
