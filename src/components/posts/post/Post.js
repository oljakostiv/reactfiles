import {useState} from "react";
import Comment from "../../comments/comment/Comment";
import {getComments} from "../../servises/Api";
import Comments from "../../comments/Comments";

export default function Post({item2}){

    let [comments, setComments] = useState(null);

    return (
        <div>
            <div>
                {item2.id} - Title: {item2.title}.
            </div>
            <div>
                Body: {item2.body}.
            </div>

            <button onClick={(id) =>{
                getComments(item2.id).then(value => setComments(value.data))
            }}>Comments</button>

            {
                comments && <Comments item3={comments}/>
            }
            <hr/>
        </div>
    );
}