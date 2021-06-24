import './App.css';
import {useEffect, useState} from "react";
import {getPosts, getPost} from "./servises/Api";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/details/PostDetails";


export default function App() {
    let [posts, setPosts] = useState([]);
    let [postDetails, setPostDetails] = useState(null);

    useEffect(()=>{
    getPosts().then(value=> {
        setPosts(value.data)
    });
    }, []);
    function selectPost(id) {
        console.log(id)
        getPost(id).then(({data}) => setPostDetails(data))
    }
    return (
        <div>

                <Posts items={posts} selectPost={selectPost}/>
                <hr/>

            {
               postDetails && <PostDetails item={postDetails}/>
            }


        </div>
    );
}

