import {useEffect, useState} from "react";
import {getComment} from "../../api/Api";

export default function CommentDetails({match: {params: {id}}}) {

    let [comment, setComment] = useState({});
    useEffect(() => {
        getComment(id).then(value => {
            setComment({...value.data});
        });
    }, [id]);
    return (
        <div>
            <hr/>
            {comment.id} - {comment.body}.
        </div>
    );
}