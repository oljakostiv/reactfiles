import {useState} from "react";
import {getPosts} from "../../servises/Api";
import Posts from "../../posts/Posts";



export default function User({item}){

    let [posts, setPosts] = useState(null);

    return (
        <div>
            <div>
                {item.id} - Name: {item.name}.
            </div>
            <div>
                Address: {item.address.city}, {item.address.street}, {item.address.suite}.
            </div>

            <button onClick={(id) =>{
            getPosts(item.id).then(value => setPosts(value.data))
            }}>Posts</button>

            {
                posts && <Posts item2={posts}/>
            }
            <hr/>
        </div>
    );
}