
import {useState} from "react";
import {getComments} from "../servises/Api";
import "./PostsDetails.css";
import CommentsDetails from "../details/CommentsDetails";


export default function PostsDetails({item1, userId}) {

    let [commentsDetails, setCommentsDetails] = useState([]);
    let [flag, setFlag] = useState(false);
    return (
        <div className={'postsFiles'}>
            {
                item1.map(value => <h5 key={value.id}> {value.title}</h5>)
            }

            <button className={'btnPosts'} onClick={() => {
                getComments(userId).then(value => setCommentsDetails([...value.data]))
                setFlag(!flag);
            }}>click more!</button>

            {
                flag && commentsDetails.map(value => <CommentsDetails item2={value}/>)
            }
        </div>
    );
}