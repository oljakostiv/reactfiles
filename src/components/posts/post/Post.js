import {getPostComments} from "../../servises/Api";
import {useState} from "react";
import PostComments from "./PostComments";

export default function Post({item2}) {
    let [comments, setComments] = useState([]);
    let [flag, setFlag] = useState(false)


    return (
        <div>
            <div>
                {item2.id} - Title: {item2.title}
                <div>
                    Body: {item2.body}.
                </div>
                <button onClick={(id) => {
                getPostComments(item2.id).then(value => setComments(value.data))

                setFlag(!flag);

            }}>Comments</button>
            </div>

            {flag && <PostComments commentsOfPosts={comments}/>}

        </div>
    );
}