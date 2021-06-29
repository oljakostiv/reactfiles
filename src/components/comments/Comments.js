import {useEffect, useState} from "react";
import {getComments} from "../servises/Api";
import Comment from "./comment/Comment";
import "./comment/Comment.css"

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => {
            setComments([...value.data])
        })
    }, []);

    return (
        <div className={"commentsStyle"}>
            {
                comments.map(c => <h5 key={c.id}><Comment item3={c}/></h5>)
            }
        </div>
    );
}