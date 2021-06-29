import {useState} from "react";
import {getUserPosts} from "../../servises/Api";
import UserPosts from "./UserPosts";
import './User.css'



export default function User({item}){

    let [userPosts, setUserPosts] = useState([]);
    let [flag, setFlag] = useState(false);

    return (
        <div>
            <div className={'nameUser'}>
                {item.id} - Name: {item.name}.
            </div>
            <div className={'addressUser'}>
                Address: {item.address.city}, {item.address.street}, {item.address.suite}.
            </div>

            <button className={'btnUser'} onClick={(id) =>{
            getUserPosts(item.id).then(value => setUserPosts(value.data))
                setFlag(!flag);
            }}>Posts</button>

            {flag &&<UserPosts itemUserPosts={userPosts}/>}
            <hr/>
        </div>
    );
}