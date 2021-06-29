import {useState} from "react";
import {getUserPosts} from "../../servises/Api";
import UserPosts from "./UserPosts";



export default function User({item}){

    let [posts, setPosts] = useState([]);
    let [flag, setFlag] = useState(false);

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
                setFlag(!flag);
            }}>Posts</button>

            {flag &&<UserPosts itemUserPosts={posts}/>}
            <hr/>
        </div>
    );
}