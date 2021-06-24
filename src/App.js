import './App.css';
import {useEffect, useState} from "react";
import {getPosts} from "./servises/Api";
import Posts from "./components/posts/Posts";


export default function App() {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
    getPosts().then(value=> {
        setPosts(value.data)
    });
    }, []);
    function selectPost() {
        console.log('Hello! Post with id:')
    }
    return (
        <div>
            {
                posts.map(value => <Posts key={value.items} items={posts} selectPost={selectPost}/>)
            }
        </div>
    );
}

