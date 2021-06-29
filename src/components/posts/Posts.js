import {useEffect, useState} from "react";
import {getPosts} from "../servises/Api";
import Post from "./post/Post";


export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data])
        })
    }, []);
    return (
        <div>
            {
                posts.map(value => <h5 key={value.id}><Post item2={value}/></h5>)
            }
        </div>
    );
}