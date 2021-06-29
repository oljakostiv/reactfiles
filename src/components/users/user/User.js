import {useState} from "react";
import {getPosts} from "../../servises/Api";
import PostsDetails from "../../details/PostsDetails";
import './User.css';

export default function User({item}) {

    let [postDetails, setPostDetails] = useState(null);
    let [flag, setFlag] = (false);

    return (
        <div className={'userProfile'}>
            <div className={'userName'}>{item.id} - {item.name} - {item.username}</div>
            <div className={'userEmail'}>{item.email}</div>
            <button className={'btnUser'} onClick={() =>
                {
                    getPosts(item.id).then(value => setPostDetails(value.data))
                    setFlag(!flag);
                }}>click!
            </button>

            {
                flag && <PostsDetails item1={postDetails}/>
            }
            <hr/>
        </div>
    );
}
