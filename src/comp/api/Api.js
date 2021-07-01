import axios from 'axios'

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => {
    return axiosInstance.get('/users/')
};
const getPosts = () => {
    return axiosInstance.get('/posts/')
};
const getUserPosts = (id) => axiosInstance('/users/' + id + '/posts')

const getComments = () => {
    return axiosInstance.get('/comments/')
};
const getPostComments = (id) => axiosInstance('/posts/' + id + '/comments')


export {getUsers, getPosts, getComments, getUserPosts, getPostComments};
