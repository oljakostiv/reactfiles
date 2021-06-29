import {useEffect, useState} from "react";
import {getPosts} from "../servises/Api";
import Post from "./post/Post";


export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(value =>{
            setPosts([...value.data])
        })
    }, []);
    return (
        <div>
            {
                posts.map(p=><h5 key={p.id}><Post item2={p}/></h5>)
            }
        </div>
    );
}