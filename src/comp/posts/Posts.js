import {useEffect, useState} from "react";
import {getPosts} from "../api/Api";
import {Route, Switch} from "react-router-dom";
import Post from "./post/Post";
import PostDetails from "./post/PostDetails";

export default function Posts({match:{url}}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data]);
        });
    }, []);
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item1={value} url={url}/> )
            }

            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>
        </div>
    );
}