import {useState} from "react";
import {getUserPosts} from "../../servises/Api";
import UserPosts from "./UserPosts";



export default function User({item}){

    let [posts, setPosts] = useState([]);

    return (
        <div>
            <div>
                {item.id} - Name: {item.name}.
            </div>
            <div>
                Address: {item.address.city}, {item.address.street}, {item.address.suite}.
            </div>

            <button onClick={(id) =>{
            getUserPosts(item.id).then(value => setPosts(value.data))
            }}>Posts</button>

                 <UserPosts itemUserPosts={posts}/>
            <hr/>
        </div>
    );
}