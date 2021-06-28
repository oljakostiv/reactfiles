import {getComments} from "../servises/Api";
import {useState} from "react";
import CommentsDetails from "./CommentsDetails";
import "./PostsDetails.css";

export default function PostsDetails({item1}) {
    let [commentsDetails, setCommentsDetails] = useState(null);
    return (
        <div className={'postsFiles'}>
            {
                item1.map(value => <h5 key={value.id}>{value.id}. {value.title}</h5>)
            }

            <button className={'btnPosts'} onClick={() => {
                getComments(item1.id).then(value => setCommentsDetails([...value.data]))
            }}>click more!</button>


            {
                commentsDetails && <CommentsDetails item2={commentsDetails}/>
            }
            <hr/>
        </div>

    );
}