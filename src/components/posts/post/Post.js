import {getPostComments} from "../../servises/Api";
import {useState} from "react";
import PostComments from "./PostComments";
import "./Post.css"


export default function Post({item2}) {
    let [comments, setComments] = useState([]);
    let [flag, setFlag] = useState(false)

    return (
        <div className={"postWrap"}>
            <div className={"postFile"}>
                {item2.id} - Title: {item2.title}
                <div className={"bodyPost"}>
                    Body: {item2.body}.
                </div>
                <button className={"btnPost"} onClick={(id) => {
                    getPostComments(item2.id).then(value => setComments(value.data))
                    setFlag(!flag);
                }}>Comments
                </button>

                {flag && <PostComments key={comments.id} commentsOfPosts={comments}/>}
            </div>
        </div>
    );
}