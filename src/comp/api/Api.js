import axios from 'axios'

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => {
    return axiosInstance('/users/')
};
const getUser = (id) => axiosInstance('/users/' + id);

const getPosts = () => {
    return axiosInstance('/posts/')
};
const getPost = (id) => axiosInstance('/posts/' + id);

export {getUsers,getUser, getPosts, getPost};
