import {getPostComments} from "../../servises/Api";
import {useState} from "react";
import PostComments from "./PostComments";

export default function Post({item2}){
    let [comments, setComments] = useState([]);

    return (
        <div>
            <div>
                {item2.id} - Title: {item2.title} -    <button onClick={(id) =>{
                getPostComments(item2.id).then(value => setComments(value.data))
            }}>Comments</button>
            </div>

            <PostComments commentsOfPosts={comments}/>
            <div>
                {/*Body: {item2.body}.*/}
            </div>
        </div>
    );
}