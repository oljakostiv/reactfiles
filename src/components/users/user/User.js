import {useState} from "react";
import {getPosts} from "../../servises/Api";
import PostsDetails from "../../details/PostsDetails";

export default function User({item}) {

    let [postDetails, setPostDetails] = useState(null);

    return (
        <div>
            <div>{item.id} - {item.name} - {item.username}</div>
            <div>{item.email}</div>

            <button onClick={(id) => {
                getPosts(item.id).then(value => setPostDetails(value.data))
            }}>click!
            </button>

            {
                postDetails && <PostsDetails item1={postDetails}/>
            }
            <hr/>
        </div>
    );
}