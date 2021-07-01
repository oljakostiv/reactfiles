import {useEffect, useState} from "react";
import {getPosts} from "../api/Api";
import Post from "./post/Post";

export default function Posts(props) {
    let {match:{url}} = props;
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data]);
        });
    }, []);
    return (
        <div>
            <hr/>
            {
                posts.map(value => <Post key={value.id} item1={value} url={url}/> )
            }
            <hr/>
        </div>
    );
}