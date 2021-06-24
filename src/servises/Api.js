import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getPosts =()=>{
    return axiosInstance.get('/posts')
};
const getPost =(Id)=>{
    return axiosInstance.get('/posts/' + Id)
};
export {getPosts, getPost};

