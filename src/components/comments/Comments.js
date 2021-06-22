import {useEffect, useState} from "react";
import Comment from "./comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            });
    }, []);

    return (
        <div>
            {
                comments.map((value, index) => <Comment key={index} item={value}/>)
            }
        </div>
    );
}