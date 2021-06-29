
import {useState} from "react";
import {getComments} from "../servises/Api";
import "./PostsDetails.css";
import CommentsDetails from "../details/CommentsDetails";


export default function PostsDetails({item1, item1:{id}}) {


    let [commentsDetails, setCommentsDetails] = useState([]);
    return (
        <div className={'postsFiles'}>
            {
                item1.map(value => <h5 key={value.id}> {value.title}</h5>)
            }

            <button className={'btnPosts'} onClick={(id) => {
                getComments(id).then(value => setCommentsDetails([...value.data]))
            }}>click more!</button>

                <CommentsDetails item2={commentsDetails}/>

            <hr/>
        </div>

    );
}